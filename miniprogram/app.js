/**
 * 微信小程序 App
 * @author Philip
 */
import './mixins/mixin';
import { checkSession } from './utils/authorize'

App({
    onLaunch () {
        checkSession()
    }
})
