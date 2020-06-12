/**
 * 用户登录信息本地存储
 * @author Philip
 */
import { post } from './request.js'
import { auth, checkAuth } from './apis.js'

let checked = false

export function showAuthorizeLoading () {
    wx.showLoading({
        title: '正在登录',
        mask: true
    })
}

/**
 * 用户是否已授权
 * @return none
 */
export function authorized () {
    if (!checked) {
        checked = true
        showAuthorizeLoading()
        
        wx.checkSession({
            /**
             * 请求成功
             * @Hanlder
             */
            success: function (res) {
                loginRemote()
            },
            /**
             * 请求失败
             * @Hanlder
             */
            fail: function () {
                authorize()
            }
        })
    }
}

/**
 * 用户授权
 * @return none
 */
export function authorize () {
    wx.login({
        /**
         * 请求成功
         * @Hanlder
         */
        success: function (res) {
            loginRemote()
        },
        /**
         * 请求失败
         * @Hanlder
         */
        fail: function () {
            // wx.redirectTo({
            //     url: '/pages/login/login'
            // })

            wx.hideLoading()
        }
    })
}

export function loginRemote () {
    post(auth, { token: res.code }).then(function () {
        wx.redirectTo({
            url: '/pages/home/home'
        })
    }, function () {
        // wx.redirectTo({
        //     url: '/pages/login/login'
        // })
    }).finally(function () {
        wx.hideLoading()
    })
}