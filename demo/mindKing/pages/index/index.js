//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    helperAnimate:false, //小助手动画效果
    settingBoxBindStyle:false,
  },
  onLoad () {
    console.log("index onLoad")
  },
  onShow () {
    console.log("index show")
    this.setData({"helperAnimate":false})
    this.setData({ "helperAnimate": true })
  },
  //关闭设置弹窗
  closeSetting () {
    this.setData({ "settingBoxBindStyle": false})
  },
  showSettingBox () {
    console.log(1)
    this.setData({ "settingBoxBindStyle": true })
  },
  soundStatus (e) {
    console.log(e)
  },
  pushStatus () {}
})
