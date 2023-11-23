let obj = {
    name:'阿伟',
    age: 18,
    like: {
    type:'coding'
    },
    a:undefined,
    b:null,
    c:function(){},
    d:{
        n:100
    },
    e:Symbol('hellp')
}
obj.c = obj.d
obj.d.m = obj.c


// 深拷贝，但有些数据类型无法拷贝
let newObj = JSON.parse(JSON.stringify(obj)) //把对象变成字符串 再变成对象


console.log(newObj);