/**
 * 创建DOM
 * @param classname string
 * @param tpl string
 * @param attrs object
 * @param ele string
 * @returns HTMLElement
*/
// https://stackoverflow.com/questions/56833469/typescript-error-ts7053-element-implicitly-has-an-any-type
export function createDom(classname: string | undefined = '', tpl: string | undefined = '', attrs: {[key: string]: any} = {}, ele: string | undefined = 'div'): HTMLElement {
  const el = ele.toLowerCase()
  const dom: HTMLElement = document.createElement(el)
  dom.className = classname
  dom.innerHTML = tpl

  Object.keys(attrs).forEach(key => {
    const value = attrs[key]
    if (el === 'video' || el === 'audio') {
      if (value) {
        dom.setAttribute(key, value)
      }
    } else {
      dom.setAttribute(key, value)
    }
  })

  return dom
}

export function hasClass(el: HTMLElement, className: string): boolean {
  if (!el) {
    return false
  }

  if (el.classList) {
    return Array.prototype.some.call(el.classList, item => item === className)
  } else if (el.className) {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  } else {
    return false
  }
}

export function addClass(el: HTMLElement, className: string): void {
  if (!el) {
    return
  }

  if (el.classList) {
    className.replace(/(^\s+|\s+$)/g, '').split(/\s+/g).forEach(item => {
      item && el.classList.add(item)
    })
  } else if (!hasClass(el, className)) {
    el.className += ' ' + className
  }
}