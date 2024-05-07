import { Link } from '@remix-run/react'
import {
	SheetTrigger,
	SheetClose,
	SheetContent,
	Sheet,
} from '#app/components/ui/sheet'
import { Button } from '#app/components/ui/button.tsx'

const SiteHeader = () => {
	return (
		<header className="flex h-14 items-center justify-between px-4 lg:px-6">
			<div className="flex items-center justify-center">
				<CodeIcon className="h-6 w-6" />
				<span className="sr-only">Lucas Byerley</span>
			</div>
			<Sheet>
				<SheetTrigger asChild>
					<Button className="rounded-full" size="icon" variant="outline">
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
							<CodeIcon className="h-6 w-6" />
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
							to="/"
						>
							Projects
						</Link>
						<Link
							className="text-lg font-medium underline-offset-4 hover:underline"
							to="/"
						>
							Skills
						</Link>
						<Link
							className="text-lg font-medium underline-offset-4 hover:underline"
							to="/"
						>
							Contact
						</Link>
					</nav>
				</SheetContent>
			</Sheet>
		</header>
	)
}

function CodeIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	)
}

function MenuIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<line x1="4" x2="20" y1="12" y2="12" />
			<line x1="4" x2="20" y1="6" y2="6" />
			<line x1="4" x2="20" y1="18" y2="18" />
		</svg>
	)
}

function XIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	)
}

export default SiteHeader
