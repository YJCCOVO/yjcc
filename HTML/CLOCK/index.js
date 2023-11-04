const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')


// console.log(secondHand);

function setTime() {
    const now = new Date()

    //获取当前的秒数
    const seconds = now.getSeconds()
    const secondsDegrees = seconds * 6 + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    //获取到分数
    const mins = now.getMinutes()
    const minsDegrees = mins * 6 + 90
    minHand.style.transform = `rotate(${minsDegrees}deg)`

    //获取到时
    const hour = now.getHours()
    const hourDegrees = hour * 30 + 90 + mins * 0.5
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setTime()
setInterval(setTime,1000)