function a(cb) {
    setTimeout(() => {
        console.log('阿贞');
        cb() //回调函数
    },1000)
}

function b() {
    setTimeout(() => {
        console.log('10亩地');
    },500)
}
a(b)

