import obj from './01-默认导出.js'
console.log(obj);

import { obj1, fn, arr } from './02-按需导出.js'
console.log(obj1, arr);

import './03-直接导入并执行.js'