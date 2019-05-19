<template>
    <div class="home">
        <ly-tab class='fixed' v-model="selectedId" :items="items" :options="options" @change="handleChange"/>
        <router-view/>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                selectedId:0,//选中id
                items:[
                    {label: '热门',path:'hot'},
                    {label: '服饰',path:'dress'},
                    {label: '女装',path:'female'},
                    {label: '百货',path:'general'},
                    {label: '鞋包',path:'shirt'},
                    {label: '母婴',path:'mbaby'},
                    {label: '手机',path:'phone'},
                    {label: '电器',path:'ele'}
                ],
                options:{
                    activeColor:'#e9232c',
                }
            }
        },


        methods:{
            handleChange(item,val){
                console.log(item,val)
                this.$router.replace(item.path)
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

    .home
        background red
        width 100%
        height 100%
        .fixed
            position fixed
            top 0
            left 0
            z-index 998
</style>
