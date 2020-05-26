/**
 * 请求
 * @author Philip
 */

const defaultOptions = {
    header: {
        "content-type": "application/json"
    },
    timeout: 300000,
    method: 'GET',
    dataType: 'json',
    responseType: 'text'
}

/**
 * 请求
 * @parma {string} 请求的url
 * @parma {object} 请求数据
 * @parma {object} 请求配置
 * @return none
 */
export function request (url, data, options) {
    return new Promise(function (resolve, reject) {
        const requestConfig = {
            url: url,
            data: data,
            success: function (res) {
                resolve(res)
            },
            fail: function () {
                reject()
            }
        }

        wx.request({ ... requestConfig, ... defaultOptions, ... options })
    })

}

/**
 * post 请求
 * @parma {string} 请求的url
 * @parma {object} 请求数据
 * @parma {object} 请求配置
 * @return none
 */
export function post (url, data, options) {
    return request(url, data, options)
}

/**
 * get 请求
 * @parma {string} 请求的url
 * @parma {object} 请求参数
 * @parma {object} 请求配置
 * @return none
 */
export function get (url, params, options) {
    return request(url, params, options)
}