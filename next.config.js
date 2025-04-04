/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "media.architecturaldigest.com",
        },
        {
          protocol: "https",
          hostname: "static.toiimg.com",
        },
        {
          protocol: "https",
          hostname: "www.shutterstock.com",
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  