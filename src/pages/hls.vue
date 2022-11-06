<template>
    <h2 class="tit"> Hls </h2>
    <div class="video-box">
        <video ref="videoRef" controls></video>
    </div>
</template>
<script lang="ts" setup>
    import { nextTick, onMounted, onUnmounted, ref } from 'vue';
    import Hls from 'hls.js';

    const videoRef = ref();
    const hlsPlayer = ref();
    const videoSrc =
        'http://219.151.31.38/liveplay-kk.rtxapp.com/live/program/live/hnwshd/4000000/mnf.m3u8';
    const createVideo = () => {
        if (videoRef.value.canPlayType('application/vnd.apple.mpegurl')) {
            videoRef.value.src = videoSrc;
            videoRef.value.addEventListener('loadedmetadata', function () {
                videoRef.value.play();
            });
        } else if (Hls.isSupported()) {
            hlsPlayer.value = new Hls();
            hlsPlayer.value.loadSource(videoSrc);
            hlsPlayer.value.attachMedia(videoRef.value);
            hlsPlayer.value.on(Hls.Events.MANIFEST_PARSED, function () {
                const res = hlsStart();
                if (res) {
                    res.then(() => {}).catch(() => {
                        alert('请点击播放按钮开始播放视频');
                    });
                }
            });
        }
    };
    //开始
    const hlsStart = () => {
        return videoRef.value.play();
    };
    //暂停
    const hlsPause = () => {
        videoRef.value.pause();
    };
    //销毁
    const hlsDestroy = () => {
        hlsPlayer.value.destroy();
        hlsPlayer.value = null;
    };
    onMounted(() => {
        nextTick(() => {
            createVideo();
        });
    });
    onUnmounted(() => {
        hlsDestroy();
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
