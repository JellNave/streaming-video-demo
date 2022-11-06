<template>
    <div class="header">
        <div class="title">流视频</div>
        <div class="menu">
            <div v-for="(item, index) in menu" :key="index" class="menu-item">
                <router-link :to="item.link">{{ item.title }}</router-link></div
            >
        </div>
    </div>
</template>

<script setup lang="ts">
    const menu = [
        {
            title: 'INDEX',
            link: '/'
        },
        {
            title: 'FLV',
            link: '/flv'
        },
        {
            title: 'HLS',
            link: '/hls'
        },
        {
            title: 'VIDEO',
            link: '/video'
        },
        {
            title: 'EASYPLAYER',
            link: '/easyplayer'
        }
    ];
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 16px;
        color: var(--font-color);
        box-sizing: border-box;
        border-bottom: 1px solid #363636;
    }
    .title {
        font-size: 20px;
        font-weight: 600;
    }
    .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    a {
        text-decoration: none;
        color: var(--font-color);
    }
    :deep(.router-link-active) {
        color: var(--theme-color);
    }
    .menu-item {
        margin-left: 12px;
        cursor: pointer;
    }
</style>
