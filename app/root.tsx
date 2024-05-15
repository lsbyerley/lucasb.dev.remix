import {
	json,
	type LoaderFunctionArgs,
	type HeadersFunction,
	type LinksFunction,
	type MetaFunction,
} from '@remix-run/node'
import {
	Form,
	Link,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
	useSubmit,
} from '@remix-run/react'
import { withSentry } from '@sentry/remix'
import { useRef, useState } from 'react'
import { HoneypotProvider } from 'remix-utils/honeypot/react'
import { LogoIcon, MenuIcon, XIcon } from '#app/components/icons'
import SiteFooter from '#app/components/site-footer.js'
import {
	SheetTrigger,
	SheetClose,
	SheetContent,
	Sheet,
} from '#app/components/ui/sheet'
import { GeneralErrorBoundary } from '#app/components/error-boundary.tsx'
import { EpicProgress } from '#app/components/progress-bar.tsx'
import { useToast } from '#app/components/toaster.tsx'
import { Button } from '#app/components/ui/button.tsx'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuTrigger,
} from '#app/components/ui/dropdown-menu.tsx'
import { Icon, href as iconsHref } from '#app/components/ui/icon.tsx'
import { EpicToaster } from '#app/components/ui/sonner.tsx'
import tailwindStyleSheetUrl from './styles/tailwind.css?url'
import { getUserId, logout } from '#app/utils/auth.server.ts'
import { ClientHintCheck, getHints } from '#app/utils/client-hints.tsx'
import { prisma } from '#app/utils/db.server.ts'
import { getEnv } from '#app/utils/env.server.ts'
import { honeypot } from '#app/utils/honeypot.server.ts'
import { combineHeaders, getDomainUrl, getUserImgSrc } from '#app/utils/misc.tsx'
import { useNonce } from '#app/utils/nonce-provider.ts'
import { type Theme, getTheme } from '#app/utils/theme.server.ts'
import { makeTimings, time } from '#app/utils/timing.server.ts'
import { getToast } from '#app/utils/toast.server.ts'
import { useUser } from '#app/utils/user.ts'
import { ThemeSwitch, useTheme } from '#app/routes/resources+/theme'

