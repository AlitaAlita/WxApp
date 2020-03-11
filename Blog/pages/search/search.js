// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [],
    isLoadingMore: false,
    currentPage: 0,
    info: '',
    query: ''
  },
/**
 * 加载搜索的文章
 */
  loadArticles: function (options){
 
  var that = this
  if (options.query != null) {
    this.setData({
      query: options.query
    })
   
    
  }
  console.log(that.data.query)
    wx.request({
      url: 'http://localhost:8080/api/search',
      method:"POST",
      data: { query: that.data.query },
      header: { "Content-Type": "application/x-www-form-urlencoded"},
      success: (res) =>{
        if (res.data.msg === 'success') {
          if (res.data.result.content.length == 0) {
            that.setData({
              isLoadingMore: false,
              info: "无更多博客"
            });
          }
          console.log(res.data.result.content)
          that.setData({
            articles:res.data.result.content
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '博客加载中...'
    })
    this.loadArticles(options)
    console.log(this.data.articles)
  
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 跳转到详情页面
   */
  postDetail: function (event) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + event.currentTarget.dataset.id,
    })
  },
})