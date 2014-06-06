var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    sugar = require('../../lib/sugar');

describe("test sugarSync : ", function () {
    var baseDir = path.join('/', 'sugarSync' + new Date().getTime()),
        dir = path.join(baseDir, "/b/c/");

    beforeEach(function () {
        fs.mkdirSync(baseDir);
    });

    it('#mkDirSync', function () {
        sugar.mkDirSync(dir);
        assert.equal(fs.existsSync(dir), true, 'mkDirSync fail!');
    });

    it('#rmrDirSync', function () {
        sugar.mkDirSync(dir);
        sugar.rmrDirSync(dir);
        assert.equal(fs.existsSync(dir), false, 'rmrDirSync fail!');
    });

    it('#createFileSync', function () {
        var file = path.join(dir, 'aa.txt');
        sugar.createFileSync(file);
        assert.equal(fs.existsSync(file), true, 'createFilSyenc fail');
    });

    it('#isDirectorySync', function () {
        assert.equal(sugar.isDirectorySync(baseDir), true, 'isDirectorySync fail')
    });

    it('#isFileSync', function () {
        assert.equal(sugar.isFileSync(baseDir), false, 'isFileSync fail')
    });

    it('#listSync', function () {
        var file = path.join(dir, 'aa.txt');
        sugar.createFileSync(file);
        var list = sugar.listSync(dir);
        assert.equal(list.length, 1, 'listSync files number error');
        assert.equal(list[0], 'aa.txt', 'listSync files name error');
    });

    it('#listFilterSync', function () {
        var file = path.join(dir, 'aa.txt');
        sugar.createFileSync(file);
        var list = sugar.listFilterSync(dir, function (fileName,fileStat) {
            if (fileStat.isFile()) {
                return true;
            } else {
                return false;
            }
        });
        assert.equal(list.length, 1, 'listSync files number error');
        assert.equal(list[0], 'aa.txt', 'listSync files name error');
    });

    afterEach(function () {
        sugar.rmrDirSync(baseDir);
    });
});