/**
 * Created by hexin on 2014/5/15.
 */
var fs = require('fs'),
    path = require('path');

/**
 * 创建目录,如果没有mode默认为755
 * @param p
 * @param mode
 */
function mkDirSync(p, mode) {
    if (mode === undefined) {
        mode = 0755 & (~process.umask());
    }
    var tPath = p, paths = [];
    while (!fs.existsSync(tPath)) {
        paths.unshift(tPath);
        tPath = path.dirname(tPath);
    }
    paths.forEach(function (t) {
        fs.mkdirSync(t, mode);
    })
}
/**
 * 创建目录,如果没有传递mode默认为755
 * @param dirpath
 * @param mode
 * @param cb
 */
function mkDir(dirpath, mode, callback) {
    if (typeof mode === 'function' || mode === undefined) {
        callback = mode;
        mode = 0755 & (~process.umask());
    }
    var callback = callback || function () {};
    fs.exists(dirpath, function (exists) {
        exists ? callback(null, dirpath) :
            mkDir(path.dirname(dirpath), mode, function (err, dir) {
                err ? callback([err, dirpath]) :
                    fs.mkdir(dirpath, mode, function (err) {
                        err ? callback([err, dirpath]) :
                            callback(null, dirpath);
                    })
            });
    });
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

/**
 * 按照指定条件过滤文件，获取想要的子文件列表。
 *  filter中被传递stats，stats表述详见http://nodejs.org/api/fs.html#fs_class_fs_stats
 *
 * @param dir
 * @param filter
 *  filter(stats)
 * @returns {Array}
 */
function listFilterSync(dir, filter) {
    var files = [];
    fs.readdirSync(dir).forEach(function (tFile) {
        if (filter(tFile, fs.lstatSync(path.join(dir, tFile)))) {
            files.push(tFile);
        }
    });
    return files;
}

/**
 * 返回文件夹下面所有文件
 * @param dir
 * @returns {Array}
 */
function listSync(dir) {
    if (isDirectorySync(dir)) {
        return fs.readdirSync(dir);
    }
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
    return stat.isFile();
}

module.exports = {
    mkDir: mkDir,
    mkDirSync: mkDirSync,
    rmrDirSync: rmrDirSync,
    createFileSync: createFileSync,
    isDirectorySync: isDirectorySync,
    isFileSync: isFileSync,
    listFilterSync: listFilterSync,
    listSync: listSync
};