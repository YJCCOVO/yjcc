let obj = {
    name:'顶真',
    age:18
}
// console.log(obj['name']);
// obj.girlFriend = '翠花'
let girl = 'girlFriend'
obj[girl] = '小红'

delete obj.girlFriend //移除属性

console.log(obj);
