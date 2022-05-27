/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/u,
      type: 'asset',
    })

    return config
  },
}

module.exports = nextConfig
