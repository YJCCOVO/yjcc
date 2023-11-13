function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥相亲了!');
            resolve('相亲成功')
        },2000)
    })
}

function marry() {
    return new Promise((resolve2, reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了!');
            resolve2()
        },1000)
    })
}

function baby() {
    setTimeout(() => {
        console.log('小龙女出生!');
    },1000)
}

function baby2() {
    setTimeout(() => {
        console.log('小龙女2出生!');
    },300)
}


xq()
.then((res) => {
    return marry()
})
.then((res2) => {
    baby()
})

