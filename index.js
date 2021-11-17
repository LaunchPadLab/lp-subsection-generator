#!/usr/bin/env node
/* eslint-disable no-console */

const { Command } = require('commander')
const fs = require('fs-extra')
const glob = require('glob')
const path = require('path')
const pluralize = require('pluralize')
const { camelCase, kebabCase, flow, snakeCase, toUpper } = require('lodash')
const screamingSnakeCase = flow(snakeCase, toUpper)

function generate (subSectionName, destination, options) {
  // Compute all casings
  const singularName = pluralize.singular(subSectionName)
  const camelCaseName = camelCase(singularName)
  const kebabCaseName = kebabCase(singularName)
  const pascalCaseName = pascalCase(singularName)
  const screamingSnakeCaseName = screamingSnakeCase(singularName)
  // Compute paths
  const packagePath = getPackagePath()
  const root = process.cwd()
  const templatePath = templatePathFromTemplateType(options.templateType)
  // GENERATE
  console.log('Generating...')
  // Copy files over
  fs.copySync(path.resolve(packagePath, templatePath), path.resolve(packagePath, `./${ subSectionName }`))
  // Replace template variables in files
  const allFiles = glob.sync(path.resolve(packagePath, `./${ subSectionName }/**/*.js`))
  allFiles.forEach(file => {
    const template = fs.readFileSync(file, 'utf8')
    const result = template
      .replace(/%sub-section%/g, kebabCaseName)
      .replace(/%subSection%/g, camelCaseName)
      .replace(/%SubSection%/g, pascalCaseName)
      .replace(/%SUB_SECTION%/g, screamingSnakeCaseName)
      .replace(/%sub-sections%/g, pluralize(kebabCaseName))
      .replace(/%subSections%/g, pluralize(camelCaseName))
      .replace(/%SubSections%/g, pluralize(pascalCaseName))
      .replace(/%SUB_SECTIONS%/g, pluralize(screamingSnakeCaseName))
    return fs.writeFileSync(file, result)
  })
  // Rename view files
  fs.renameSync(path.resolve(packagePath, `./${ subSectionName }/views/SubSections.js`), path.resolve(packagePath, `./${ subSectionName }/views/${ pluralize(pascalCaseName) }.js`))
  fs.renameSync(path.resolve(packagePath, `./${ subSectionName }/views/SubSectionShow.js`), path.resolve(packagePath, `./${ subSectionName }/views/${ pascalCaseName }Show.js`))
  // Move to final dest
  fs.moveSync(path.resolve(packagePath, `./${ subSectionName }`), path.resolve(root, destination, subSectionName))
  console.log('Done!')
}

function getPackagePath () {
  try {
    return path.resolve(require.resolve('@launchpadlab/lp-subsection-generator'), '../')
  } catch (e) {
    console.log('Path not found, running locally')
    return __dirname
  }
}

function pascalCase (str) {
  const cased = camelCase(str)
  return cased.charAt(0).toUpperCase() + cased.slice(1)
}

function templatePathFromTemplateType(templateType) {
  switch(templateType) {
    case "client": return './template'
    case "ionic": return './ionic-template'

    default:
      throw new Error (`generate-subsection: [ERROR]: unknown template type [${templateType}]`)
  }
}

function main () {
  const program = new Command

  program
    .description('generate a project subsection')
    .version(require('./package.json').version)
    .option('-t, --template-type <client | ionic>', 'subsection template type', 'client')
    .argument('[subsection-name]', 'name of the subsection', 'sub-section')
    .argument('[destination]', 'optional project destination path', './src/js/main')
    .action((subsectionName, destination, options) => {
      generate(subsectionName, destination, options)
    })

  program.parse()
}

if (!module.parent) main()
