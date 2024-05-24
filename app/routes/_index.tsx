import { LinkedinIcon, GithubIcon } from "#app/components/icons.js"

const HeroOne = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								Lucas B
							</h1>
							<p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
								Senior Software Engineer | Sports fan & Web3 enthusiast
							</p>
							<p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
								I create clean, modern, and responsive web applications that
								deliver exceptional user experiences.
							</p>
						</div>
					</div>
				</div>
			</section>
	)
};

export const HeroTwo = () => {
	return (
		<section className="w-full border-b py-12 md:py-24 lg:py-32">
			<div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-20">
				<div className="flex flex-col items-start justify-center space-y-4">
					<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
						Lucas B
					</h1>
					<h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400 sm:text-3xl">
						Senior Software Engineer | Sports Fan & Web3 Enthusiast
					</h2>
					<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
					I create clean, modern, and responsive web applications that
								deliver exceptional user experiences.
					</p>
				</div>
				<img
					alt="Lucas B"
					className="mx-auto rounded-full object-cover"
					height="400"
					src="https://avatars.githubusercontent.com/u/3066258"
					style={{
						aspectRatio: '400/400',
						objectFit: 'cover',
					}}
					width="400"
				/>
			</div>
		</section>
	)
};

const Home = () => {
	return (
		<>
			<HeroOne />
			<section
				id="section-featuredprojects"
				className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
			>
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-50 px-3 py-1 text-sm dark:bg-gray-800">
								Featured Projects
							</div>
							<h2
								id="section-featuredprojects"
								className="text-3xl font-bold tracking-tighter sm:text-5xl"
							>
								My Recent Work
							</h2>
							<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Check out some of the web applications I've designed and
								developed.
							</p>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
							<img
								alt="Project 1"
								className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
								height="310"
								src="/img/ddscreenshot.png"
								width="550"
							/>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Daily Deals</h3>
									<p className="text-gray-500 dark:text-gray-400">
										A modern web application built with React, Next.js, Tailwind
										CSS, and Supabase. Deployed to Vercel
									</p>
								</div>
								<div className="flex flex-col items-center justify-center gap-2 min-[400px]:flex-row">
									<a
										className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
										href="https://dailydeals.vercel.app"
										rel="noreferrer nofollow"
									>
										View Project
									</a>
									<a
										className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
										href="https://github.com/lsbyerley/daily-deals"
										rel="noreferrer nofollow"
									>
										GitHub
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								Skills
							</div>
							<h2
								id="section-skills"
								className="text-3xl font-bold tracking-tighter sm:text-5xl"
							>
								What I Can Do
							</h2>
							<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								I have a diverse set of skills that allow me to create
								high-quality web applications.
							</p>
						</div>
						<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Front-end Development</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Proficient in HTML, CSS, JavaScript, React, and Tailwind
										CSS.
									</p>
								</div>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Back-end Development</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Experienced in Node.js, Express, GraphQL, and RESTful API
										design.
									</p>
								</div>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Web3 Development</h3>
									<p className="text-gray-500 dark:text-gray-400">
										Knowledgeable about solidity contracts and the web3
										ecosystem
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full border-t py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
								Contact
							</div>
							<h2
								id="section-contact"
								className="text-3xl font-bold tracking-tighter sm:text-5xl"
							>
								Get in Touch
							</h2>
							<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Feel free to reach out to me for any inquiries or opportunities.
							</p>
						</div>
						<div className="mx-auto w-full max-w-sm space-y-2">
							<div className="flex flex-col items-center justify-center gap-4 min-[400px]:flex-row">
								<a
									className="flex items-center gap-2"
									href="https://github.com/lsbyerley"
									target="_blank"
									rel="noreferrer noopener"
								>
									<GithubIcon className="h-6 w-6" />
									<span>lucasb</span>
								</a>
								<a
									className="flex items-center gap-2"
									href="https://linkedin.com/in/lucas-b-9a817170"
									target="_blank"
									rel="noreferrer noopener"
								>
									<LinkedinIcon className="h-6 w-6" />
									<span>lucasb</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Home
