/**
 * 类型判断
 * @param obj any
 * @returns string
 */
export function _typeof(obj: any): string {
  // @ts-ignore
  return Object.prototype.toString.call(obj).toLowerCase().match(/([^\s.*]+)(?=]$)/g)[0]
}

/**
 * 验证视频地址URL的合法性
 * @param str string
 * @returns boolean
 */
export function isValidUrl(str: string): boolean {
  return str.startsWith('http://') || str.startsWith('https://')
}