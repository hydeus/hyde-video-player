/**
 * 弹幕对象
 * fontSzie 字体大小 默认16
 * color 字体颜色 默认 #000
 * content 内容
 * speed 速度 1 5 10
 * 
 * 
 * 弹幕太多页面出现卡顿
 * 
 * 1. 显示到canvas上的弹幕数量固定
 * 2. 将弹幕数据加入队列，滚动到最最左边删除一个，再在原始数组中添加一个到弹幕队列，限流做法
 */

const defaultOpts = {
  fontSize: 16, // 范围12-24
  color: '#000',
  speed: 5
}

class Barrage {
  constructor(options, ctx) {
    this.inited = false
    this.options = options
    this.ctx = ctx
  }

  init() {
    // 计算出弹幕的长宽
    const span = document.createElement('span')
    span.innerText = this.options.content
    span.style.font = this.options.fontSize + 'px "Microsoft Yahei"'
    document.body.appendChild(span)
    this.barrageWidth = span.clientWidth
    this.barrageHeight = span.clientHeight
    document.body.removeChild(span)

    // 计算弹幕出现的位置
    this.x = this.ctx.canvasWidth
    this.y = parseInt(Math.random() * this.ctx.canvasHeight)

    // TODO... 上中下
    // 上边界
    if (this.y < this.options.fontSize) {
      this.y = this.options.fontSize
    }
    // 下边界
    console.log(this.y, this.ctx.canvasHeight - this.options.fontSize)
    if (this.y > this.ctx.canvasHeight - this.options.fontSize) {
      this.y = this.ctx.canvasHeight - this.options.fontSize
    }
  }

  draw() {
    this.ctx.context.rect(this.x, this.y, this.barrageWidth, this.barrageHeight)
    this.ctx.context.lineWidth = 1
    this.ctx.context.strokeStyle = '#06C2A1'
    this.ctx.context.stroke()

    this.ctx.context.font = this.options.fontSize + 'px "Microsoft Yahei"'
    this.ctx.context.fillStyle = this.options.color
    this.ctx.context.fillText(this.options.content, this.x, this.y)
  }
}

class BarrageCanvas {
  constructor(canvas) {
    this.barrages = []
    this.canvas = canvas

    this.context = canvas.getContext('2d')
    this.canvasWidth = canvas.clientWidth
    this.canvasHeight = canvas.clientHeight

    this.render()
  }

  renderBarrage() {
    this.barrages = this.barrages.filter(barrage => !(barrage.x <= 0))
    // console.log(this.barrages)

    this.barrages.forEach((barrage, index) => {
      if (!barrage.inited) {
        barrage.init()
        barrage.inited = true
      }
      barrage.x -= barrage.options.speed
      barrage.draw()
    })
  }

  render() {
    // 清空画布
    this.clear()
    this.renderBarrage()

    requestAnimationFrame(this.render.bind(this))
  }

  add(options) {
    this.barrages.push(new Barrage(options, this))
  }

  // 清屏
  clear() {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  }
}