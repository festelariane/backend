/**
 * PM2 Ecosystem Configuration File
 *
 * This file defines how PM2 should manage your Node.js applications.
 * It allows you to specify multiple applications, their configurations,
 * and environment-specific settings.
 *
 * To use this file:
 * 1. Save it as `ecosystem.config.js` in the root of your project.
 * 2. Run your application(s) with PM2: `pm2 start ecosystem.config.js`
 * 3. For production environment: `pm2 start ecosystem.config.js --env production`
 * 4. To save the process list for automatic startup on server reboot: `pm2 save`
 */
module.exports = {
  // 'apps' is an array where each object represents a single application PM2 will manage.
  apps : [
    {
      // --- Application 1: Your Main Node.js API/Web App ---
      name        : "happytimebackend", // A unique name for your application in PM2 list
      script      : "yarn",           // The executable to run (in this case, npm)
      args        : "start",         // Arguments to pass to the script (npm start)
      cwd         : "./",            // Current working directory for the app (usually your project root)
      interpreter : "cmd",          // Specify the interpreter if not the default (optional, npm handles this)
	  shell       : true,  
      
	  // Cluster mode for Node.js applications:
      // This will spawn multiple instances of your app to utilize all CPU cores,
      // providing a built-in load balancer.
      instances   : 1, //"max",           // "max" means as many instances as CPU cores
      exec_mode   : "fork",//"cluster",       // Use "cluster" mode for Node.js apps for load balancing

      // Watch mode:
      // If true, PM2 will restart the application when file changes are detected.
      // Useful for development, generally set to false or ignored in production.
      watch       : true,
      ignore_watch: ["node_modules", "logs", ".git", ".env"], // Directories/files to ignore for watch mode

      // Memory limit:
      // If the application's memory usage exceeds this limit, PM2 will restart it.
      // Helps prevent memory leaks from crashing the entire server.
      max_memory_restart: "500M", // Example: Restart if memory goes above 500MB

      // Log management:
      // Define paths for standard output and error logs.
      // PM2 will automatically create and rotate these logs.
      output      : "./logs/out.log",  // Path for standard output logs
      error       : "./logs/error.log", // Path for error logs
      log_date_format: "YYYY-MM-DD HH:mm:ss Z", // Timestamp format for logs

      // Environment variables:
      // 'env' defines default environment variables for the application.
      env: {
        NODE_ENV: "development", // Default environment
        PORT: 1337,              // Default port for development
      },

      // Environment-specific variables:
      // 'env_production' overrides or adds variables when starting with '--env production'.
      env_production : {
        NODE_ENV: "production", // Production environment
        PORT: 3000,               // Port for production (e.g., standard HTTP port)
      },

      // Other useful options (uncomment and configure as needed):
      // min_uptime: "60s", // Minimum uptime for the app to be considered "stable"
      // max_restarts: 10,  // Max restarts in a short period before PM2 gives up
      // restart_delay: 1000, // Delay in milliseconds before restarting a crashing app
      // wait_ready: true,    // Make the process wait for a 'ready' event (process.send('ready'))
      // cron_restart: "0 0 * * *", // Restart daily at midnight (useful for scheduled restarts)
    },

  ]
};
