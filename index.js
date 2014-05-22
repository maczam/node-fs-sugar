/**
 *
 * @type {exports}
 */

var sugar = require('./lib/sugar');
var fileSugar = require('./lib/file-sugar');

var fsSugar = module.exports = {};

//file
fsSugar.createFileSync = sugar.createFileSync;
fsSugar.isDirectorySync = sugar.isDirectorySync;
fsSugar.isFileSync = sugar.isFileSync;
fsSugar.mkDirSync = sugar.mkDirSync;
fsSugar.rmrDirSync = sugar.rmrDirSync;
fsSugar.listFilter = sugar.listFilter;
fsSugar.copyDirSync = sugar.copyDirSync;
fsSugar.copyDirSync = fileSugar.copyDirSync;
fsSugar.copyFileSync = fileSugar.copyFileSync;