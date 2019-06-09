<template>
    <div class="hot">
        <!-- Slider main container -->
        <div class="swiper-container" v-if="homecasual.length>0">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide"  v-for="casual in homecasual" :key="casual.id">
                    id为{{casual.id}}图片地址{{casual.image}}
                    <img :src="casual.image" alt="">
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <!--nav-->
        <hot-nav/>
        <!--hot shop list-->
        <hot-shop-list/>

    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import HotNav from './hotnav'
    import HotShopList from './HotShopList'
    import {mapState} from 'vuex'
    export default {
        name: "Hot",
        components:{HotNav,HotShopList},
        mounted(){
            //请求轮播数据
            this.$store.dispatch('reqHomeCasual');
            console.log(this.$store.state)

        },
        computed:{
            ...mapState(['homecasual'])
        },
        watch:{
            homecasual(){
                this.$nextTick(()=>{
                    new Swiper('.swiper-container', {
                        loop: true, // 循环模式选项
                        autoplay:true,
                        pagination:{
                            el:'.swiper-pagination'
                        }
                    });

                })
            }

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
            height 200px
            img
                width 100%
                height 200px


</style>
