// pages/yaoqing/yaoqing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showa: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    showb: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    selectData1: ['来源', '2', '3', '4', '5', '6'],//左下拉列表的数据
    selectData2: ['时间', '21', '31', '41', '51', '61'],//右下拉列表的数据
    indexa: 0,//选择的下拉列表下标
    indexb: 0//选择的下拉列表下标
  },

  // 点击下拉显示框
  selectTap1() {
    this.setData({
      showa: !this.data.showa
    });
  },
  selectTap2() {
    this.setData({
      showb: !this.data.showb
    });
  },
  // 点击下拉列表
  optionTap1(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      indexa: Index,
      showa: !this.data.showa
    });
  },
  optionTap2(e) {
    let Index = e.currentTarget.dataset.index;//获取点击的下拉列表的下标
    this.setData({
      indexb: Index,
      showb: !this.data.showb
    });
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