import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DBNAME: process.env.MONGODB_DBNAME
  }
};

export default nextConfig;
