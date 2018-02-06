// pages/locationPicker/locationPicker.js
//引入城市json
const local = require('../../lib/local.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    provincesList:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("地址选择onload")
  },
  getLocationFn () {
    let list = local.provinces;
    this.setData({ provincesList:list})
    
  },
  chooseLocalFn (e) {
    console.log(1)
    let area = e.target.dataset.area
    wx.navigateBack({
      url: '../../pages/hotel/hotel?area=' + area,
      success:function(d){
        console.log(d)
      },
      fail:function(d){
        console.log(d)
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getLocationFn()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("地址选择onshow")
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
  
  }
})