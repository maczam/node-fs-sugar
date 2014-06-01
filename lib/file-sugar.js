var sugar = require('./sugar'),
    fs = require('fs'),
    path = require('path');

/**
 *
 * @param source
 * @param dest
 * @param filter
 */
function copyDirFilterSync(source, dest, filter) {
    sugar.mkDirSync(dest);
    var tSrc;
    fs.readdirSync(source).forEach(function (file) {
        tSrc = path.join(source, file);
        if (filter(tFile, fs.lstatSync(tSrc))) {
            if (sugar.isDirectorySync(src)) {
                copyFileSync(tSrc, path.join(dest, file));
            } else {
                copyDirFilterSync(tSrc, path.join(dest, file), filter);
            }
        }
    });
}

function copyDirSync(source, dest) {
    sugar.mkDirSync(dest);
    var tSrc, tDst;
    sugar.listSync(source).forEach(function (file) {
        tSrc = path.join(source, file),
            tDst = path.join(dest, file);
        if (sugar.isDirectorySync(tSrc)) {
            copyDirSync(tSrc, tDst);
        } else {
            copyFileSync(tSrc, dest);
        }
    })
}
var buffSize = 64 * 1024, //64K
    buff = new Buffer(buffSize);
function copyFileSync(srcFile, destDir) {
    var destFile = path.join(destDir, path.basename(srcFile)),
        readable = fs.openSync(srcFile, 'r'),
        writable = fs.openSync(destFile, 'w'),
        readSize, pos = 0;

    while ((readSize = fs.readSync(readable, buff, 0, buffSize, pos)) > 0) {
        fs.writeSync(writable, buff, 0, readSize);
        pos += readSize;
    }
    fs.closeSync(readable);
    fs.closeSync(writable);
}

module.exports = {
    copyDirSync: copyDirSync,
    copyFileSync: copyFileSync,
    copyDirFilterSync: copyDirFilterSync
};