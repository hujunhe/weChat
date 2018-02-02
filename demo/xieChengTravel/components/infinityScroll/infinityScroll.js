// components/infinityScroll/infinityScroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataType: {
      type: String,
      value: ""
    },
    list: {
      type: Array,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 2
  },

  /**
   * 组件的方法列表
   */
  methods: {
    update() {
      let list = this.data.list
      //请求
      // wx.request({
      //   url: "test",
      //   data: {
      //     type: this.data.dataType,
      //     page: this.data.num
      //   },
      //   success: res => {
          this.setData({ num: this.data.num ++})
          list = list.concat(list)
          this.setData({ list: list })

      //   }
      // })
    }
  }
})
