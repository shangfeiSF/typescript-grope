import {Engineer} from './01.export'

let engineer = new Engineer('engineer', 10, new Date('2017-01-01'), 1)

// 根据编译时--module指定的模块系统，生成供相应模块系统使用的代码：

// Node.jCommonJS)：tsc 05.generation.ts --module CommonJS
// Require.js (AMD)：tsc 05.generation.ts --module AMD  --outFile ./build/05.AMD.js
// isomorphic (UMD)：tsc 05.generation.ts --module UMD
// SystemJS：tsc 05.generation.ts --module System --outFile ./build/05.System.js
// ECMAScript 2015 native modules (ES6)：tsc 05.generation.ts --module ES6 / tsc 05.generation.ts --module ES2015

// 使用--module需要注意以下：

// （1）只有--module AMD和--module System与--outFile配合使用才生效

// （2）当--target ES5时，以下命令无法生成ES5的代码：
// tsc 05.generation.ts --module ES6 --target ES5
// tsc 05.generation.ts --module ES2015 --target ES5
// 即--module ES6和--module ES2015会忽略--target ES5
