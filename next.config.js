/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.unsplash.com", "fakestoreapi.com"]
	},
	env: {
		API_BASE_URL: process.env.API_BASE_URL
	}
}

module.exports = nextConfig
