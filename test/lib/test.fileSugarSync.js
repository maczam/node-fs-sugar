/**
 * Created by hexin on 2014/6/1.
 */
var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    sugar = require('../../lib/sugar'),
    fsSugar = require('../../lib/file-sugar');

describe("test fsSugarSync : ", function () {
    var srcDir = path.join('/', 'testSrcDir' + new Date().getTime()),
        destDir = path.join('/', 'testDestDir' + new Date().getTime());

    beforeEach(function () {
        fs.mkdirSync(srcDir);
        fs.mkdirSync(destDir);
    });

    it('#copyFileSync()', function () {
        var filtName = 'aa.txt',
            file = path.join(srcDir, 'bb', filtName);
        sugar.createFileSync(file);
        fsSugar.copyFileSync(file, destDir);
        assert(fs.existsSync(path.join(destDir, filtName)), true, 'copyFileSync fail');
    });

    it('#isDirectorySync(1)', function () {
        fsSugar.copyDirSync(srcDir, destDir);
        assert(fs.existsSync(destDir), true, 'isDirectorySync fail');
    });

    it('#isDirectorySync(2)', function () {
        var filtName = 'bb/aa.txt',
            file = path.join(srcDir, filtName);
        sugar.createFileSync(file);
        fsSugar.copyDirSync(srcDir, destDir);
        assert(fs.existsSync(path.join(destDir, filtName)), true, 'isDirectorySync fail');
    });

    afterEach(function () {
        sugar.rmrDirSync(srcDir);
        sugar.rmrDirSync(destDir);
    });
});