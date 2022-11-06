<template>
    <h2 class="tit"> FLV </h2>
    <div class="video-box">
        <video ref="videoRef" controls></video>
    </div>
</template>
<script lang="ts" setup>
    import { nextTick, onMounted, onUnmounted, ref } from 'vue';
    import flvjs from 'flv.js';

    const videoRef = ref();
    const flvPlayer = ref();
    const videoSrc = 'http://pili-live-hdl.qhmywl.com/dsdtv/4677cf6625ce01b236bbb58f99094d51.flv';
    const createVideo = () => {
        if (flvjs.isSupported()) {
            flvPlayer.value = flvjs.createPlayer({
                type: 'flv',
                url: videoSrc
            });
            flvPlayer.value.attachMediaElement(videoRef.value);
            flvPlayer.value.load();
            const res = flvStart();
            if (res) {
                res.then(() => {}).catch(() => {
                    alert('请点击播放按钮开始播放视频');
                });
            }
        }
    };
    //开始
    const flvStart = () => {
        return flvPlayer.value.play();
    };
    //暂停
    const flvPause = () => {
        flvPlayer.value.pause();
    };
    //销毁
    const flvDestroy = () => {
        flvPause();
        flvPlayer.value.unload();
        flvPlayer.value.detachMediaElement();
        flvPlayer.value.destroy();
        flvPlayer.value = null;
    };
    onMounted(() => {
        nextTick(() => {
            createVideo();
        });
    });
    onUnmounted(() => {
        flvDestroy();
    });
</script>
<style scoped>
    .tit {
        font-size: 20px;
        font-weight: 500;
    }
    .video-box {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px;
    }
    video {
        width: 800px;
        height: 500px;
    }
</style>
