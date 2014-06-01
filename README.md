node-fs-sugar[![Build Status](https://travis-ci.org/maczam/node-fs-sugar.svg)](https://travis-ci.org/maczam/node-fs-sugar)
=====
fs-sugar(甜fs)封装了部分fs常用的方法，来方便开发。


Quick Examples
===

mkdirSyn(dir)
---
创建多层目录，类似`mkdir -p /a/b/c`
```js
var sugar = require('fs-sugar');
sugar.mkdirSync('/a/b/c');
```
rmrDirSync(dir)
---
直接删除目录，类似`rm -rf /a/b`


listFilterSync(dir,filter)
---
按照制定的条件`function`列出子文件、目录
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

listSync(dir)
---
列出文件夹下面所有文件
```js
var sugar = require('fs-sugar');
var fileNameArray = sugar.listSync(dir);
```

createFileSync
---
如果目录不存在，先创建目录。

isDirectorySync
---
判断是否为目录，如果不存在，直接抛出异常。

isFileSync
---
判断是否为文件，如果不存在，直接抛出异常。

TODO
====
1. copy
2. 异步
