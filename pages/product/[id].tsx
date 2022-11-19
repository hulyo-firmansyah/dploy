import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { Product } from "../../types/types"
import axios from "axios"
import Image from "next/image"

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		fallback: true,
		paths: []
	}
}

export const getStaticProps: GetStaticProps<{
	product: Product | null
}> = async context => {
	const res = await axios.get(
		(process.env.API_BASE_URL as string) + "/products/" + context.params?.id
	)

	let product: Product | null = res.data
	switch (res.status) {
		case 200: {
			if (res.data) {
				return {
					props: {
						product
					}
				}
			}
		}
		case 500: {
			console.error(res.headers, "header")
			console.error(res.data, "data")
		}
		default:
			return {
				props: {
					product: null
				},
				notFound: true
			}
	}
}

const ProductDetail = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	/**
	 * Router
	 */

	return (
		<div className="container mt-14">
			<div className="flex gap-14 rounded-md bg-slate-900 p-20 shadow-md">
				<div className="image-container relative h-96 w-96 flex-shrink-0">
					<Image
						alt={props.product?.title}
						src={props.product?.image ?? ""}
						layout="fill"
						objectFit={"cover"}
						className="rounded-xl shadow-lg"
					/>
				</div>

				<div className="mt-5">
					<div className="font-semibold text-slate-400">
						{props.product?.category}
					</div>
					<div className="title mt-1 text-2xl font-bold tracking-tight">
						{props.product?.title}
					</div>
					<div className="mt-3 flex items-center divide-x divide-slate-700">
						<div className="price pr-5 text-lg font-bold text-slate-300">
							<span className="text-cyan-400">$</span>
							{props.product?.price}
						</div>
						<div className="flex items-center gap-1 pl-5 text-slate-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="inline-block h-4 w-4 text-yellow-500"
							>
								<path
									fillRule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
									clipRule="evenodd"
								/>
							</svg>
							<span className="font-bold text-yellow-500">
								{props.product?.rating.rate}
							</span>
							<span> / </span>
							<span className="">{props.product?.rating.count}</span>
						</div>
					</div>
					<p className="description mt-10 text-slate-400">
						{props.product?.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProductDetail
