#!/usr/bin/env node
/* eslint-disable no-console */

const { Command } = require('commander')
const generate = require('./generate')

function main () {
  const program = new Command

  program
    .description('generate a project subsection')
    .showHelpAfterError()
    .version(require('./package.json').version)
    .argument('<subsection-name>', 'name of the subsection')
    .argument('[destination]', 'optional project destination path', './src/js/main')
    .action((subsectionName, destination) => {
      generate(subsectionName, destination, "client")
    })

  program.parse()
}

if (!module.parent) main()
