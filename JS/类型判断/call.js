var obj = {
    a:1,
}
function foo(x,y) {
    console.log(this.a,x+y);
}
// foo.call(obj) //<--如何访问到1

// call的过程
// {
//     fn:foo
// }
// obj.fn()
// delete obj.fn

// obj.foo()

Function.prototype.myCall = function(context) {
    if( typeof this !== 'function') { //this是函数体foo的
        throw new TypeError('Mycall is not a function')
    }
    let args = Array.from(arguments).slice(1)   //let args = [...arguments].slice(1)

    context.fn = this
    let res = context.fn(...args) //触发this隐式绑定规则
    delete context.fn //用完就删
    return res
}

foo.myCall(obj,1,2)