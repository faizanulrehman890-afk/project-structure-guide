/**
 * src/index.js
 *
 * WHY THIS FILE EXISTS:
 *   This is the "entry point" of the app: the first file that runs when you
 *   type `node src/index.js`. Real projects keep their code inside a `src/`
 *   ("source") folder to separate it from config files and documentation.
 *
 *   This demo only prints a greeting. The point of this repository is the
 *   files AROUND the code, not the code itself.
 */

// Read settings from environment variables, with safe defaults.
// See .env.example for the full list of variables this project uses.
// Tip: Node 20.6+ can load your .env file with:  node --env-file=.env src/index.js
const appName = process.env.APP_NAME || 'project-structure-guide';
const environment = process.env.NODE_ENV || 'development';

/**
 * Builds a friendly greeting message.
 * @param {string} name - The name to greet.
 * @returns {string} The greeting.
 */
function greet(name) {
  return `👋 Hello from ${name}!`;
}

console.log(greet(appName));

// Only show extra details while developing
if (environment === 'development') {
  console.log(`(Running in ${environment} mode)`);
}
