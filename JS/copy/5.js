// 手动实现深拷贝
let obj = {
    name:'阿伟',
    age: 18,
    like: {
        type:'coding'
    }
}

function deepCopy(obj) {
    let objCopy = {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)) {
            if(obj[key] instanceof Object) { //obj[key] 是引用类型
                objCopy[key] = deepCopy(obj[key])
            } else {
                objCopy[key] = obj[key]
            }
        }
    }
    return objCopy
}
let newObj = deepCopy(obj)
console.log(newObj);