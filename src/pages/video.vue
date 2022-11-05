<template>
    <h2 class="tit"> FLV </h2>
    <div class="video-box">
        <video id="myFlvVideo" ref="videoRef" autoplay controls></video>
    </div>
</template>
<script lang="ts" setup>
    import { nextTick, onMounted, onUnmounted, ref } from 'vue';
    import flvjs from 'flv.js';

    const videoRef = ref();
    const flvPlayer = ref();
    const createVideo = () => {
        if (flvjs.isSupported()) {
            flvPlayer.value = flvjs.createPlayer({
                type: 'flv',
                url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv' //你的url地址
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
