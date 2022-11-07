<template>
    <h2 class="tit"> EASY PLAYER </h2>
    <p>vue3使用存在问题</p>
    <a
        href="https://github.com/yhb980709/vue-easyplayer-demo"
        target="_blank"
        rel="noopener noreferrer"
        >vue-easyplayer-demo</a
    >
    <div ref="videoRef" class="video-player"> </div>
</template>

<script lang="ts" setup>
    // import EasyPlayer from '@easydarwin/easyplayer';
    import { onMounted, nextTick, ref } from 'vue';
    const videoRef = ref();
    const videSrc =
        'http://219.151.31.38/liveplay-kk.rtxapp.com/live/program/live/hnwshd/4000000/mnf.m3u8';
    onMounted(() => {
        nextTick(() => {
            videoRef.value.innerHTML = `<easy-player
            id="easy-player"
            live="false"
      stretch="true"
        ></easy-player>`;
            nextTick(() => {
                const player = document.querySelector('#easy-player');
                (player as HTMLElement).setAttribute('video-url', videSrc);
            });
        });
    });
</script>

<style>
    .video-player {
        width: 500px;
        height: 500px;
    }
    /* #easy-player {
        width: 100%;
        height: 100%;
    } */
</style>
