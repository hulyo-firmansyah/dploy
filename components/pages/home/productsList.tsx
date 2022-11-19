import Image from "next/image"
import Link from "next/link"
import { memo } from "react"
import { Product } from "../../../types/types"

const ProductList = memo((props: { products: Product[] }) => {
	/**
	 * States
	 */

	/**
	 * Effects
	 */

	return (
		<div className="mt-20">
			<div className="grid grid-cols-12 gap-5">
				{props.products.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</div>
		</div>
	)
})
ProductList.displayName = "ProductList"

const ProductCard = memo((props: { product: Product }) => {
	return (
		<div
			className="col-span-4 rounded-xl bg-slate-900 p-5 shadow-md shadow-slate-700/30"
			data-testid="productCard"
		>
			<div className="relative h-72 w-full">
				<div className="group relative h-full w-full brightness-50 saturate-0 transition-all duration-150 ease-in hover:brightness-100 hover:saturate-100">
					<div className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 transition-opacity delay-75 duration-150 ease-in group-hover:opacity-100">
						<Link href={`/product/${props.product.id}`}>
							<a className="transform-gpu rounded-full bg-slate-600 bg-opacity-50 p-4 backdrop-invert transition-all duration-150 ease-in-out hover:scale-110">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="h-5 w-5"
								>
									<path
										fillRule="evenodd"
										d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</Link>
					</div>
					<Image
						src={props.product.image}
						layout="fill"
						width={400}
						height={200}
						objectFit={"cover"}
						className="rounded-md"
						alt={"Image - " + props.product.title}
					/>
				</div>
			</div>
			<div className="mt-7 px-3">
				<div className="product-title group text-base font-semibold text-slate-300">
					<Link href={`/product/${props.product.id}`}>
						<a className="group-hover:underline group-hover:underline-offset-2">
							{props.product.title}
						</a>
					</Link>
				</div>
				<div className="mt-3 flex justify-between">
					<div className="product-price text-base font-semibold text-slate-400">
						${props.product.price}
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
						<span className="product-rating font-bold text-yellow-500">
							{props.product.rating.rate}
						</span>
						<span> / </span>
						<span className="product-rating-count">
							{props.product.rating.count}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
})
ProductCard.displayName = "ProductCard"

export default ProductList
