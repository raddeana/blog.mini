/**
 * 首页
 * @author Philip
 */
import { aliOssBath } from '../../constants/config';

Page({
    data: {
        swiperItems: [{
        	src: `${aliOssBath}/images/illustration/illustration-dandelion.jpg`,
        	type: 'img'
        }, {
        	src: `${aliOssBath}/images/illustration/illustration-hack.jpg`,
        	type: 'img'
        }, {
        	src: `${aliOssBath}/vedios/mov_bbb.mp4`,
        	type: 'vedio'
        }],
        portals: [{
            pic: `${aliOssBath}/images/illustration/illustration-dandelion.jpg`,
            title: '内容中心',
            backgroundColor: '#b9c561',
            path: '/pages/contents-list/contents-list'
        }, {
            pic: `${aliOssBath}/images/illustration/illustration-hack.jpg`,
            title: 'Hack 盒子',
            backgroundColor: '#333333',
            path: '/pages/hack-box/hack-box'
        }, {
            pic: `${aliOssBath}/images/illustration/illustration-3d.jpg`,
            title: 'Webgl',
            backgroundColor: '#005e77',
            path: '/pages/webgl/webgl'
        }, {
            pic: `${aliOssBath}/images/illustration/illustration-map.jpg`,
            title: '地图',
            backgroundColor: '#32353e',
            path: '/map/pages/index/index'
        }, {
            pic: `${aliOssBath}/images/illustration/illustration-music.jpg`,
            title: '音乐',
            backgroundColor: '#009688',
            path: '/pages/musics/musics'
        }],
        indicatorDots: true,
        vertical: false,
        autoplay: false
    }
})