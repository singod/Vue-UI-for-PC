/**
 * Created by 337547038 on 2018/8/31 0031.
 */
import Dialog from './dialog'
import Vue from 'vue'
import {prefixCls} from '../prefix'
/* Dialog.Dialog = function (options) {
  let Message = Vue.extend(Dialog)
  const propsData = Object.assign({}, options)
  // propsData.visible = true
  propsData.isAlert = true
  let component = new Message({
    propsData
  }).$mount()
  document.body.appendChild(component.$el)
  component.open()
} */
const dialogComm = function (propsData) {
  let Message = Vue.extend(Dialog)
  let component = new Message({
    propsData
  }).$mount()
  document.body.appendChild(component.$el)
  component.open()
}
const DialogAlert = {
  Dialog (opt) {
    opt = Object.assign({}, {isAlert: true}, opt)
    dialogComm(opt)
  },
  Alert (content, opt) {
    opt = Object.assign({}, {
      title: opt.title,
      content: content,
      confirm: opt.confirm,
      cancel: opt.cancel,
      type: opt.type || 3,
      callback: opt.callback,
      animation: opt.animation,
      width: opt.width,
      isAlert: true,
      className: 'dialog-alert',
      showClose: false,
      closeModal: false
    })
    dialogComm(opt)
  },
  Msg (content, opt) {
    opt = Object.assign({}, {
      content: content,
      type: opt.type || 1,
      autoClose: opt.autoClose || 3,
      animation: opt.animation,
      width: opt.width,
      isAlert: true,
      className: 'dialog-msg',
      showClose: false,
      closeModal: false,
      modal: opt.modal || false
    })
    dialogComm(opt)
  },
  Clear () {
    // 添加一个简单粗暴的方法，用于清除所有alert弹窗和遮罩层
    const dialog = document.querySelectorAll(`.${prefixCls}-dialog-isAlert`)
    if (dialog) {
      dialog.forEach(item => {
        // console.log(item)
        item.parentNode.removeChild(item)
        document.body.style = '' // 锁定body解锁
      })
    }
    // 遮罩层
    const modal = document.querySelectorAll(`.${prefixCls}-dialog-modal`)
    if (modal) {
      modal.forEach(item => {
        item.parentNode.removeChild(item)
      })
    }
  }
}
export {Dialog, DialogAlert}

/*
export default {
  install: function (Vue, options) {
    // 注册全局组件，其它页面直接引用不用import
    Vue.component(Dialog.name, Dialog)
    // 添加全局API
    Vue.prototype.$dialog = function (options) {
      let Message = Vue.extend(Dialog)
      const propsData = Object.assign({}, options)
      // propsData.visible = true
      propsData.isAlert = true
      let component = new Message({
        propsData
      }).$mount()
      /!* var component = new message({
       data:options
       }).$mount() *!/
      document.body.appendChild(component.$el)
      component._openDialog()
    }
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Dialog)
}
*/
