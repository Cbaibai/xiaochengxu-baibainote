Page({
  data: {
    showContent: "",
    isShow: false,
    downMove: 0,
    isChoosed: false,
    msgList: [

    ],
    emojiChar: [
      { "emoji": 0 },
      { "emoji": 1 },
      { "emoji": 2 },
      { "emoji": 3 },
      { "emoji": 4 },
      { "emoji": 5 },
      { "emoji": 6 },
      { "emoji": 7 },
      { "emoji": 8 },
      { "emoji": 9 },
      { "emoji": 10 },
      { "emoji": 11 },
      { "emoji": 12 },
      { "emoji": 13 },
      { "emoji": 14 },
      { "emoji": 15 },
      { "emoji": 16 },
      { "emoji": 17 },
      { "emoji": 18 },
      { "emoji": 19 },
      { "emoji": 20 },
      { "emoji": 21 },
      { "emoji": 22 },
      { "emoji": 23 },
      { "emoji": 24 },
      { "emoji": 25 },
      { "emoji": 26 },
      { "emoji": 27 },
      { "emoji": 28 },
      { "emoji": 29 },
      { "emoji": 30 },
      { "emoji": 31 },
      { "emoji": 32 },
      { "emoji": 33 },
      { "emoji": 34 },
      { "emoji": 35 },
      { "emoji": 36 },
      { "emoji": 37 },
      { "emoji": 38 },
      { "emoji": 39 },
      { "emoji": 40 },
      { "emoji": 41 },
      { "emoji": 42 },
      { "emoji": 43 },
      { "emoji": 44 },
      { "emoji": 45 },
      { "emoji": 46 },
      { "emoji": 47 },
      { "emoji": 48 },
      { "emoji": 49 },
      { "emoji": 50 },
      { "emoji": 51 },
      { "emoji": 52 },
      { "emoji": 53 },
      { "emoji": 54 },
      { "emoji": 55 },
      { "emoji": 56 },
      { "emoji": 57 },
      { "emoji": 58 },
      { "emoji": 59 },
      { "emoji": 60 },
      { "emoji": 61 },
      { "emoji": 62 },
      { "emoji": 63 },
      { "emoji": 64 },
      { "emoji": 65 },
      { "emoji": 66 },
      { "emoji": 67 },
      { "emoji": 68 },
      { "emoji": 69 },
      { "emoji": 70 },
      { "emoji": 71 },
      { "emoji": 72 },
      { "emoji": 73 },
      { "emoji": 74 },
      { "emoji": 75 },
      { "emoji": 76 },
      { "emoji": 77 },
      { "emoji": 78 },
      { "emoji": 79 },
      { "emoji": 80 },
      { "emoji": 81 },
      { "emoji": 82 },
      { "emoji": 83 },
      { "emoji": 84 },
      { "emoji": 85 },
      { "emoji": 86 },
      { "emoji": 87 },
      { "emoji": 88 },
      { "emoji": 89 },
      { "emoji": 90 },
      { "emoji": 91 },
      { "emoji": 92 },
      { "emoji": 93 },
      { "emoji": 94 },
      { "emoji": 95 },
      { "emoji": 96 },
      { "emoji": 97 },
      { "emoji": 98 },
      { "emoji": 99 },
      { "emoji": 100 },
      { "emoji": 101 },
      { "emoji": 102 },
      { "emoji": 103 },
      { "emoji": 104 },
      { "emoji": 105 },
      { "emoji": 106 },
      { "emoji": 107 },
      { "emoji": 108 },
      { "emoji": 109 },
      { "emoji": 110 },
      { "emoji": 111 },
      { "emoji": 112 },
      { "emoji": 113 },
      { "emoji": 114 },
      { "emoji": 115 },
      { "emoji": 116 },
      { "emoji": 117 },
      { "emoji": 118 },
      { "emoji": 119 },
      { "emoji": 120 },
      { "emoji": 121 },
      { "emoji": 122 },
      { "emoji": 123 },
      { "emoji": 124 },
      { "emoji": 125 },
      { "emoji": 126 },
      { "emoji": 127 },
      { "emoji": 128 },
      { "emoji": 129 },
      { "emoji": 130 },
      { "emoji": 131 },
      { "emoji": 132 },
      { "emoji": 133 },
      { "emoji": 134 }
    ]
  },

  send: function(e) {
    console.log("send")
    let str = this.data.showContent
    if(str.length == 0) {
      console.log("输入为空")
      return;
    }
    if(str.replace(/(^s*)|(s*$)/g, "").length == 0) {
      console.log("输入全为空字符")
      return;
    }
    let arr = this.data.msgList
    arr.push({"msg": str})
    if(true) {
      this.setData({
        msgList: arr,
        showContent: ""
      })
    }
  },

  emojiPanelToggle: function() {
    this.setData({
      isShow: !this.data.isShow,
      height: newHeight
    })
  },

  emojiTap: function() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  emojiChoosed: function(e) {
    let content = this.data.showContent + this.data.emojiChar[e.currentTarget.dataset.id].emoji
    this.setData({
      showContent: content,
      isChoosed: !this.data.isChoosed,
    })
  },

  inputFocus: function(e){
    this.setData({
        showContent: e.detail.value
    })
  }
})
