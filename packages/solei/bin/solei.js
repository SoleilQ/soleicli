#!/usr/bin/env node
// console.log("Hello Solei");

const { program } = require("commander");

program
  .version(require("../package.json").version, "-v, -V", "输出当前框架的版本")
  .description("这是solei的一个小demo")
  .usage("<command> [options]")
  .parse(process.argv);

program
  .command("help")
  .alias("-h")
  .description("帮助命令")
  .action((name, other) => {
    console.log(`
这是solei 支持的命令：
  version, -v, -V 输出当前版本
  help, -h 帮助

Example call:
  solei <command> --help`);
  })
  .parse(process.argv);

program
  .command("dev")
  .description("solei 开发命令")
  .action(() => {
    const { dev } = require("../lib/dev");
    dev();
  });

program.parse(process.argv);
