import { useRouter } from "next/router"
import { Product } from "../../types/types"

const ProductDetail = (props: { product: Product }) => {
	/**
	 * Router
	 */
	const router = useRouter()

	return (
		<div className="container mt-14">
			<div className="rounded-md bg-slate-900 p-8 shadow-md">Title</div>
		</div>
	)
}

export default ProductDetail
