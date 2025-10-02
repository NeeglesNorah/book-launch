module.exports = {
    apps: [
      {
        name: "book-launch-website-staging",
        script: "npx",
        args: `vite preview --port ${process.env.PORT || 3012}`,
        instances: 1,
        merge_logs: true,
        exec_mode: "fork",
        env_staging: {
          NODE_ENV: "staging",
        },
        env_production: {
          NODE_ENV: "production",
        },
        env_file: ".env.staging",
      },
    ],
  };
  