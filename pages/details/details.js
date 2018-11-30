// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMore1: false,
    showMore2: false,
    showMore3:false
  },

  // 点击展开
  listToggle1:function(){
    console.log(this.data.showMore)
    this.setData({
      showMore1 : !this.data.showMore1
    })
  },
  listToggle2: function () {
    console.log(this.data.showMore)
    this.setData({
      showMore2: !this.data.showMore2
    })
  },
  listToggle3: function () {
    console.log(this.data.showMore)
    this.setData({
      showMore3: !this.data.showMore3
    })
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