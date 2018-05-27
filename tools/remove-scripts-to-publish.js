/*
 * Remove the scripts property from package.json file
 */
const path = require('path');
const { writeFileSync } = require('fs');

const rootFolder = path.resolve(__dirname, '../');
const mainPackageJsonPath = path.join(rootFolder, 'package.json');

const mainPackageJson = require(mainPackageJsonPath);
const { scripts, ...cleanPackageJson } = mainPackageJson;

const packageJsonContent = JSON.stringify(cleanPackageJson, null, 2) + '\n';

try {
  writeFileSync(mainPackageJsonPath, packageJsonContent);
  console.log('Success.');
} catch (e) {
  console.error(e);
  process.exitCode = 5;
}
