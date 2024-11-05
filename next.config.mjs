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
        hostname:"www.fromwhere.co.kr",
      },
      {
        protocol:"https", 
        hostname:"media.endclothing.com",
      },
      {
        protocol:"https", 
        hostname:"mcfomdkwxjsnyyfremvl.supabase.co",
      }
  ]
  }
};

export default nextConfig;
