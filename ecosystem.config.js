module.exports = {
  apps: [
    {
      name: "waline-service",
      script: "src/index.js",
      env: {
        SQLITE_PATH: "src/db",
        JWT_TOKEN: "tj991118.",
      },
    },
  ],
};
