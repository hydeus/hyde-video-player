type Language = 'zh' | 'en'
type Rate = 0.5 | 0.75 | 1 | 1.5 | 2 | 4

type Bitrates = {
  label: string, // 视频码率名称
  value: string, // 视频码率名称对应的KEY，如：360P 720P；defaultBitrate可以指定该key
  url: string // 视频码率对应的视频地址
}

export type Options = {
  debug?: boolean, // 调试模式，默认false
  theme?: string, // 主题颜色，16进制，默认'#06C2A1'
  url?: string, // 视频或直播地址，默认''
  poster?: string, // 播放器封面图，默认''
  language?: Language, // 语言，默认zh
  autoplay?: boolean // 自动播放，默认true
  autoplayMuted?: boolean, // 自动播放静音，默认true
  loop?: boolean, // 循环，默认false
  rate?: Rate, // 速率，默认1
  defaultBitrate?: string, // 码率，默认''
  bitrates?: Bitrates[], // 多分辨率，默认[]
  isLive?: boolean, // 是否直播，默认false
  controls?: boolean, // 是否显示控制栏，默认true
  fullpage?: boolean, // 网页全屏，默认true
  fullscreen?: boolean, // 全屏，默认true
  pip?: boolean, // 画中画，默认true
  volume?: number, // 音量，默认0.8
  maxRetry?: number, // 重试次数，默认3
  flv?: object, // flv配置参数，默认{}
  hls?: object, // hls配置参数，默认{}
}