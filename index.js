/**
 *
 * @type {exports}
 */

var sugar = require('./lib/sugar');
var fileSugar = require('./lib/file-sugar');

var fsSugar = module.exports = {};

fsSugar.createFileSync = sugar.createFileSync;
fsSugar.isDirectorySync = sugar.isDirectorySync;
fsSugar.isFileSync = sugar.isFileSync;
fsSugar.mkdir = sugar.mkdir;
fsSugar.mkDirSync = sugar.mkDirSync;
fsSugar.rmrDirSync = sugar.rmrDirSync;

fsSugar.listFilterSync = sugar.listFilterSync;
fsSugar.listSync = sugar.listSync;

fsSugar.copyDirSync = fileSugar.copyDirSync;
fsSugar.copyFileSync = fileSugar.copyFileSync;
fsSugar.copyDirFilterSync = fileSugar.copyDirFilterSync;