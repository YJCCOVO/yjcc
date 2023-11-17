// let a = {name:'俊熙'}
// let b = Object.create(a)
// a.name = '军儿' //浅拷贝
// console.log(b.name);

// let a = {
//     name:'俊熙', 
//     like:{
//         n: 'coding'

//     }
// }
// let b = Object.assign({},a) //浅拷贝
// a.like.n = 'running' // but
// // a.name = '军儿' // 不会改变
// console.log(b);

let arr = [1,2,3,{a:10}]
// let newArr = [].concat(arr) // 浅拷贝
// let newArr = arr.slice() //浅拷贝
// let newArr = [...arr] // 浅拷贝
let newArr = arr.toReversed().reverse() //ES6的新方法 浅拷贝

arr[3].a = 100
console.log(newArr);

