/**
 * 列表项共用行为
 * @author Chenxiangyu
 */

module.exports = Behavior({
    /**
     * 页面创建时执行
     * @return {void}
     */
    attached: function () {
        console.info('Page loaded!')
    },
    /**
     * 页面销毁
     * @return {void}
     */
    detached: function () {
        console.info('Page unloaded!')
    }
})