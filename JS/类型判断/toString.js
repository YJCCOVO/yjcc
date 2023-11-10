// console.log(
//     Object.prototype.toString.call('hello')
// );


let s = 'hello'

function isType(s) {
    return Object.prototype.toString.call(s).slice(8,-1)
}

if(isType(s) === 'String'){
    console.log('牛的');
}