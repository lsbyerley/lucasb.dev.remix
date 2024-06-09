import  { type HeadersFunction, type LoaderFunctionArgs, type ActionFunctionArgs , json } from "@remix-run/node";
import { type MetaFunction, useLoaderData, isRouteErrorResponse, useRouteError ,type  ShouldRevalidateFunction } from "@remix-run/react";
import { Avatar, AvatarFallback, AvatarImage } from "#app/components/ui/avatar"
import { Button } from "#app/components/ui/button";
import { Card } from "#app/components/ui/card";


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
	
];

export const headers: HeadersFunction = () => (
  {
    // your headers here
  }
);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const reqHeaders = {
    Pb: "MV7mOE51zp9clOm7",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
  };

  const response = await fetch("https://api.verbalcommits.com/vc/schools/chart/etsu", {
    headers: reqHeaders,
  });
  const data = await response.json() as VCActivityType[];
  const filteredResults = data.filter((d) => d.status === 'ENROLLMENT');

  return json({ roster: filteredResults });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};

const heightFromInches = (total: number) => {
  const feet = Math.floor(total / 12);
  const inches = total % 12;
  return `${feet}'${inches}"`;
}

export default function BucNation(){
  const data = useLoaderData<typeof loader>();

  /* const games = [
    {
      opponent: "Los Angeles Lakers",
      date: "October 18, 2023",
      score: {
        home: 112,
        away: 104,
      },
      image: "/opponent1.jpg",
    }]; */

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 md:px-6">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/East_Tennessee_State_Buccaneers_logo.svg/400px-East_Tennessee_State_Buccaneers_logo.svg.png" alt="ETSU Team Logo" width={40} height={40} className="w-10 h-10" />
          <h1 className="text-2xl font-bold">East Tennessee State <span className="text-yellow-500">Buccaneers</span> Basketball</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            Schedule
          </Button>
          <Button variant="outline" size="sm">
            Stats
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.roster.map((r) => {
          return (
            <Card className="p-4" key={r.id}>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt={`${r.playerFirstName} ${r.playerLastName}`} />
                  <AvatarFallback>{r.playerFirstName[0].toUpperCase()}{r.playerLastName[0].toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{r.playerFirstName} {r.playerLastName}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{r.playerPosition} | {heightFromInches(r.playerHeightInches)} | {r.playerWeightLbs} Lbs</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
      {/*<h2 className="my-8 text-xl font-bold">Schedule</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <Card key={index} className="p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt={`Opponent ${index + 1}`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{game.opponent}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{game.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-lg font-semibold">{game.score.home}</div>
                  <div className="text-lg font-semibold">{game.score.away}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>*/}
    </div>
  );
}

export function ErrorBoundary(){
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div/>
  }
  return <div/>
}

export const shouldRevalidate: ShouldRevalidateFunction = () => {
 return true;
};