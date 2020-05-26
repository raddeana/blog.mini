/**
 * 微信小程序 App
 * @author Philip
 */
import { authorized } from './utils/authorize'

App({
    /**
     * 小程序初始化
     * @Hook
     */
    onLaunch () {
        wx.showLoading()

        authorized().then(function () {
            wx.switchTab({
                url: 'pages/home/home'
            })
        }).finally(function () {
            wx.hideLoading()
        })
    }
})
