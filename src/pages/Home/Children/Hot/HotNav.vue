<template>
    <div class='hot_nav'>
        <div class="hot_nav_content">
            <div class="nav_content_inner">
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a class="inner_item">
                    <img src="../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
            </div>
        </div>
        <div class="hot_nav_bottom">
            <div class="hot_nav_bottom_inner"></div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "HotNav"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot_nav
        width 100%
        height  180px
        position relative
        background #fff
        padding-bottom 10px
        .hot_nav_content
            width 100%
            overflow-x scroll
            .nav_content_inner
                width 720px
                height 180px
                display flex
                flex-wrap: wrap
                .inner_item
                    width 90px
                    height 90px
                    display flex
                    flex-direction column
                    justify-content center
                    align-items center
                    color: #666
                    font-size 16px
                    img
                        width 50%
                        margin-bottom 5px


        .hot_nav_content::-webkit-scrollbar
            display none
        .hot_nav_bottom
            width 100px
            height 2px
            background #ccc
            position: absolute
            left 50%
            margin-left -50px
            bottom 8px
            .hot_nav_bottom_inner
                width 50px
                height 100%
                background orange


</style>
