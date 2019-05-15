<template>
    <div class="bottom-tab">

        <span class="tab-item">
            <img src="../../../static/img/icon_home.png" alt="">
            <span>首页</span>
        </span>
        <span class="tab-item">
            <img src="../../../static/img/icon_intro.png" alt="">
            <span>推荐</span>
        </span>
        <span class="tab-item">
            <img src="../../../static/img/icon_search.png" alt="">
            <span>搜索</span>
        </span>
        <span class="tab-item">
            <img src="../../../static/img/icon_chat.png" alt="">
            <span>聊天</span>
        </span>
        <span class="tab-item">
            <img src="../../../static/img/icon_mine.png" alt="">
            <span>个人中心</span>
        </span>
    </div>

</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .bottom-tab
        width 100%
        height 50px
        background-color: #fff
        position fixed
        left 0
        bottom 0
        z-index 999
        display flex
        .tab-item
            flex 1
            display flex
            flex-direction column
            align-items center
            justify-content center
            color #666
            font-size 14px
            img
                width 35%
                margin-bottom 2px


</style>
