Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#333',
    list: [{
      pagePath: '/pages/home/home',
      iconPath: '/images/home.jpg',
      selectedIconPath: '/images/home.jpg',
      text: '首页'
    }, {
      pagePath: '/pages/user/user',
      iconPath: '/images/user.jpg',
      selectedIconPath: '/images/user.jpg',
      text: '我的'
    }]
  },
  methods: {
    switchTab (e) {
      let data = e.currentTarget.dataset;
      let url = data.path;
      
      wx.switchTab({ url });

      this.setData({
        selected: data.index
      });
    }
  }
})