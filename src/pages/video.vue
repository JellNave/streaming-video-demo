<template>
    <h2 class="tit"> Video </h2>
    <div class="video-box">
        <video ref="videoRef"></video>
    </div>
</template>
<script lang="ts" setup>
    import { nextTick, onMounted, onUnmounted, ref } from 'vue';
    import Video from 'video.js';
    import 'video.js/dist/video-js.css';

    const videoRef = ref();
    const videoPlayer = ref();
    const videoSrc =
        'http://219.151.31.38/liveplay-kk.rtxapp.com/live/program/live/hnwshd/4000000/mnf.m3u8';
    const createVideo = () => {
        videoPlayer.value = Video(
            videoRef.value,
            {
                controls: true,
                sources: [
                    {
                        src: videoSrc
                    }
                ],
                preload: 'auto',
                width: '500px',
                height: '500px'
            },
            () => {
                console.log('播放器创建完成');
            }
        );
        const res = videoStart();
        if (res) {
            res.then(() => {}).catch(() => {
                alert('请点击播放按钮开始播放视频');
            });
        }
    };

    //开始
    const videoStart = () => {
        return videoPlayer.value.play();
    };
    //暂停
    const videoPause = () => {
        videoPlayer.value.pause();
    };
    //销毁
    const flvDestroy = () => {
        videoPause();
        videoPlayer.value.dispose();
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
    @import 'video.js/dist/video-js.css';
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
        width: 100%;
        height: 100%;
    }
</style>
