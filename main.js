const { run } = require("@probot/adapter-github-actions");
const app = require("./index.js");

run(app);