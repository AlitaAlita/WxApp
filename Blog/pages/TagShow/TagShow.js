// Page({
//   data: {
//     articles: [
//       {
//         'id': 1,
//         'name':'hello world',
//         'count': 1
//       },
//       {
//         'id': 2,
//         'name': 'java',
//         'count': 2
//       },
//       {
//         'id': 3,
//         'name': 'C++',
//         'count': 2
//       },
//       {
//         'id': 4,
//         'name': 'python',
//         'count': 2
//       },

//     ],
//     isLoadingMore: false,
//     currentPage: 1,
//     info: ''
//   }
// })
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles: [],
    isLoadingMore: false,
    currentPage: 1,
    info: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  loadArticles: function () {
    var that = this
    wx.request({
      url: "http://localhost:8080/api/types",
      success: (res) => {
        if (res.data.msg === 'success') {
          console.log(res.data.result.content)
          that.setData({
            articles: res.data.result.content
          })
        } else {
          that.setData({
            info: '加载分类列表失败，请重试'
          })
        }
        wx.hideLoading()
      }
    })

  },
  onLoad: function () {
    wx.showLoading({
      title: '分类加载中...'
    })
    this.loadArticles()
  }
})
