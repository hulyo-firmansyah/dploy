import type { GetStaticProps, InferGetStaticPropsType } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment } from "react"
import ProductList from "../components/pages/home/productsList"
import axios from "axios"
import { Product } from "../types/types"

export const getStaticProps: GetStaticProps<{
	products: Product[]
}> = async () => {
	console.log(process.env.API_BASE_URL, "env")
	const res = await axios.get(
		(process.env.API_BASE_URL as string) + "/products?limit=6"
	)

	let products: Product[] = []
	switch (res.status) {
		case 200: {
			products = res.data
		}
	}

	return {
		props: {
			products
		}
	}
}

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	/**
	 * Router
	 */
	const router = useRouter()

	/**
	 * Effects
	 */

	return (
		<Fragment>
			<div className="container mt-20">
				<main className="flex justify-center lg:mt-20">
					<div
						className="cursor-default text-center font-display text-6xl font-bold lg:text-7xl"
						data-testid="banner-text"
					>
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
						<button
							className="w-full rounded-md bg-cyan-500 p-3 text-sm font-semibold transition-all duration-150 ease-in hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-400/50 md:w-32"
							onClick={() => {
								router.push("/docs")
							}}
						>
							Get Started
						</button>
						<button
							className="hidden items-center justify-center gap-3 rounded-md border border-x-0 border-b-0 border-t-slate-700 bg-slate-800 p-3 text-sm font-semibold text-slate-300 shadow-md transition-all duration-150 ease-in hover:bg-slate-700 md:flex md:w-32"
							onClick={() => {
								router.push("/docs")
							}}
						>
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
			<div className="mt-20 min-h-screen border border-x-0 border-b-0 border-slate-800 bg-slate-900 pt-20 pb-32 lg:min-h-[500px] lg:pb-24">
				<section className="container mt-20">
					<div className="flex flex-col items-center justify-center">
						<h2 className=" text-4xl font-bold tracking-tighter drop-shadow-md">
							{"Dont't Worry. Its "}
							<span className="ml-1 inline-block transform-gpu font-display text-5xl text-cyan-400 underline transition-transform duration-150 ease-in hover:rotate-12">
								FAST!
							</span>
						</h2>
						<div className="mt-5 text-center text-lg tracking-tight text-slate-400 lg:w-1/2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
							quos vel tempora non delectus corrupti doloremque provident
							consequuntur doloribus unde?
						</div>
					</div>
					<div className="mt-32 flex justify-center">
						<div className="group group grid grid-cols-12 gap-7 lg:w-1/2">
							<div className="ease-it relative col-span-6 flex transform-gpu items-center justify-center transition-all delay-75 duration-150 group-hover:origin-left group-hover:-translate-x-4 group-hover:rotate-[-8deg] lg:col-span-8">
								<Image
									src="https://images.unsplash.com/photo-1553531384-cc64ac80f931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
									alt="Mountain 1"
									layout="fixed"
									width={500}
									height={200}
									objectFit={"cover"}
									className="rounded-xl"
								/>
							</div>
							<div className="relative col-span-6 flex transform-gpu items-center justify-center transition-all delay-75 duration-150 ease-in group-hover:origin-bottom-right group-hover:rotate-[12deg] lg:col-span-4">
								<Image
									src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
									alt="Mountain 1"
									layout="fixed"
									width={400}
									height={200}
									objectFit={"cover"}
									className="rounded-xl"
								/>
							</div>
							<div className="relative col-span-8 flex min-h-[200px] transform-gpu items-center justify-center transition-all delay-75 duration-150 ease-in group-hover:origin-bottom-left group-hover:rotate-[12deg] lg:col-span-4">
								<Image
									src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
									alt="Mountain 1"
									layout="fill"
									width={400}
									height={200}
									objectFit={"cover"}
									className="rounded-xl"
								/>
							</div>
							<div className="ease-it relative col-span-4 flex min-h-[200px] transform-gpu items-center justify-center transition-all delay-75 duration-150 group-hover:origin-bottom-left group-hover:translate-x-6 group-hover:rotate-[5deg] lg:col-span-4">
								<Image
									src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
									alt="Mountain 1"
									layout="fill"
									// width={400}
									// height={200}
									objectFit={"cover"}
									className="rounded-xl"
								/>
							</div>
							<div className="relative col-span-12 flex min-h-[250px] transform-gpu items-center justify-center transition-all delay-75 duration-150 ease-in group-hover:origin-top-left group-hover:translate-x-8 group-hover:translate-y-3 group-hover:rotate-[-10deg] lg:col-span-4 lg:min-h-[200px]">
								<Image
									src="https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
									alt="Mountain 1"
									layout="fill"
									objectFit="cover"
									className="rounded-xl"
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div
				className="relative min-h-screen border border-x-0 border-b-0 border-slate-800 bg-slate-900 bg-[-1000px] md:bg-[-500px]"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')",
					backgroundSize: "3000px"
				}}
			>
				<div className="inset-0 z-10 h-full w-full bg-slate-900 bg-opacity-50 pt-20 pb-32 backdrop-blur-lg backdrop-brightness-75 backdrop-contrast-150">
					<div className="container">
						<section>
							<div className="flex flex-col items-center justify-center">
								<h2 className=" text-4xl font-bold tracking-tighter drop-shadow-md">
									Our Product
								</h2>
								<div className="mt-5 text-center text-lg tracking-tight text-slate-400 lg:w-1/2">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Accusantium quod illo, omnis consequatur optio possimus?
								</div>
							</div>
							<ProductList products={props.products} />
						</section>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Home
