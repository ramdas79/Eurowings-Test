const baseConfig = require("./wdio.conf.js").config;
const localConfig = Object.assign(baseConfig, {
    maxInstances: 1,
    runner: "local",
    logLevel: "info",
});
exports.config = localConfig;