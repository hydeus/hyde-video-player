import { Options } from './types/options'
import { _typeof, isValidUrl, addClass, createDom } from './utils'
import defaultOptions from './options'

class Player {
  container: HTMLDivElement | string
  options: Options
  // Typescript 确定赋值断言, 确定root就是DOM
  root!: HTMLElement
  video!: HTMLVideoElement

  constructor(container: any, options: Options) {

    this.container = container
    this.options = Object.assign({}, defaultOptions, options)

    this._init()
  }

  _initContainer() {
    if (!this.container) {
      throw new Error('Player container is required.')
    }

    if (_typeof(this.container) === 'string') {
      const ele = document.getElementById(<string>this.container)
      if (!ele) {
        throw new Error('Player container id is not right.')
      }

      this.root = ele
    }

    if ((typeof this.container).toLowerCase() === 'object') {
      if (_typeof(this.container) !== 'htmldivelement') {
        throw new Error('Player container is not div element.')
      }

      this.root = <HTMLDivElement>this.container
    }

    if (this.root) {
      addClass(this.root, 'hyde-player')
    }
  }

  _initURL() {
    const { bitrates, url } = this.options
  
    // // Typescript非空断言，确定bitrates就是数组
    if (!bitrates!.length && !url) {
      throw new Error('params url is required.')
    }
    
    // Typescript类型断言，确定url就是string
    // if (!isValidUrl(<string>url)) {
    if (!isValidUrl(url + '')) {
      throw new Error('params url is not right.')
    }
  }

  _initVideo() {
    const videoConfig = {
      // 内联播放，不全屏
      playsinline: true,
      'webkit-playsinline': true,
      'x5-playsinline': true,
      crossorigin: 'anonymous',
      preload: 'metadata'
    }

    this.video = <HTMLVideoElement>createDom('arbor-player', '', videoConfig, 'video')
    // this.video.src = this.options.url!

    // this.root.insertBefore(this.video, this.root.firstChild)
  }
  
  _init() {
    this._initContainer()
    this._initURL()
    this._initVideo()
  }
}

export default Player