#!/usr/bin/env node

const childProcess = require("child_process");
const os = require("os");

const log = {
  info: (message) => console.log(`\n📦 ${message}`),
  success: (message) => console.log(`\n✅ ${message}`),
  error: (message) => console.log(`\n❌ ${message}`),
  warning: (message) => console.log(`\n⚠️ ${message}`),
};

const commands = [
  // Kill the metro bundler if it's running.
  {
    command: 'pkill -f "cli.js start" || set exit 0',
    onlyPlatforms: ["darwin", "linux"],
    description: "Cleaning up Metro bundler processes",
  },

  // on iOS, make sure our native modules are installed
  {
    command: "arch -x86_64 pod install --repo-update  --verbose",
    cwd: "ios",
    onlyPlatforms: ["darwin"],
    description: "Installing iOS native dependencies",
  },
];

log.info("🚀 Starting post-install setup...");

commands
  .filter(
    ({ onlyPlatforms }) =>
      !onlyPlatforms || onlyPlatforms.includes(os.platform())
  )
  .forEach((commandAndOptions) => {
    const {
      command,
      onlyPlatform: _,
      description,
      ...options
    } = commandAndOptions;

    log.info(description);

    try {
      childProcess.execSync(command, {
        stdio: "inherit",
        ...options,
      });
      log.success(`${description} completed successfully`);
    } catch (error) {
      log.error(`${description} failed with status ${error.status}`);
      process.exit(error.status);
    }
  });

log.success("✨ Post-install setup completed successfully!");
