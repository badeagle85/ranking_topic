/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.mygoodlink.com', 'bit.ly'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
