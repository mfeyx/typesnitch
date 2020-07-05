const shell = require('shelljs')
const pkg = require('./package')

console.log('Running Tests')
shell.exec('npm test')

console.log('Running Lint')
shell.exec('npm run lint')

console.log('Start Bulding Package...')
shell.exec('rm -rf dist')
shell.exec('rm -rf dist')
shell.exec('mkdir -p dist')

console.log('Copy files into dist folder...')
shell.exec('cp -r src/snitch.js dist')
shell.exec('cp -r src/utils dist')
shell.exec('cp LICENSE dist')
shell.exec('cp REAMDME.md dist')
shell.exec('cp typesnitch.package.json dist/package.json')
shell.exec(`sed -i -- 's/VERSION/${pkg.version}/g' dist/package.json`)
shell.exec('rm dist/package.json--')
