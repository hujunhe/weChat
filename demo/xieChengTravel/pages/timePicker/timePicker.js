// pages/timePicker/timePicker.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    choose: {
      p: null,
      c: null,
      word: '入住'
    },
    time: {
      start: null,
      end: null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDayFn()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getDayFn() {
    let date = new Date()
    //获取当前年份/月份/日期
    let year = date.getFullYear()
    let month = date.getMonth()
    let _date = date.getDate()
    let day = date.getDay()
    let list = this.drawCalendar(date, date.getMonth(), date.getMonth() + 6)
    this.setData({ list: list })
    console.log(this.data.list)
  },
  drawCalendar(time, start, end) {
    let arr = []
    for (let i = start; i < (end + 1); i++) {
      //起始时间
      let _arr = []
      let startTime = new Date(time.getFullYear(), i, 1)
      let endTime = new Date(time.getFullYear(), i + 1, 0)
      for (let j = 0; j < startTime.getDay(); j++) {
        _arr.push({
          date: '',
          disable: true
        })
      }
      for (let j = 0; j < endTime.getDate(); j++) {
        console.log(i === time.getMonth() + 1)
        if (i === time.getMonth() && j < time.getDate() - 1) {
          _arr.push({
            disable: true,
            date: j + 1
          })
        } else {
          _arr.push({
            disable: false,
            date: j + 1
          })
        }
      }
      arr.push({
        year: time.getFullYear(),
        month: i + 1,
        data: _arr
      })
    }
    return arr
  },
  chooseDate(e) {
    this.setData({ 'choose.p': e.target.dataset.parent, 'choose.c': e.target.dataset.child })
    let dateY = this.data.list[e.target.dataset.parent].year
    let dateM = this.data.list[e.target.dataset.parent].month
    let dateD = this.data.list[e.target.dataset.parent].data[e.target.dataset.child].date
    if (this.data.time.start === null) {
      this.setData({ 'time.start': dateM + '-' + dateD})
    } else {
      this.setData({ 'time.end': dateM + '-' + dateD })
      app.globalData.time = {
        start:this.data.time.start,
        end:this.data.time.end
      }
      wx.navigateBack()
    }
    console.log(app.globalData.time)
  }
})