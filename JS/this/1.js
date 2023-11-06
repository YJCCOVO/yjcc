// console.log(this);

// var a = 1
// console.log(window.a);

function identify() {
    return context.name.toUpperCase() //将小写字母转化为大写
}

function speek() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
}
var me = {
    name:"Tom"
}

var you = {
    name:"Jerry"
}
speek.call(me)