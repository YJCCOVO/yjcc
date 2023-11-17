let data = new Date()

let time = data.getFullYear() + '年' + (Number(data.getMonth()) +1) + '月' + data.getDate() + '日'
let t = `${data.getFullYear()}年${+data.getMonth() +1}月${data.getDate()}日`
console.log(time);
console.log(t);