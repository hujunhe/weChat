// pages/hotel/hotel.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{
      dataType: "hotel",
      location:'北京',
      data:[{
        imgSrc:"../../asset/hotelPic.jpg",
        name:"北京大方饭店",
        score:'4.4',
        disscusPeople:5269,
        level:'四星级',
        distance:"距离北京市中心7.2公里",
        near:"北京西站/丽泽商务区",
        discount:"398返11",
        prize:387,
        code:1230
      }, {
        imgSrc: "../../asset/hotelPic.jpg",
        name: "北京大方饭店",
        score: '4.4',
        disscusPeople: 5269,
        level: '四星级',
        distance: "距离北京市中心7.2公里",
        near: "北京西站/丽泽商务区",
        discount: "398返11",
        prize: 387,
        code:1230
        }, {
          imgSrc: "../../asset/hotelPic.jpg",
          name: "北京大方饭店",
          score: '4.4',
          disscusPeople: 5269,
          level: '四星级',
          distance: "距离北京市中心7.2公里",
          near: "北京西站/丽泽商务区",
          discount: "398返11",
          prize: 387,
          code:1230
      }, {
        imgSrc: "../../asset/hotelPic.jpg",
        name: "北京大方饭店",
        score: '4.4',
        disscusPeople: 5269,
        level: '四星级',
        distance: "距离北京市中心7.2公里",
        near: "北京西站/丽泽商务区",
        discount: "398返11",
        prize: 387,
        code:1230
        }, {
          imgSrc: "../../asset/hotelPic.jpg",
          name: "北京大方饭店",
          score: '4.4',
          disscusPeople: 5269,
          level: '四星级',
          distance: "距离北京市中心7.2公里",
          near: "北京西站/丽泽商务区",
          discount: "398返11",
          prize: 387,
          code:1230
        }]
    },
    list2:{
      dataType:'hotel',
      location:'其他',
      data:[{
        imgSrc: "../../asset/hotelPic.jpg",
        name: "其他饭店",
        score: '5.0',
        disscusPeople: 1111,
        level: '五星级',
        distance: "距离xx市中心7.2公里",
        near: "xx西站/丽泽商务区",
        discount: "398返222",
        prize: 398,
        code: 1230
      }]
    },
    location:null,
    searchData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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
    let _list = this.data.list2
    let date = new Date()
    this.setData({ location: app.globalData.location})
    this.setData({ searchData: app.globalData.time || { start: { date: (date.getMonth() + 1) + '-' + date.getDate() }, end: { date: (date.getMonth() + 1) + '-' + (date.getDate() + 1)}} })
    // this.setData({list: _list})
    
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