<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <p>
            <!-- 使用 router-link 组件来导航. -->
            <!-- 通过传入'to'属性指定链接. -->
            <!-- <router-link> 默认会被渲染成一个<a>标签 -->
            <router-link to="/">Go to Index</router-link>
            <router-link to="/province">Go to Province</router-link>
            <router-link to="/shipping">Go to Shipping</router-link>
            <router-link to="/layout">Go to Layout</router-link>
        </p>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
