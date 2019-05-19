<template>
    <div class="hot">
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide"><img src="../../imgs/swiper/s1.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s2.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s3.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s4.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s5.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s6.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s7.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s8.png" alt=""></div>
                <div class="swiper-slide"><img src="../../imgs/swiper/s9.png" alt=""></div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!--nav-->
        <hot-nav/>

    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import HotNav from './hotnav'
    export default {
        name: "Hot",
        components:{HotNav},
        mounted(){
            new Swiper('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay:true,
                pagination:{
                    el:'.swiper-pagination'
                }
            });
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .hot
        width 100%
        height 100%
        padding-top 43px
        background #f5f5f5
        .swiper-container
            width 100%
            img
                width 100%


</style>
