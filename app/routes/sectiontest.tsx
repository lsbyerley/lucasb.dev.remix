import {
  Card,
  CardContent,
} from "#app/components/ui/card"
import { Button } from "#app/components/ui/button"
import { Input } from "#app/components/ui/input";
import { Textarea } from "#app/components/ui/textarea";
import { Label } from "#app/components/ui/label";


const SectionTest = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">John Doe</h1>
                  <h2 className="text-xl font-medium text-gray-500 dark:text-gray-400">Software Engineer</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    I am a passionate software engineer with expertise in building scalable and efficient web
                    applications. I love creating innovative solutions that solve real-world problems.
                  </p>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="https://generated.vusercontent.net/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the projects I have worked on.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-start justify-between space-y-4">
                  <img
                    alt="Project 1"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    width="550"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Project 1</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A web application that helps users manage their tasks and projects.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-between space-y-4">
                  <img
                    alt="Project 2"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    width="550"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Project 2</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A mobile app that helps users track their fitness goals and progress.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-between space-y-4">
                  <img
                    alt="Project 3"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    width="550"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Project 3</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A web-based platform that helps businesses manage their inventory and sales.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Blog</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out my latest blog posts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-start justify-between space-y-4">
                  <img
                    alt="Blog Post 1"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    width="550"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Blog Post 1</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      In this post, I discuss the latest trends in web development and how to stay ahead of the curve.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-start justify-between space-y-4">
                  <img
                    alt="Blog Post 2"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    src="https://generated.vusercontent.net/placeholder.svg"
                    width="550"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Blog Post 2</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      In this post, I share my experience with building a scalable and efficient web application.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out to me with any questions or inquiries.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={4} />
                  </div>
                  <Button className="w-full" type="submit">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  John Doe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Software Engineer | Minimalist Web Designer
                </p>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  I create clean, modern, and responsive web applications that deliver exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Featured Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Recent Work</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Check out some of the web applications I've designed and developed.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <img
                  alt="Project 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Project 1</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A modern web application built with React, Next.js, and Tailwind CSS.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#"
                    >
                      View Project
                    </a>
                    <a
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                      href="#"
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
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Skills</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What I Can Do</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I have a diverse set of skills that allow me to create high-quality web applications.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Front-end Development</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Proficient in HTML, CSS, JavaScript, React, and Tailwind CSS.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Back-end Development</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Experienced in Node.js, Express, and RESTful API design.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">UI/UX Design</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Skilled in creating clean, modern, and responsive user interfaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Feel free to reach out to me for any inquiries or opportunities.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="flex items-center justify-center gap-4">
                  <a className="flex items-center gap-2" href="#">
                    <MailIcon className="h-6 w-6" />
                    <span>johndoe@example.com</span>
                  </a>
                  <a className="flex items-center gap-2" href="#">
                    <GithubIcon className="h-6 w-6" />
                    <span>johndoe</span>
                  </a>
                  <a className="flex items-center gap-2" href="#">
                    <LinkedinIcon className="h-6 w-6" />
                    <span>johndoe</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          <div className="flex flex-col items-start justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">John Doe</h1>
            <h2 className="text-2xl font-medium text-gray-500 dark:text-gray-400 sm:text-3xl">Software Engineer</h2>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              I'm a passionate software engineer with a strong background in building scalable and efficient web
              applications. I love collaborating with teams to create innovative solutions that solve real-world
              problems.
            </p>
          </div>
          <img
            alt="John Doe"
            className="mx-auto rounded-full object-cover"
            height="400"
            src="https://generated.vusercontent.net/placeholder.svg"
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          <img
            alt="John Doe"
            className="mx-auto rounded-xl object-cover"
            height="500"
            src="https://generated.vusercontent.net/placeholder.svg"
            style={{
              aspectRatio: "500/500",
              objectFit: "cover",
            }}
            width="500"
          />
          <div className="flex flex-col items-start justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              I have a strong background in full-stack web development, with expertise in JavaScript, React, Node.js,
              and various backend technologies. I'm passionate about creating user-friendly and efficient applications
              that solve real-world problems.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              In addition to my technical skills, I'm a quick learner and adaptable to new technologies. I enjoy
              collaborating with cross- functional teams and contributing to the overall success of the projects I work
              on.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Check out some of the projects I've worked on and the technologies I've used.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Card>
              <img
                alt="Project 1"
                className="rounded-t-xl object-cover"
                height="200"
                src="https://generated.vusercontent.net/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Project 1</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  A web application built with React, Node.js, and MongoDB.
                </p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Project 2"
                className="rounded-t-xl object-cover"
                height="200"
                src="https://generated.vusercontent.net/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Project 2</h3>
                <p className="text-gray-500 dark:text-gray-400">A mobile app built with React Native and Firebase.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Project 3"
                className="rounded-t-xl object-cover"
                height="200"
                src="https://generated.vusercontent.net/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Project 3</h3>
                <p className="text-gray-500 dark:text-gray-400">A desktop application built with Electron and React.</p>
              </CardContent>
            </Card>
            <Card>
              <img
                alt="Project 4"
                className="rounded-t-xl object-cover"
                height="200"
                src="https://generated.vusercontent.net/placeholder.svg"
                style={{
                  aspectRatio: "300/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-medium">Project 4</h3>
                <p className="text-gray-500 dark:text-gray-400">A web scraper built with Node.js and Puppeteer.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 xl:gap-20">
          <div className="flex flex-col items-start justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl">
              Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon
              as I can.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email" type="email" />
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message" />
            </div>
            <Button className="w-full" type="submit">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  )
};

function LinkedinIcon(props: any) {
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
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect width="4" height="12" x="2" y="9" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	)
}

function MailIcon(props: any) {
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
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	)
} 

function GithubIcon(props: any) {
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
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	)
}

export default SectionTest;