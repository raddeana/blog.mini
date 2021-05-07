/**
 * 用户登录信息本地存储
 * @author Philip
 */
import { post } from './request.js'
import { auth, checkAuth } from './apis.js'

/**
 * 用户是否已授权
 * @return {none}
 */
export function checkSession () {
    wx.checkSession({
        /**
         * 请求成功
         * @return {void}
         */
        success: function (res) {
            wx.switchTab({
                url: '/pages/home/home'
            });
        },
        /**
         * 请求失败
         * @return {void}
         */
        fail: function () {
            login()
        }
    })
}

/**
 * 用户授权
 * @return {none}
 */
export function login () {
    wx.login({
        /**
         * 请求成功
         * @return {void}
         */
        success: function (res) {
            loginRemote(res)
        },

        /**
         * 请求失败
         * @return {void}
         */
        fail: function () {
            wx.redirectTo({
                url: '/pages/login/login'
            })
        }
    })
}

export function loginRemote (res) {
    post(auth, { token: res.code }).then(function () {
        wx.redirectTo({
            url: '/pages/home/home'
        });
    }, function () {
        wx.redirectTo({
            url: '/pages/login/login'
        });
    })
}