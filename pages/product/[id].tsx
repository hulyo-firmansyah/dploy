import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { Product } from "../../types/types"
import axios from "axios"

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
			<div className="rounded-md bg-slate-900 p-8 shadow-md">
				{/* {props.product?.title} */}
			</div>
		</div>
	)
}

export default ProductDetail
