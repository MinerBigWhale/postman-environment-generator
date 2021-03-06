const fs = require('fs');

module.exports = function ({ filePath }, callback) {
  fs.readFile(filePath, 'utf8', function (err, fileContents) {
    if (err) { return callback(err); }
    
    return callback(null, fileContents);
  });
};
