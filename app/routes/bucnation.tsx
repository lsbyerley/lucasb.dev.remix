import {
	type HeadersFunction,
	type LoaderFunctionArgs,
	type ActionFunctionArgs,
	json,
} from '@remix-run/node'
import {
	type MetaFunction,
	useLoaderData,
	isRouteErrorResponse,
	useRouteError,
	type ShouldRevalidateFunction,
} from '@remix-run/react'
import { Avatar, AvatarFallback, AvatarImage } from '#app/components/ui/avatar'
import { Card } from '#app/components/ui/card'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '#app/components/ui/tabs'

interface VCActivityType {
	id: number
	activeFlag: string
	status: string
	playerFirstName: string
	playerLastName: string
	playerPosition: string
	playerWeightLbs: number
	playerHeightInches: number
	playerEligibilityYear: string
}

export const meta: MetaFunction = ({ data }) => [
	{ title: data ? 'lucasb.dev | BucNation' : 'Error | lucasb.dev' },
	{
		name: 'description',
		content: `A page dedicated to East Tennessee State Basketball`,
	},
]

export const headers: HeadersFunction = () => ({
	// your headers here
})

export const loader = async ({ request }: LoaderFunctionArgs) => {
	const reqHeaders = {
		Pb: 'iKi6oAQ2TmqZBqDc',
		'User-Agent':
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
	}

	const response = await fetch(
		'https://api.verbalcommits.com/vc/schools/chart/etsu',
		{
			headers: reqHeaders,
		},
	)
	const data = (await response.json()) as VCActivityType[]
	const filteredResults = data.filter(d => d.status === 'ENROLLMENT')

	return json({ roster: filteredResults })
}

export const action = async ({ request }: ActionFunctionArgs) => {
	return null
}

const heightFromInches = (total: number) => {
	const feet = Math.floor(total / 12)
	const inches = total % 12
	return `${feet}'${inches}"`
}

const games = [
  {
    opponent: 'TBD',
    date: 'November 18, 2024',
    score: {
      home: 0,
      away: 0,
    },
    image: 'https://generated.vusercontent.net/placeholder.svg',
  },
];

export default function BucNation() {
	const data = useLoaderData<typeof loader>()

	return (
		<Tabs
			defaultValue="roster"
			className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6"
		>
			<header className="mb-8 flex flex-col sm:flex-row items-center justify-between">
				<div className="flex items-center gap-4">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/East_Tennessee_State_Buccaneers_logo.svg/400px-East_Tennessee_State_Buccaneers_logo.svg.png"
						alt="ETSU Team Logo"
						width={40}
						height={40}
						className="h-10 w-10"
					/>
					<h1 className="text-2xl font-bold">
						East Tennessee State{' '}
						<span className="text-yellow-500">Buccaneers</span> Basketball
					</h1>
				</div>
				<TabsList className='mt-4 sm:mt-0'>
					<TabsTrigger value="roster">Roster</TabsTrigger>
					<TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="stats">Stats</TabsTrigger>
				</TabsList>
			</header>

			<TabsContent value="roster">
      <h2 className="my-8 text-xl font-bold text-center sm:text-left">Roster</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{data.roster.map(r => {
						return (
							<Card className="p-4" key={r.id}>
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage
											src="/placeholder.svg"
											alt={`${r.playerFirstName} ${r.playerLastName}`}
										/>
										<AvatarFallback>
											{r.playerFirstName[0].toUpperCase()}
											{r.playerLastName[0].toUpperCase()}
										</AvatarFallback>
									</Avatar>
									<div>
										<h3 className="text-lg font-semibold">
											{r.playerFirstName} {r.playerLastName}
										</h3>
										<p className="text-gray-500 dark:text-gray-400">
											{r.playerPosition} |{' '}
											{heightFromInches(r.playerHeightInches)} |{' '}
											{r.playerWeightLbs} Lbs
										</p>
									</div>
								</div>
							</Card>
						)
					})}
				</div>
			</TabsContent>
			<TabsContent value="schedule">
				<h2 className="my-8 text-xl font-bold text-center sm:text-left">Schedule</h2>
        <p>Coming soon..</p>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{games.map((game, index) => (
						<Card key={index} className="p-4">
							<div className="flex flex-col gap-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<img
											src="https://generated.vusercontent.net/placeholder.svg"
											alt={`Opponent ${index + 1}`}
											width={40}
											height={40}
											className="h-10 w-10 rounded-full"
										/>
										<div>
											<h3 className="text-lg font-semibold">{game.opponent}</h3>
											<p className="text-gray-500 dark:text-gray-400">
												{game.date}
											</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<div className="text-lg font-semibold">
											{game.score.home}
										</div>
										<div className="text-lg font-semibold">
											{game.score.away}
										</div>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</TabsContent>
      <TabsContent value='stats'>
        <h2 className="my-8 text-xl font-bold text-center sm:text-left">Stats</h2>
        <p>Coming soon..</p>
      </TabsContent>
		</Tabs>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()
	if (isRouteErrorResponse(error)) {
		return <div />
	}
	return <div />
}

export const shouldRevalidate: ShouldRevalidateFunction = () => {
	return true
}
