const fs = require('fs');
const path = require('path');
const tsconfig = require('./tsconfig.json');

const startingDir = tsconfig.compilerOptions.outDir;

function resolveModulesInFolder(folder) {
  fs.readdirSync(folder, {
    withFileTypes: true,
  }).forEach((fileOrFolder) => {
    if (fileOrFolder.isFile() && fileOrFolder.name.endsWith('.js')) {
      const file = fs.readFileSync(path.resolve(folder, fileOrFolder.name));
      const relativePath = path.relative(`/${folder}`, `/${startingDir}/lib/`);
      const newFile = file.toString().replace(/\@lib/g, './' + relativePath);
      fs.writeFileSync(`${folder}/${fileOrFolder.name}`, newFile);
    } else if (fileOrFolder.isDirectory()) {
      resolveModulesInFolder(`${folder}/${fileOrFolder.name}`);
    }
  });
}

resolveModulesInFolder(startingDir);
