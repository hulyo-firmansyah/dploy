import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>Landing Page By Nextjs</title>
				<meta
					name="description"
					content="This page is a landing page home or main page"
				/>
			</Head>

			<div
				style={{
					backgroundImage:
						'url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg")',
					backgroundSize: "cover",
					backgroundRepeat: "repeat"
				}}
				className="h-full pb-24 shadow-md"
			>
				<nav className="flex justify-between py-5 px-4 lg:px-10">
					<div>
						<div className="inline-block cursor-default font-display text-xl font-bold tracking-tighter">
							DPloy.
						</div>
					</div>
					<div>
						<ul className="flex divide-x divide-slate-700 text-sm font-semibold">
							<li className="pr-6">
								<ul className="flex gap-8">
									<li className="transition-colors duration-150 ease-in hover:text-cyan-400">
										<a href="#">Docs</a>
									</li>
									<li className="transition-colors duration-150 ease-in hover:text-cyan-400">
										<a href="#">Blogs</a>
									</li>
								</ul>
							</li>
							<li className="pl-6 text-slate-400 transition-colors duration-150 ease-in hover:text-slate-300">
								<a href="https://github.com/hulyo-firmansyah/">
									<svg
										viewBox="0 0 24 24"
										aria-hidden="true"
										className="h-6 w-6"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</nav>

				<div className="container mt-20">
					<main className="flex justify-center lg:mt-20">
						<div className="cursor-default text-center font-display text-6xl font-bold lg:text-7xl">
							<span className="block tracking-tighter drop-shadow-[0_10px_20px_rgba(255,255,255,0.5)] lg:inline">
								Deploy app faster
							</span>
							<span className="mt-3 inline-block tracking-tighter text-cyan-400 underline-offset-8 hover:underline lg:mt-0 lg:ml-6">
								With DPloy.
							</span>
						</div>
					</main>
					<section id="descriptor" className="mt-5">
						<p className="text-center text-lg font-medium text-slate-400 lg:px-10 xl:px-72">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
							<span className="text-cyan-400">Suscipit</span>, magnam sed!{" "}
							<span className="text-cyan-400">Delectus</span> rem, sint id
							deleniti vero ducimus distinctio{" "}
							<span className="text-cyan-400">Doloremque</span>.
						</p>
						<div className="mt-5 flex justify-center gap-6 lg:mt-6">
							<button className="w-full rounded-md bg-cyan-500 p-3 text-sm font-semibold transition-all duration-150 ease-in hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 md:w-32">
								Get Started
							</button>
							<button className="hidden items-center justify-center gap-3 rounded-md border border-x-0 border-b-0 border-t-slate-700 bg-slate-800 p-3 text-sm font-semibold text-slate-300 shadow-md transition-all duration-150 ease-in hover:bg-slate-700 md:flex md:w-32">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
								Find Out
							</button>
						</div>
					</section>
					<section className="mt-20 flex justify-center">
						<div className="rounded-md border border-x-0 border-b-0 border-slate-700 bg-slate-800 p-8 text-center text-lg font-semibold shadow-md md:w-96">
							<Image
								src={
									"https://images.unsplash.com/photo-1668570000683-aa421ea758a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
								}
								layout="fixed"
								width={100}
								height={100}
								alt="Regina"
								className="rounded-full"
							/>
							<p className="mt-5 tracking-tight text-slate-300">
								{`“ Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatibus dolor inventore quae laboriosam repellendus minus,
							cum voluptates natus quas iure itaque sunt eaque! Nesciunt natus
							ullam earum expedita eos incidunt. “`}
							</p>
							<div className="mt-5">
								<div className="text-cyan-400">Regina Rofthuff</div>
								<div className="text-slate-500">Engineer, Facebook</div>
							</div>
						</div>
					</section>
				</div>
			</div>

			<div className="h-screen border border-x-0 border-b-0 border-slate-800">
				{/* Body */}
				{/* <footer>
					<div>
						<ul>
							<li>Oke</li>
							<li>Oke</li>
							<li>Oke</li>
							<li>Oke</li>
							<li>Oke</li>
						</ul>
					</div>
				</footer> */}
			</div>
		</Fragment>
	)
}

export default Home
