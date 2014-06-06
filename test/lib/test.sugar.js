/**
 * Created by hexin on 2014/6/4.
 */
var fs = require('fs'),
    path = require('path'),
    assert = require('assert'),
    sugar = require('../../lib/sugar');

describe("test sugar : ", function () {
    var baseDir = path.join('/', 'testSugar' + new Date().getTime()),
        dir = path.join(baseDir, "a/b/c");
    beforeEach(function (done) {
        fs.mkdir(baseDir, function (err) {
            if (err) return done(err);
            done();
        })
    });

    it('#mkDir', function (done) {
        sugar.mkDir(dir, '0755', function (err) {
            assert.equal(fs.existsSync(dir), true, 'mkDirSync fail!');
            done();
        });
    });

    afterEach(function (done) {
        sugar.rmrDirSync(baseDir);
        done();
    });
});