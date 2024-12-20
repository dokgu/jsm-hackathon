/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'magicui.design',
				port: ''
			}
		]
	}
};

export default nextConfig;
