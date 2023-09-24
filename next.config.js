/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


const path = require('path');

module.exports = {
  // Other Next.js configuration options

  webpack: (config, options) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
};