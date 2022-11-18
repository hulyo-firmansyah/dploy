import HeadLayout from "./Head"
import Navbar from "./Navbar"
import cc from "classcat"

export default function Layout({ children }: any) {
	return (
		<div>
			<HeadLayout />
			<div
				style={{
					backgroundImage:
						'url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg")',
					backgroundSize: "cover",
					backgroundRepeat: "repeat"
				}}
				className="min-h-screen"
			>
				<Navbar />
				{children}
			</div>
			<div className="border border-x-0 border-b-0 border-slate-800">
				<div className="container py-10 text-center text-sm text-slate-400">
					Server Running on :
					<span
						className={cc([
							"ml-2 font-bold",
							process?.env?.NODE_ENV === "development"
								? "text-green-500"
								: "text-purple-500"
						])}
					>
						{process.env.NODE_ENV}
					</span>
				</div>
			</div>
		</div>
	)
}
