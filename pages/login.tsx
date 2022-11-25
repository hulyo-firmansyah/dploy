import Link from "next/link"
import { useRouter } from "next/router"
import { Fragment } from "react"

const Login = () => {
	/**
	 * Router
	 */
	const router = useRouter()

	/**
	 * Effects
	 */

	return (
		<Fragment>
			<div
				className="h-screen w-full"
				style={{
					backgroundImage:
						'url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg")',
					backgroundSize: "cover",
					backgroundRepeat: "repeat"
				}}
			>
				<div className="flex justify-center">
					<main className="mt-52 w-1/4 rounded bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-[1px] shadow-md">
						<div className="rounded bg-slate-900 p-10">
							<section className="flex items-center divide-x divide-slate-700">
								<Link href={"/"}>
									<a
										className="inline-block cursor-pointer pr-3 font-display text-2xl font-bold tracking-tighter"
										data-testid="logo-link"
									>
										DPloy
									</a>
								</Link>
								<div className="flex gap-2 pl-3">
									<h1 className="font-display text-2xl font-bold tracking-wide">
										Login
									</h1>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-8 w-8 text-slate-200"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								</div>
							</section>
							<section className="mt-10">
								<div className="flex flex-col">
									<label className="mb-3 font-medium tracking-wide">
										Username
									</label>
									<input
										type={"text"}
										className="rounded border border-slate-800 bg-transparent py-2 px-3 text-slate-300 shadow outline-none focus:border-blue-500"
										placeholder="username / email"
									/>
								</div>
								<div className="mt-5 flex flex-col">
									<label className="mb-3 font-medium tracking-wide">
										Password
									</label>
									<input
										type={"password"}
										className="rounded border border-slate-800 bg-transparent py-2 px-3 text-slate-300 shadow outline-none focus:border-blue-500"
										placeholder="******"
									/>
								</div>
							</section>
							<section className="mt-10">
								<button className="w-full rounded border border-cyan-600 p-3 font-bold shadow transition-colors duration-150 ease-in hover:bg-cyan-600">
									Login
								</button>
							</section>
						</div>
					</main>
				</div>
			</div>
		</Fragment>
	)
}

export default Login
