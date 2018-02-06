// components/hotelRoomSelect/hotelRoomSelect.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataList:null
  },

  /**
   * 组件的初始数据
   */
  data: {
    show:false,
    index_choose:null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showListFn (e) {
      let index = e.target.dataset.index
      let buff = !this.data.show
      this.setData({ show: buff, index_choose:index})
    }
  }
})
