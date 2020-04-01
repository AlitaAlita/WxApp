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
  onLoad: function (options = {}) {
    this.data.articles.id = options.id
    console.log(this.data.articles.id)
    this.loadArticles()
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
      url: `http://alita.网址/api/types/${that.data.articles.id}`,
      success: (res) => {
        if (res.data.msg === 'success') {
          if (res.data.result.content.length == 0) {
            that.setData({
              isLoadingMore: false,
              info: "无更多博客"
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

  postDetail: function (event) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + event.currentTarget.dataset.id,
    })
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
  },
  
  
})
