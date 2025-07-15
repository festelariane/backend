const { spawn } = require('child_process');

// Define the command and its arguments
const command = 'yarn';
const args = ['develop'];

// Define the options for spawning the process
const options = {
    cwd: './', // Current working directory (adjust if your Strapi project is in a subfolder)
    shell: true, // Use a shell to run the command (important for 'yarn' on Windows)
    // stdio: 'inherit' is REMOVED
    // By default, spawn uses 'pipe' for stdio, which creates child.stdout/stderr
};

console.log(`Attempting to start Strapi using "${command} ${args.join(' ')}" in ${options.cwd}`);

const child = spawn(command, args, options);

// --- Event Listeners for the Child Process ---

// These listeners will now work because child.stdout and child.stderr exist
child.stdout.on('data', (data) => {
    console.log(`[Strapi Stdout]: ${data.toString()}`); // Convert Buffer to String
});

child.stderr.on('data', (data) => {
    console.error(`[Strapi Stderr]: ${data.toString()}`); // Convert Buffer to String
});

// Event when the child process exits
child.on('close', (code) => {
    console.log(`Child process exited with code ${code}`);
    if (code !== 0) {
        console.error(`Strapi process closed with an error code: ${code}`);
    } else {
        console.log('Strapi process closed normally.');
    }
});

// Event if there's an error spawning the process itself (e.g., command not found)
child.on('error', (err) => {
    console.error(`Failed to start child process: ${err.message}`);
    if (err.message.includes('Not enough memory resources')) {
        console.error('The system reported insufficient memory resources. This is likely a Windows OS limitation.');
    }
});

console.log('Strapi process started. Monitoring output...');
// The Node.js script will stay alive as long as the child process is running