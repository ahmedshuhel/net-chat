var fs = require('fs');

document.write('The current version of node is: ' + process.version);
var content = fs.readFileSync('./package.json', 'utf8');

document.write(content);
