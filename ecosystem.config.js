module.exports = {
  apps : [{
    name   : "my-strapi-app",
    script : "npm",
    args   : "run start",
    instances:"max",
    exec_mode: "cluster",
    max_memory_restart: "2G",
    time: true,
    watch: false,
    env_production: {
      NODE_ENV: "production"
    }
  }]
};
