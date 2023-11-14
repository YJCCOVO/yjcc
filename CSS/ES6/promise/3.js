function a() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('a');
            resolve('yes')
        },1000)
    })
}

function b() {
    return new Promise((resolve2,reject2) => {
        setTimeout(() => {
            console.log('b');
            resolve2()
        },2000)
    })
}

function c() {
    console.log('c');
}

Promise.all([a(),b()]).then(c)
// all 必须要接受到的所有的promise 状态都为resolve，then才会调用

// Promise.race([a(),b()])
// .then(c)
// race a() 或 b() 哪个更快c就在哪个后面执行