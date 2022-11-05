<template>
    <Header></Header>
    <RouterView />
</template>

<script lang="ts" setup>
    import Header from '@/components/Header.vue';
</script>
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #fff;
        width: 100%;
        height: 100%;
        background-color: #1a1a1a;
    }
</style>
