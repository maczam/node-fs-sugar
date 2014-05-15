/**
 * Created by hexin on 2014/5/15.
 */
var fs = require('fs'),
    path = require('path');

function mkDirSync(p, mode) {
    var tPath = p, paths = [];
    while (!fs.existsSync(tPath)) {
        paths.unshift(tPath);
        tPath = path.dirname(tPath);
    }
    paths.forEach(function (t) {
        fs.mkdirSync(t, mode);
    })
}

function rmrDirSync(file) {
    if (isDirectorySync(file)) {
        fs.readdirSync(file).forEach(function (tFile) {
            rmrDirSync(file + '/' + tFile);
        });
        fs.rmdirSync(file);
    } else {
        fs.unlinkSync(file);
    }
}

function listFilter(path, filter) {
    var files = [];
    isDirectorySync(path).forEach(function (file) {
        if (filter.apply(null, fs.statSync(file))) {
            files.push(file);
        }
    });
    return files;
}

function createFileSync(file) {
    mkDirSync(path.dirname(file));
    fs.closeSync(fs.openSync(file, 'w'));
//    fs.writeFileSync(file,'');
}

function isDirectorySync(file) {
    var stat = fs.lstatSync(file);
    return stat.isDirectory();
}

function isFileSync(file) {
    var stat = fs.lstatSync(file);
    return stat.isFile()
}


function copyDirSync(from, to) {

}

module.exports = {
    mkDirSync: mkDirSync,
    rmrDirSync: rmrDirSync,
    listFilter: listFilter,
    copyDirSync: copyDirSync,
    createFileSync: createFileSync,
    isDirectorySync: isDirectorySync,
    isFileSync: isFileSync
}