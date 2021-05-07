/**
 * 背景线程播放音频
 * @author Chenxiangyu
 */
let innerAudioContext = null;

worker.onMessage(function (res) {
    switch (res.type) {
        case 'play':
            playAudio();
            break;
        case 'continue':
            _continue();
            break;
        case 'pause':
            pause();
            break;
        case 'stop':
            stop();
            break;
    }
});

function play () {
    if (innerAudioContext) {
        innerAudioContext.destroy();
    }

    innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.src = res.audioSrc;
    innerAudioContext.volume = res.volume;
    innerAudioContext.loop = res.loop;

    innerAudioContext.onCanPlay(function () {
        innerAudioContext.play();
    });
}

function _continue () {
    innerAudioContext.play();
}

function stop () {
    innerAudioContext.destroy();
    innerAudioContext = null;
}

function pause () {
    innerAudioContext.pause();
}