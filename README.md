node-fs-sugar[![Build Status](https://travis-ci.org/maczam/node-fs-sugar.svg)](https://travis-ci.org/maczam/node-fs-sugar)
=====
fs-sugar(甜fs)封装了部分fs常用的方法，来方便开发。


Quick Examples
===

file
---

* createFileSync(filePath)
如果目录不存在，会先创建目录。
```js
var fs = require('fs'),
    sugar = require('fs-sugar');
var file = path.join('/a/b', 'aa.txt');
sugar.createFileSync(file);
assert.equal(fs.existsSync(file), true, 'createFilSyenc fail');
```

* isFileSync(filePath)
判断是否为文件,如果不存在，直接抛出异常。
```js
var sugar = require('fs-sugar');
assert.equal(sugar.isFileSync('/a/b'), false, 'isFileSync fail')
```

* copyFileSync(srcFile, destDir)
将srcFile文件拷贝至destDir,如果destDir不存在会新建

```js
var sugar = require('fs-sugar');
sugar.copyFileSync('/a/b/aa.txt','/c')

```

dir
---
* isDirectorySync(dirPath)
判断是否为文件夹，如果不存在，直接抛出异常。
```js
var sugar = require('fs-sugar');
assert.equal(sugar.isDirectorySync('/a/b'), true, 'isDirectorySync fail')
```

* mkDirSync(dir)
创建多层目录，类似`mkdir -p /a/b/c`
```js
var sugar = require('fs-sugar');
sugar.mkdirSync('/a/b/c');
```

* rmrDirSync(dir)
直接删除目录，类似`rm -rf /a/b`
```js
var sugar = require('fs-sugar');
sugar.rmrDirSync('/a/b');
```
* listSync(dir)
列出文件夹下面所有文件
```js
var sugar = require('fs-sugar');
var fileNameArray = sugar.listSync(dir);
```

* listFilterSync(dir,filter)
按照制定的条件列出子文件、目录
```js
var sugar = require('fs-sugar');
var fileNameArray = sugar.listFilter('/a/b/c',function(fileName,fileStat){
    console.log(fileName);
    console.log(JSON.stringify(fileStat));
    if (fileStat.isFile()) {
        return true;
    } else {
        return false;
    }
});
```

* copyDirSync(source, dest)
将source文件夹拷贝成destDir文件夹,类似`cp /a/b /c`
```js
var sugar = require('fs-sugar');
sugar.copyDirSync('/a/b', '/c');
```

* copyDirFilterSync(source, dest, filter)
将source文件夹拷贝成destDir文件夹,其中可以用filter过滤不需要拷贝文件
```js
var sugar = require('fs-sugar');
sugar.copyDirFilterSync('/a/b', '/c', function (fileName, fileStat) {
    console.log(fileName);
    console.log(JSON.stringify(fileStat));
    if (fileStat.isFile()) {
        return true;
    } else {
        return false;
    }
});
```

TODO
====
1. 异步