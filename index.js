#!/usr/bin/env node

const fs = require('fs-extra')
const glob = require('glob')
const camelCase = require('lodash.camelcase')
const path = require('path')

function generate (subSectionName, destination) {
  const packagePath = path.resolve(require.resolve('@launchpadlab/lp-subsection-generator'), '../')
  const root = process.cwd()
  console.log('Generating...')
  // Copy files over
  fs.copySync(path.resolve(packagePath, './template'), path.resolve(packagePath, `./${ subSectionName }`))
  // Replace template variables in files
  const fileNames = glob.sync(path.resolve(packagePath, `./${ subSectionName }/**/*.js`))
  fileNames.map(fileName => populateTemplateFile(fileName, subSectionName))
  // Rename view file
  fs.renameSync(path.resolve(packagePath, `./${ subSectionName }/views/sub-section.js`), path.resolve(packagePath, `./${ subSectionName }/views/${ subSectionName }.js`))
  // Move to final dest
  fs.moveSync(path.resolve(packagePath, `./${ subSectionName }`), path.resolve(root, destination, subSectionName))
  console.log('Done!')
}

function populateTemplateFile (fileName, kebabCaseName) {
  const file = fs.readFileSync(fileName, 'utf8')
  const result = file
    .replace(/%sub-section%/g, kebabCaseName)
    .replace(/%SubSection%/g, pascalCase(kebabCaseName))
  return fs.writeFileSync(fileName, result)
}

function pascalCase (str) {
  const cased = camelCase(str)
  return cased.charAt(0).toUpperCase() + cased.slice(1)
}

function main () {
  const args = process.argv.slice(2)
  const subSectionName = args[0] || 'sub-section'
  const destination = args[1] || './src'
  return generate(subSectionName, destination)
}

main()