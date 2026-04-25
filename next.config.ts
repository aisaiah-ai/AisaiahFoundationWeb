import type { NextConfig } from "next";
import { assertBuildEnv } from "./src/lib/env";

assertBuildEnv();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
