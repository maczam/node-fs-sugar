var ncp = require('ncp');

function copyDirSync(source, dest) {
    ncp.ncp(source, dest);
}

function copyFileSync(srcFile, destFile) {
    var readStream = fs.createReadStream(srcFile),
        writeStream = fs.createWriteStream(destFile);
    readStream.pipe(destFile);
}


module.exports = {
    copyDirSync: copyDirSync,
    copyFileSync: copyFileSync
};