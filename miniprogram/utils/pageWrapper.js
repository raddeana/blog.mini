/**
 * 页面包装器
 * @author 
 */
import { authorized } from './authorize'

export default function (page) {
    let onLoad = page.onLoad

    page.onLoad = function () {
        authorized()

        if (onLoad && typeof onLoad === 'function') {
            onLoad.call(this, arguments)
        }
    }

    return page
}