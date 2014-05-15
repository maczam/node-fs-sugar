/**
 *
 * @type {exports}
 */

var sugar = require('./lib/sugar');

var fs_sugar = module.exports = {};

//file
fs_sugar.createFileSync = sugar.createFileSync;
fs_sugar.isDirectorySync = sugar.isDirectorySync;
fs_sugar.isFileSync = sugar.isFileSync;
fs_sugar.mkDirSync = sugar.mkDirSync;
fs_sugar.rmrDirSync = sugar.rmrDirSync;
fs_sugar.listFilter = sugar.listFilter;
fs_sugar.copyDirSync = sugar.copyDirSync;