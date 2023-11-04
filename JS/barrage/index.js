// 历史弹幕
let data = [
    { value:'今天你玩了GO吗', color: 'red', fontSize: 22, time: 5 },
    { value:'人在哪', color: 'green', fontSize: 15, time: 10},
    { value:'啊？', color: 'blue', fontSize: 10, time: 6},
    { value:'啊啊啊？', color: '#00a1f5', fontSize: 25, time: 7},
]

// 整理弹幕数据
CanvasBarrage.prototype.render = function () {
    //  清除画布
    this.clear()
    this.renderBarrage() // 弹幕绘制在画布上
    if (!this.isPaused) { //播放状态
        requestAnimationFrame(this.render.bind(this))
    }
}
function CanvasBarrage (canvas, video, opts = {} ) {
    if(!canvas || !video) return

    this.video = video
    this.canvas = canvas
    // 设置canvas宽高和video保持一致
    this.canvas.width = video.width
    this.canvas.height = video.height
    // 获取画布
    this.ctx = canvas.getContext('2d')
    // 初始化弹幕
    let defOpts = {
        color:'#e91e63',
        fontSize: '20',
        speed:1.5,
        opacity: 0.5,
        data: []
    }
    Object.assign(this, defOpts, opts)

    // 视频播放，弹幕才出现
    this.isPaused = true
    // 获取到所有的弹幕
    this.barrages = data // xxxxxxx
    // 移动弹幕
    this.render()
}

// let canvas = document.getElementById('canvas')
// new CanvasBarrage(canvas, video, {vaule:'xxx', color:'xxx', time: 6})