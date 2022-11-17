import Link from "next/link"

const Navbar = () => {
	return (
		<nav className="flex justify-between py-5 px-4 lg:px-10">
			<div>
				<Link href={"/"}>
					<a
						className="inline-block cursor-pointer font-display text-xl font-bold tracking-tighter"
						data-testid="logo-link"
					>
						DPloy.
					</a>
				</Link>
			</div>
			<div>
				<ul className="flex divide-x divide-slate-700 text-sm font-semibold">
					<li className="pr-6">
						<ul className="flex gap-8">
							<li className="transition-colors duration-150 ease-in hover:text-cyan-400">
								<Link href="/docs">
									<a>Docs</a>
								</Link>
							</li>
							<li className="transition-colors duration-150 ease-in hover:text-cyan-400">
								<Link href="/blog">
									<a>Blog</a>
								</Link>
							</li>
						</ul>
					</li>
					<li className="pl-6 text-slate-400 transition-colors duration-150 ease-in hover:text-slate-300">
						<a href="https://github.com/hulyo-firmansyah/">
							<svg
								viewBox="0 0 24 24"
								aria-hidden="true"
								className="h-6 w-6"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
