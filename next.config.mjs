let userConfig;
try {
  userConfig = (await import('./v0-user-next.config')).default;
} catch (e) {
  userConfig = {}; // ✅ Ensure it's always an object
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ✅ Enables static export
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',  // ✅ The build output directory
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // ✅ Required for static hosting
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// ✅ Merging userConfig safely
const mergedConfig = mergeConfig(nextConfig, userConfig);

function mergeConfig(base, extra) {
  if (!extra) return base;

  for (const key in extra) {
    if (typeof base[key] === 'object' && !Array.isArray(base[key])) {
      base[key] = { ...base[key], ...extra[key] };
    } else {
      base[key] = extra[key];
    }
  }
  return base;
}

export default mergedConfig;
