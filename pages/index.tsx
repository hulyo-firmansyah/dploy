import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Fragment } from "react"

const Home: NextPage = () => {
	return (
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
					<span className="text-cyan-400">Delectus</span> rem, sint id deleniti
					vero ducimus distinctio{" "}
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
	)
}

export default Home
