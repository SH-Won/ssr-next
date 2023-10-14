// import withSass from '@zeit/next-sass'
const withSass = require('@zeit/next-sass')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.cache = false
    return config
  },
}

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
})

module.exports = nextConfig
