/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https", 
        hostname:"images.pexels.com", 
      },
      {
        protocol:"https", 
        hostname:"www.pexels.com", 
      },
      {
        protocol:"https", 
        hostname:"www.fromwhere.co.kr/", 
      },
  ]
  }
};

export default nextConfig;
