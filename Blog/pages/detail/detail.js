// pages/detail/detail.js
Page({

  /**
 * 页面的初始数据
 */
  data: {
    article: {
      id: 1,
      title: '测试文章标题',
      author: '学院君',
      post_date: '2019-01-10',
      content: [
        {
          name: 'p',
          attrs: {
            class: 'p_class'
          },
          children: [{
            type: 'node',
            name: 'img',
            attrs: {
              class: 'img_class',
              src: 'https://statics.laravelacademy.org/wp-content/uploads/2015/07/Laravel学院Logo.png'
            }
          }]
        },
        {
          name: 'h3',
          attrs: {
            class: 'h3_class',
          },
          children: [{
            type: 'text',
            text: '愿景'
          }]
        },
        {
          name: 'p',
          attrs: {
            class: 'p_class'
          },
          children: [{
            type: 'text',
            text: 'Laravel框架是一个为Web工匠准备的PHP框架，让你从意大利面条一样杂乱的代码中解放出来，从而快速构建简洁、优雅、功能强大的web应用。'
          }]
        },
        {
          name: 'p',
          attrs: {
            class: 'p_class'
          },
          children: [{
            type: 'text',
            text: 'Laravel学院致力于提供优质的Laravel中文学习资源，帮助你快速上手，从入门到精通，让这个世界上最流行的PHP框架在中国拥有更多拥趸。'
          }]
        },
        {
          name: 'p',
          attrs: {
            class: 'p_class'
          },
          children: [{
            type: 'text',
            text: '这是一个纯粹的关于学习与分享、知识与技能的平台，学院君抛个砖，希望大家相互帮助，共同进步，让学习与进取者不再孤单。'
          }]
        }
      ],
      views: 1000,
      votes: 100
    },
    info: ''
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

  }
})