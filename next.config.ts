import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  // 301 redirects — 14 June 2026 ke slug changes ne purane indexed URLs ko 404 kar diya tha
  // (Google ne 247 → 180 pages de-index kiye). Ye redirects link equity + indexing wapas laate hain.
  async redirects() {
    return [
      { source: '/diseases/kabj-constipation', destination: '/diseases/constipation', permanent: true },
      { source: '/diseases/lower-back-pain', destination: '/diseases/back-pain', permanent: true },
      { source: '/symptoms/sore-throat', destination: '/symptoms/gale-mein-dard', permanent: true },
      { source: '/symptoms/hives-urticaria', destination: '/symptoms/skin-allergy', permanent: true },
    ]
  },
};

export default nextConfig;
