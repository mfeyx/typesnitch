const shell = require('shelljs')
const pkg = require('./package')


shell.echo('Start Bulding Package...')
shell.exec('rm -rf dist')
shell.exec('mkdir -p dist')
shell.exec('cp -r src/snitch.js dist')
shell.exec('cp -r src/utils dist')
shell.exec('cp LICENSE dist')
shell.exec('cp typesnitch.package.json dist/package.json')
shell.exec(`sed -i -- 's/VERSION/${pkg.version}/g' dist/package.json`)
shell.exec('rm dist/package.json--')
// shell.exec('npm run publish dist --dry-run')
