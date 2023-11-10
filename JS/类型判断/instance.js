let str = 'hello' //string
let num = 123 //number
let flag = false //boolean
let und = undefined // undefined
let nu = null // null
let big = 123n // big number
let s = Symbol('hello')

let obj = {}
let arr = [] // new Array()     arr.__proto__===Array.prototype  arr.__proto__.__proto__===Object.prototype
let fn = function() {}
let date = new Date()

// console.log(obj instanceof Object);
// console.log(arr instanceof Object);
// console.log(fn instanceof Function);
// console.log(date  instanceof Date);


function test(obj) {
    if(obj instanceof Object) {
        return obj.name
    }
}
test(['君君'])