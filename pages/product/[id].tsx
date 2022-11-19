import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { Product } from "../../types/types"
import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment, ReactElement } from "react"
import Head from "next/head"
import { NextPageWithLayout } from "../_app"
import Layout from "../../components/Layout"

export const getStaticPaths: GetStaticPaths = async () => {
	// When this is true (in preview environments) don't
	// prerender any static pages
	// (faster builds, but slower initial page load)
	if (process.env.SKIP_BUILD_STATIC_GENERATION) {
		return {
			paths: [],
			fallback: false
		}
	}

	const res = await axios.get(
		(process.env.API_BASE_URL as string) + "/products"
	)

	switch (res.status) {
		case 200: {
			const products: Product[] = res.data
			// Get the paths we want to pre-render based on products
			const paths = products.map(product => ({
				params: { id: product.id.toString() }
			}))
			return { paths, fallback: false }
		}
		case 500: {
			console.error(res.headers, "header")
			console.error(res.data, "data")
		}
		default: {
		}
	}

	return {
		paths: [],
		fallback: false
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
					},
					// Re-generate the post at most once per second
					// if a request comes in
					revalidate: 1
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

const ProductDetail: NextPageWithLayout<{ product: Product }> = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	/**
	 * Router
	 */
	const router = useRouter()

	/**
	 * Effects
	 */

	if (router.isFallback) {
		return (
			<div className="container mt-14 pb-20">
				<div className="flex min-h-screen items-center justify-center tracking-wide">
					Loading ...
				</div>
			</div>
		)
	}

	return (
		<Fragment>
			<Head>
				<title>{props.product?.title} · DPloy</title>
			</Head>
			<div className="container mt-14 pb-20">
				<div className="gap-14 rounded-md bg-slate-900 p-5 shadow-md md:p-10 lg:flex lg:p-20">
					<div className="image-container relative h-full w-full flex-shrink-0 lg:h-96 lg:w-96">
						<Image
							alt={props.product?.title}
							src={props.product?.image ?? ""}
							layout="responsive"
							width={500}
							height={500}
							objectFit={"cover"}
							className="rounded-xl shadow-lg"
						/>
					</div>

					<div className="mt-5">
						<div className="text-sm font-semibold text-slate-400 md:text-base">
							{props.product?.category}
						</div>
						<div className="title mt-1 text-lg font-semibold md:text-2xl lg:font-bold lg:tracking-tight">
							{props.product?.title}
						</div>
						<div className="mt-3 flex items-center justify-between divide-slate-700 md:justify-start md:gap-5">
							<div className="price font-bold text-slate-300 md:text-lg">
								<span className="text-cyan-400">$</span>
								{props.product?.price}
							</div>
							<div className="border border-y-0 border-l-0 border-white">
								<div className="opacity-0">|</div>
							</div>
							<div className="flex items-center gap-1 text-slate-400">
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
								<span className="rating font-bold text-yellow-500">
									{props.product?.rating.rate}
								</span>
								<span> / </span>
								<span className="rating-count">
									{props.product?.rating.count}
								</span>
							</div>
						</div>
						<p className="description mt-7 text-sm text-slate-400 md:text-base lg:mt-10">
							{props.product?.description}
						</p>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
ProductDetail.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>
}

export default ProductDetail
