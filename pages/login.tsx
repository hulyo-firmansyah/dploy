import axios, {
	AxiosError,
	AxiosResponse,
	AxiosResponseHeaders,
	RawAxiosResponseHeaders
} from "axios"
import Link from "next/link"
import { useRouter } from "next/router"
import { ChangeEventHandler, FormEventHandler, Fragment, useState } from "react"

const Login = () => {
	/**
	 * Router
	 */
	const router = useRouter()

	/**
	 * States
	 */
	const [credentials, setCredentials] = useState<{
		username: string
		password: string
	}>({
		username: "johnd",
		password: "m38rmF$"
	})
	const [responseMessage, setResponseMessage] = useState<{
		data?: string | null
		code?: number | null
	}>({
		data: null,
		code: null
	})

	/**
	 * Effects
	 */

	/**
	 * Handler
	 */
	const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
		setCredentials(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	}
	const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
		e.preventDefault()

		try {
			const res = await axios.post("api/login", credentials)
			console.log(res, " res")
		} catch (e) {
			if (e instanceof AxiosError) {
				setResponseMessage({
					code: e.response?.status,
					data: e.response?.data
				})
			}
		}
	}

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
					<main className="mt-52 w-full rounded bg-gradient-to-r from-[#7928ca] to-[#ff0080] p-[1px] shadow-md md:w-1/2 lg:w-1/2 xl:w-1/4">
						<div className="rounded bg-slate-900 p-10">
							<section className="mb-10 flex items-center divide-x divide-slate-700">
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
							{responseMessage.data && (
								<section className="mb-5 flex items-center justify-between rounded bg-red-700 py-3 px-4 text-sm font-semibold text-slate-100">
									<div>
										<span>{responseMessage.data}</span>
									</div>
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
											d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
										/>
									</svg>
								</section>
							)}
							<form onSubmit={handleSubmit}>
								<section>
									<div className="flex flex-col">
										<label className="mb-3 font-medium tracking-wide">
											Username
										</label>
										<input
											type={"text"}
											className="rounded border border-slate-800 bg-transparent py-2 px-3 text-slate-300 shadow outline-none focus:border-blue-500"
											placeholder="username / email"
											id="username"
											name="username"
											value={credentials.username}
											onChange={handleInputChange}
											required
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
											id="password"
											name="password"
											value={credentials.password}
											onChange={handleInputChange}
											required
										/>
									</div>
								</section>
								<section className="mt-10">
									<button
										className="w-full rounded border border-cyan-600 p-3 font-bold shadow transition-colors duration-150 ease-in hover:bg-cyan-600"
										id="login"
										type="submit"
									>
										Login
									</button>
								</section>
							</form>
						</div>
					</main>
				</div>
			</div>
		</Fragment>
	)
}

export default Login
