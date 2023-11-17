// let str = '13879072222'

// console.log(str[2]);
// console.log(str.at(2));

//字符串是否以***开头
// console.log(str.startsWith('ab'));
//字符串中是否含有***
// console.log(str.includes('00'));

// console.log(str.padStart(12,'01'));

let obj = {
    a:1,
    b:2
}
// console.log(obj);
//将对象转化为字符串
// console.log(JSON.stringify(obj));
let str = JSON.stringify(obj)
//字符串转化为对象
console.log(JSON.parse(str));