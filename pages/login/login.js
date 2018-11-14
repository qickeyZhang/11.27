// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt: "获取验证码",
    currentTime: 60, //倒计时
    disabled: false, //按钮是否禁用
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

  },
  // 商户注册
  new_page:function(){
    wx.navigateTo({
      url: '../register/register'
    })
  },
  //获取验证码按钮
  bindButtonTap: function () {
    var that = this;
    that.setData({
      disabled: true, //只要点击了按钮就让按钮禁用 （避免正常情况下多次触发定时器事件）
    })
    var currentTime = that.data.currentTime //把手机号跟倒计时值变例成js值
    //设置一分钟的倒计时
    var interval = setInterval(function () {
      currentTime--; //每执行一次让倒计时秒数减一
      that.setData({
        txt: currentTime + 's重发', //按钮文字变成倒计时对应秒数
      })
      //如果当秒数小于等于0时 停止计时器 且按钮文字变成重新发送 且按钮变成可用状态 倒计时的秒数也要恢复成默认秒数 即让获取验证码的按钮恢复到初始化状态只改变按钮文字
      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          txt: '重新发送验证码',
          currentTime: 60,
          disabled: false,
        })
      }
    }, 1000)
  }
})