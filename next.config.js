const withNextIntl = require('next-intl/plugin')('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // SSR mode - no static export
}

module.exports = withNextIntl(nextConfig)
