// pages/RichText/index.js
Page({
  data: {
    scanResult: ""
  },
  onLoad: function() {

  },
  scan: function() {
    wx.scanCode({
      success: (res) => {
        console.log("扫码结果: " + res.result);
        this.setData({
          scanResult: res.result
        })
      },
      fail: (res) => {
        console.log(res);
      }
    })
  },

  toast: function(){
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 2000,
      mask: true
    })
  }
})
