// import withSass from '@zeit/next-sass'
const withSass = require('@zeit/next-sass')
const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['tmdb.org', 'themoviedb.org', 'https://image.tmdb.org/t/p/w500', 'image.tmdb.org','res.cloudinary.com'],
  },
  // webpack: (config, options) => {
  //   config.cache = false
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   })
  //   return config
  // },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  //   // prependData: '@import "./styles/common.scss";',
  // },
}

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
})

module.exports = nextConfig
