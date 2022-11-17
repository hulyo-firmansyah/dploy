import { NextComponentType, NextPage } from "next"
import Image from "next/image"
import HeadLayout from "./Head"
import Navbar from "./Navbar"

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
				className="min-h-screen pb-24 shadow-md"
			>
				<Navbar />
				{children}
			</div>
		</div>
	)
}
