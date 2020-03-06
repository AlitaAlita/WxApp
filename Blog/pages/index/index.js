//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   articles:[],
   isLoadingMore:false,
   currentPage:0,
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
      url: 'http://localhost:8080/api/blogs?page='+that.data.currentPage,
      success: (res) => {
        if (res.data.msg === 'success') {
          if (res.data.result.content.length==0){
            that.setData({
              isLoadingMore:false,
              info:"无更多博客"
            });
          }
          console.log(res.data.result.content)
          that.setData({
            articles: that.data.articles.concat(res.data.result.content)
          });
        } else {
          that.setData({
            info: '加载博客列表失败，请重试'
          })
        }
        wx.hideLoading()
      }
    })
   
  },
  onLoad: function () {
    wx.showLoading({
      title: '博客加载中...'
    })
    this.loadArticles()
  },
  onReachBottom: function () {
    this.data.currentPage++
    if (this.data.isLoadingMore && this.data.currentPage > 20) {
      // 最多只能加载20页
      this.data.isLoadingMore = false
      this.data.info = '无更多博客'
      return
    }
    this.data.isLoadingMore = true
    this.loadArticles()
  }
})
