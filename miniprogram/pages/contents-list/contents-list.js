/**
 * 内容列表
 * @author Philip
 */
import { createData } from '../../utils/createData';

const createRecycleContext = require('miniprogram-recycle-view');
let recycleContext = null;

Page({
	data: {
        finished: false,
        loading: false,
		recycleList: [],
        navigationBarOptions: {
            bgTextStyle: 'dark',
            scrollTop: '200rpx',
            bgColor: '#ff0000',
            bgColorTop: '#00ff00',
            bgColorBottom: '#0000ff',
            pageTitle: '内容中心',
            frontColor: '#333',
            backgroundColor: '#efefef',
            rootFontSize: '40rpx'
        }
	},
    onLoadData () {
        if (!this.loading) {
            this.loading = true;

            setTimeout(() => {
                let data = createData();
                console.log(` -------------- >>>> ${data.length}`);

                recycleContext.append(data);
                this.loading = false;
            }, 3000);
        }
    },

    /**
     * @Hook
     */
    onReady () {
        recycleContext = createRecycleContext({
            id: 'recycle-id',
            dataKey: 'recycleList',
            page: this,
            itemSize: function() {
                return {
                    height: recycleContext.transformRpx(340),
                    width: recycleContext.transformRpx(730)
                };
            }
        });

        this.onLoadData();
    }
})