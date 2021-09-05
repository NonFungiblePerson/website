module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    eslint: { dirs: ['src'], ignoreDuringBuilds: true },
    reactStrictMode: true,
  };
};
