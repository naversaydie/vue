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
            <div class="hot_nav_bottom_inner" :style="setBarW"></div>
        </div>



    </div>
</template>

<script>
    export default {
        name: "HotNav",
        data(){
            return {
                screenW:window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth,
                contentW:720,
                bgBarW:100,
                innerW:0,
                startX:0,
                endFlag:0,
                moveWidth:0


            }
        },
        mounted(){
            this.innerW = this.screenW/this.contentW * this.bgBarW
            this.bindEvent()

        },
        computed:{
            //设置滚动条长度
            setBarW(){
                return {
                    width:`${this.innerW}px`,
                    left:`${this.moveWidth}px`
                }
            }
        },
        methods:{
            bindEvent(){
                this.$el.addEventListener('touchstart',this.handleTouchStart,false)
                this.$el.addEventListener('touchmove',this.handleTouchMove,false)
                this.$el.addEventListener('touchend',this.handleTouchEnd,false)
            },
            //触摸事件
            handleTouchStart(e){
                let touch = e.touches[0];
                this.startX = Number(touch.pageX)
                console.log(touch)
            },
            //拖动事件
            handleTouchMove(e){
                let touch = e.touches[0];
                let moveWidth =Number(touch.pageX)-this.startX;
                this.moveWidth = -(moveWidth/this.contentW*this.bgBarW - this.endFlag)
                if(this.moveWidth<=0){
                    this.moveWidth = 0;

                }else if(this.moveWidth>=this.bgBarW - this.innerW){
                    this.moveWidth = this.bgBarW - this.innerW
                }

            },
            //结束触摸事件
            handleTouchEnd(){
                this.endFlag = this.moveWidth

            }





        }


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
                position absolute
                height 100%
                background orange


</style>
