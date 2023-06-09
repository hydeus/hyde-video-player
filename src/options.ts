import { Options } from './types/options'
import { Language } from './enums'

const defaultOptions: Options = {
  debug: false,
  theme: '#06C2A1',
  url: '',
  poster: '',
  language: Language.ZH,
  autoplay: false,
  autoplayMuted: true,
  loop: false,
  rate: 1,
  defaultBitrate: '',
  bitrates: [],
  isLive: false,
  controls: true,
  fullpage: true,
  fullscreen: true,
  pip: true,
  volume: 0.8,
  maxRetry: 3,
  flv: {},
  hls: {}
}

export default defaultOptions