/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    images: {
        domains: ["rpc-s3-upload.s3.ap-south-1.amazonaws.com"],
    },
};

module.exports = nextConfig;
