//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   articles:[],
   isLoadingMore:false,
   currentPage:1,
   info:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  loadArticles: function (){
    var that = this
    wx.request({
      url: "http://localhost:8080/api/blogs",
      success: (res) => {
        if (res.data.msg === 'success') {
          console.log(res.data.result.content)
          that.setData({
            articles:res.data.result.content
          })
        } else {
          that.setData({
            info: '加载文章列表失败，请重试'
          })
        }
        wx.hideLoading()
      }
    })
   
  },
  onLoad: function () {
    wx.showLoading({
      title: '文章加载中...'
    })
    this.loadArticles()
  }
})
