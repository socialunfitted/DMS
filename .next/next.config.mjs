/** @type {import('next').NextAppConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
      { protocol: 'https', hostname: 'platform-lookaside.fbsbx.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }
    ],
  },
};

export default nextConfig;
