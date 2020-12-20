/**
 * 微信小程序 App
 * @author Philip
 */
import { checkSession } from './utils/authorize'

App({
    onLoad () {
        checkSession()
    }
})
