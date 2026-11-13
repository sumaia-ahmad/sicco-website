/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    // Needed because the site has two root layouts (/ Arabic, /en English);
    // app/global-not-found.js renders the 404 page for unknown URLs.
    globalNotFound: true,
  },
};

export default nextConfig;
