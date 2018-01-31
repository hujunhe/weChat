// pages/items/items.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      name: '一张王者券',
      img: "img/items.png",
      content:"使用后获得50王者币",
      num: 8
    }, {
      name: '少量王者券',
      img: "img/items.png",
      content:"100块",
      num: 7
    }, {
      name: '限次经验卡',
      img: "img/items.png",
      num: 11,
      content:'下5场排位赛的经验+50%'
    }],
    showItem:false,
    showItemDetail:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  closeItemDetail () {
    this.setData({"showItem":false})
  },
  showItemDetail (e) {
    let index = e.currentTarget.dataset.id
    let showItemDetail = this.data.items[index]
    console.log(showItemDetail)
    this.setData({ showItemDetail})
    this.setData({ showItem: true })

  }
})