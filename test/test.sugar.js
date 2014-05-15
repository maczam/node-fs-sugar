var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    sugar = require('../index');

describe("test sugar : ", function () {
    var baseDir = path.join('/', '' + new Date().getTime()),
        dir = path.join(baseDir, "/b/c/");

    before(function () {
        fs.mkdirSync(baseDir);
    });

    it('#mkDirSync', function () {
        sugar.mkDirSync(dir);
        assert.equal(fs.existsSync(dir), true, 'mkDirSync fail!');
    });

    it('#rmrDirSync', function () {
        sugar.rmrDirSync(baseDir);
        assert.equal(fs.existsSync(baseDir), false, 'rmrDirSync fail!');
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

    after(function () {
        sugar.rmrDirSync(baseDir);
    });
});