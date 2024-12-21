/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "http",
        hostname: "facebook.com",
        pathname: "/favicon.ico",
      },
      {
        protocol: "http",
        hostname: "x.com",
        pathname: "/favicon.ico",
      },
      {
        protocol: "http",
        hostname: "linkedin.com",
        pathname: "/favicon.ico",
      },
    ],
  },
};

export default nextConfig;