export const links: LinksFunction = () => {
	return [
		// Preload svg sprite as a resource to avoid render blocking
		{ rel: 'preload', href: iconsHref, as: 'image' },
		// Preload CSS as a resource to avoid render blocking
		{ rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png' },
		{
			rel: 'alternate icon',
			type: 'image/png',
			href: '/favicons/favicon-32x32.png',
		},
		{ rel: 'apple-touch-icon', href: '/favicons/apple-touch-icon.png' },
		{
			rel: 'manifest',
			href: '/site.webmanifest',
			crossOrigin: 'use-credentials',
		} as const, // necessary to make typescript happy
		//These should match the css preloads above to avoid css as render blocking resource
		// { rel: 'icon', type: 'image/svg+xml', href: '/favicons/favicon.svg' },
		{ rel: 'stylesheet', href: tailwindStyleSheetUrl },
	].filter(Boolean)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [
		{ title: data ? 'lucasb.dev' : 'Error | lucasb.dev' },
		{
			name: 'description',
			content: `Personal website for software engineer lucas byerley`,
		},
	]
}

export async function loader({ request }: LoaderFunctionArgs) {
	const timings = makeTimings('root loader')
	const userId = await time(() => getUserId(request), {
		timings,
		type: 'getUserId',
		desc: 'getUserId in root',
	})

	const user = userId
		? await time(
				() =>
					prisma.user.findUniqueOrThrow({
						select: {
							id: true,
							name: true,
							username: true,
							image: { select: { id: true } },
							roles: {
								select: {
									name: true,
									permissions: {
										select: { entity: true, action: true, access: true },
									},
								},
							},
						},
						where: { id: userId },
					}),
				{ timings, type: 'find user', desc: 'find user in root' },
			)
		: null
	if (userId && !user) {
		console.info('something weird happened')
		// something weird happened... The user is authenticated but we can't find
		// them in the database. Maybe they were deleted? Let's log them out.
		await logout({ request, redirectTo: '/' })
	}
	const { toast, headers: toastHeaders } = await getToast(request)
	const honeyProps = honeypot.getInputProps()

	return json(
		{
			user,
			requestInfo: {
				hints: getHints(request),
				origin: getDomainUrl(request),
				path: new URL(request.url).pathname,
				userPrefs: {
					theme: getTheme(request),
				},
			},
			ENV: getEnv(),
			toast,
			honeyProps,
		},
		{
			headers: combineHeaders(
				{ 'Server-Timing': timings.toString() },
				toastHeaders,
			),
		},
	)
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
	const headers = {
		'Server-Timing': loaderHeaders.get('Server-Timing') ?? '',
	}
	return headers
}

function Document({
	children,
	nonce,
	theme = 'light',
	env = {},
	allowIndexing = true,
}: {
	children: React.ReactNode
	nonce: string
	theme?: Theme
	env?: Record<string, string>
	allowIndexing?: boolean
}) {
	return (
		<html lang="en" className={`${theme} h-full overflow-x-hidden`}>
			<head>
				<ClientHintCheck nonce={nonce} />
				<Meta />
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				{allowIndexing ? null : (
					<meta name="robots" content="noindex, nofollow" />
				)}
				<Links />
			</head>
			<body className="bg-background text-foreground">
				{children}
				<script
					nonce={nonce}
					dangerouslySetInnerHTML={{
						__html: `window.ENV = ${JSON.stringify(env)}`,
					}}
				/>
				<ScrollRestoration nonce={nonce} />
				<Scripts nonce={nonce} />
			</body>
		</html>
	)
}

function App() {
	const data = useLoaderData<typeof loader>()
	const nonce = useNonce()
	// const user = useOptionalUser()
	const theme = useTheme()
	// const matches = useMatches()
	// const isOnSearchPage = matches.find(m => m.id === 'routes/users+/index')
	// const searchBar = isOnSearchPage ? null : <SearchBar status="idle" />
	const allowIndexing = data.ENV.ALLOW_INDEXING !== 'false'
	useToast(data.toast)
	const [navOpen, setNavOpen] = useState(false)

	return (
		<Document
			nonce={nonce}
			theme={theme}
			allowIndexing={allowIndexing}
			env={data.ENV}
		>
			<div className="flex min-h-[100dvh] flex-col">
				<header className="flex h-14 items-center justify-between px-4 lg:px-6">
					<Link to="/" className="group grid leading-snug">
						<LogoIcon />
					</Link>
					<ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
					<Sheet open={navOpen} onOpenChange={setNavOpen}>
						<SheetTrigger asChild>
							<Button
								className="rounded-full"
								size="icon"
								variant="outline"
								aria-controls="nav-menu"
							>
								<MenuIcon className="h-6 w-6" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent
							className="flex flex-col bg-gray-950 p-6 text-gray-50"
							side="left"
						>
							<div className="mb-6 flex items-center justify-between">
								<div className="flex items-center justify-center">
									<Link to="/" className="group grid leading-snug">
										<LogoIcon />
									</Link>
									<span className="sr-only">Lucas Byerley</span>
								</div>
								<SheetClose asChild>
									<Button className="rounded-full" size="icon" variant="ghost">
										<XIcon className="h-6 w-6" />
									</Button>
								</SheetClose>
							</div>
							<nav className="flex flex-col gap-4">
								<Link
									className="text-lg font-medium underline-offset-4 hover:underline"
									to="/"
								>
									Home
								</Link>
								<Link
									className="text-lg font-medium underline-offset-4 hover:underline"
									to="/#section-featuredprojects"
									onClick={() => setNavOpen(false)}
								>
									Projects
								</Link>
								<Link
									className="text-lg font-medium underline-offset-4 hover:underline"
									to="/#section-skills"
									onClick={() => setNavOpen(false)}
								>
									Skills
								</Link>
								<Link
									className="text-lg font-medium underline-offset-4 hover:underline"
									to="/#section-contact"
									onClick={() => setNavOpen(false)}
								>
									Contact
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</header>
				<main className="flex-1">
					<Outlet />
				</main>
				<SiteFooter />
			</div>

			<EpicToaster closeButton position="top-center" theme={theme} />
			<EpicProgress />
		</Document>
	)
}

function AppWithProviders() {
	const data = useLoaderData<typeof loader>()
	return (
		<HoneypotProvider {...data.honeyProps}>
			<App />
		</HoneypotProvider>
	)
}

export default withSentry(AppWithProviders)

export function UserDropdown() {
	const user = useUser()
	const submit = useSubmit()
	const formRef = useRef<HTMLFormElement>(null)
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button asChild variant="secondary">
					<Link
						to={`/users/${user.username}`}
						// this is for progressive enhancement
						onClick={e => e.preventDefault()}
						className="flex items-center gap-2"
					>
						<img
							className="h-8 w-8 rounded-full object-cover"
							alt={user.name ?? user.username}
							src={getUserImgSrc(user.image?.id)}
						/>
						<span className="text-body-sm font-bold">
							{user.name ?? user.username}
						</span>
					</Link>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent sideOffset={8} align="start">
					<DropdownMenuItem asChild>
						<Link prefetch="intent" to={`/users/${user.username}`}>
							<Icon className="text-body-md" name="avatar">
								Profile
							</Icon>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild>
						<Link prefetch="intent" to={`/users/${user.username}/notes`}>
							<Icon className="text-body-md" name="pencil-2">
								Notes
							</Icon>
						</Link>
					</DropdownMenuItem>
					<DropdownMenuItem
						asChild
						// this prevents the menu from closing before the form submission is completed
						onSelect={event => {
							event.preventDefault()
							submit(formRef.current)
						}}
					>
						<Form action="/logout" method="POST" ref={formRef}>
							<Icon className="text-body-md" name="exit">
								<button type="submit">Logout</button>
							</Icon>
						</Form>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenu>
	)
}

export function ErrorBoundary() {
	// the nonce doesn't rely on the loader so we can access that
	const nonce = useNonce()

	// NOTE: you cannot use useLoaderData in an ErrorBoundary because the loader
	// likely failed to run so we have to do the best we can.
	// We could probably do better than this (it's possible the loader did run).
	// This would require a change in Remix.

	// Just make sure your root route never errors out and you'll always be able
	// to give the user a better UX.

	return (
		<Document nonce={nonce}>
			<GeneralErrorBoundary />
		</Document>
	)
}
