// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataType: "",
    code: null,
    info: {
      hotelName: '北京大方饭店',
      hotelLevel: '四星级',
      hotelTimeStart: '2002',
      score: '4.4',
      disscusNum: 5271,
      location: '西客站南广场东侧（近地铁7号线湾子站及9号线）',
      near: '北京西站、丽泽商务区',
      roomType: [{
        imgSrc: '../../asset/roomPic.jpg',
        roomName: "豪华间",
        area: 42,
        bed: "大/双",
        floor: "3-10",
        prize: "865",
        list: [{
          title: "特惠价",
          direction: "不含早餐",
          people: 2,
          cancel: false,
          prize: 865
        }, {
          title: "标准价",
          direction: "双份早餐",
          people: 2,
          cancel: true,
          prize: 888
        }]
      }, {
        imgSrc: '../../asset/roomPic.jpg',
        roomName: "豪华间",
        area: 42,
        bed: "大/双",
        floor: "3-10",
        prize: "865",
        list: [{
          title: "特惠价",
          direction: "不含早餐",
          people: 2,
          cancel: false,
          prize: 865
        }, {
          title: "标准价",
          direction: "双份早餐",
          people: 2,
          cancel: true,
          prize: 888
        }]
      }],
      dev: [{
        devName: '网络',
        devList: ['客房免费wifi', '房间高速上网', '公共区wifi免费']
      }, {
        devName: '交通服务',
        devList: ['免费停车场', '接机服务', '接站服务', '代客泊车', '租车服务']
      }, {
        devName: '休闲娱乐',
        devList: ['室内游泳池', '健身房', 'SPA', '足浴', '按摩室', '桑拿浴室', '乒乓球室', '桌球室', '棋牌室']
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let that = this
    // this.setData({ dataType: options.type, code: options.code})
    // wx.request({
    //   url: "test",
    //   data: {
    //     dataType: options.type,
    //     code: options.code
    //   },
    //   success: res => {
    //     that.setData({info:res.info})
    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
