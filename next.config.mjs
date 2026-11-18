/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Let phones/laptops on the same home network open the dev server
  // (http://192.168.x.y:3000); Next blocks other origins by default.
  allowedDevOrigins: ['192.168.*.*'],
  experimental: {
    // Needed because the site has two root layouts (/ Arabic, /en English);
    // app/global-not-found.js renders the 404 page for unknown URLs.
    globalNotFound: true,
  },
};

export default nextConfig;
