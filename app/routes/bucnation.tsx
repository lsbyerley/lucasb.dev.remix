import { json } from '@remix-run/node'
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

interface RosterItem {
	name: string
	position: string
	height: string
	weight: string
	year: string
	headshot: string
}

interface RosterApiRes {
	type: string
	roster: RosterItem[]
}

interface ScheduleItem {
	opponent: string
	vsat: string
	date: string
	time: string
	result: string
	score: string
	opponentLogo: string
}

interface ScheduleApiRes {
	type: string
	schedule: ScheduleItem[]
}

interface StatsItem {
	assists: string
	firstName: string
	lastName: string
	minutes: string
	points: string
	rebounds: string
	steals: string
	fgPercent: string
	threePercent: string
}

interface StatsApiRes {
	type: string
	stats: StatsItem[]
}

export const meta: MetaFunction = ({ data }) => [
	{ title: data ? 'lucasb.dev | BucNation' : 'Error | lucasb.dev' },
	{
		name: 'description',
		content: `A page dedicated to East Tennessee State Basketball`,
	},
]

export const loader = async () => {
	const hoopsApi = process.env.HOOPS_API
	const responsePromises = await Promise.all([
		fetch(`${hoopsApi}/api/etsu/roster`),
		fetch(`${hoopsApi}/api/etsu/schedule`),
		fetch(`${hoopsApi}/api/etsu/stats`),
	])

	const responseData = (await Promise.all(
		responsePromises.map(response => response.json()),
	)) as [RosterApiRes, ScheduleApiRes, StatsApiRes]

	return json({
		roster: responseData[0],
		schedule: responseData[1],
		stats: responseData[2],
	})
}

export const heightFromInches = (total: number) => {
	const feet = Math.floor(total / 12)
	const inches = total % 12
	return `${feet}'${inches}"`
}

export default function BucNation() {
	const { roster, schedule, stats } = useLoaderData<typeof loader>()

	return (
		<Tabs
			defaultValue="roster"
			className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6"
		>
			<header className="mb-8 flex flex-col items-center justify-between sm:flex-row">
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
				<TabsList className="mt-4 sm:mt-0">
					<TabsTrigger value="roster">Roster</TabsTrigger>
					<TabsTrigger value="schedule">Schedule</TabsTrigger>
					<TabsTrigger value="stats">Stats</TabsTrigger>
				</TabsList>
			</header>

			<TabsContent value="roster">
				<h2 className="my-8 text-center text-xl font-bold sm:text-left">
					Roster
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{roster.roster.map(r => {
						return (
							<Card className="p-4" key={r.name}>
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage
											src={`https://etsubucs.com/${r.headshot}`}
											alt={`${r.name}`}
										/>
										<AvatarFallback>{r.name[0].toUpperCase()}</AvatarFallback>
									</Avatar>
									<div>
										<h3 className="text-lg font-semibold">{r.name}</h3>
										<p className="text-gray-500 dark:text-gray-400">
											{r.position} | {r.height}
											{r.weight}
										</p>
									</div>
								</div>
							</Card>
						)
					})}
				</div>
			</TabsContent>
			<TabsContent value="schedule">
				<h2 className="my-8 text-center text-xl font-bold sm:text-left">
					Schedule
				</h2>
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{schedule.schedule.map((item, index: number) => (
						<Card key={index} className="p-4">
							<div className="flex flex-col gap-4">
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-4">
										<Avatar>
											<AvatarImage
												src={`https://etsubucs.com/${item.opponentLogo}`}
												alt={`${item.opponent}`}
											/>
											<AvatarFallback>{item.vsat}</AvatarFallback>
										</Avatar>
										<div>
											<h3 className="text-lg font-semibold">
												{item.vsat} {item.opponent}
											</h3>
											<p className="text-gray-500 dark:text-gray-400">
												{item.date}
											</p>
										</div>
									</div>
									<div className="flex items-center gap-2 min-w-24 justify-end">
										<div className="text-lg font-semibold">{item.result}</div>
										<div className="text-lg font-semibold">{item.score}</div>
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</TabsContent>
			<TabsContent value="stats">
				<h2 className="my-8 text-center text-xl font-bold sm:text-left">
					Player Stats
				</h2>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
					{stats.stats.map((player, index: number) => (
						<div
							key={index}
							className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950"
						>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-4">
									<h3 className="text-xl font-bold">
										{player.firstName[0]}. {player.lastName}
									</h3>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										{`MPG: ${player.minutes}`}
									</span>
								</div>
							</div>
							<div className="grid grid-cols-5 gap-4">
								<div className="flex flex-col items-end">
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Pts
									</span>
									<span className="font-medium">{player.points}</span>
								</div>
								<div className="flex flex-col items-end">
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Reb
									</span>
									<span className="font-medium">{player.rebounds}</span>
								</div>
								<div className="flex flex-col items-end">
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Ast
									</span>
									<span className="font-medium">{player.assists}</span>
								</div>
								<div className="flex flex-col items-end">
									<span className="text-sm text-gray-500 dark:text-gray-400">
										3pt%
									</span>
									<span className="font-medium">{player.threePercent}</span>
								</div>
								<div className="flex flex-col items-end">
									<span className="text-sm text-gray-500 dark:text-gray-400">
										Fg%
									</span>
									<span className="font-medium">{player.fgPercent}</span>
								</div>
							</div>
						</div>
					))}
				</div>
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
