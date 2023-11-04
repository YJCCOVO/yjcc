// let str = 'abcdefg'
// console.log(str.charAt(2)); 读取字符串的值

// str.concat('mn') 增加字符串
// str + 'mn'

// let arr = str.split('') // 将字符串变为字符数组
// arr.splice(4,3) // 从下标4的位置向后删去3个字符 与 arr.splice(4) 效果一样
// let newStr = arr.join('-') // 用 - 拼接起来成为一个字符串

// console.log( newStr);

// let str = '2023年10月31日' //2023/10/31


// 反转字符串
// const str = 'juejin'
// const res = str.split('').reverse().join('')
// console.log(res);



//判断回文
// const str = 'yesey'
// 1.
// function ispalindrome (s) {
//     const res = s.split('').revers().join('')
//     return s === res
// }

// 2.栈的方法
// function ispalindrome(s) {
//     const stack = []
//     for(let i = 0;i<s.length;i++){
//         stack.push(s[i])
//     }
//     for(let i = 0;i<s.length;i++){
//         if(s[i] !== stack.pop()) {
//             return false
//         }
//     }
//     return true
// }

// 3. 双指针
// function inpalindrome(s) {
//     const len = s.length
//     for(let i = 0;i<len / 2; i++){
//         if(s[i] !== s[len -1 -i]){
//             return false
//         }
//     }
//     return true
// }

