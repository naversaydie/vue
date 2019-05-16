<template>
    <div class="home">
        <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options"
        >
        </ly-tab>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return{
                selectedId:0,//选中id
                items:[
                    {label: '热门'},
                    {label: '服饰'},
                    {label: '女装'},
                    {label: '百货'},
                    {label: '鞋包'},
                    {label: '母婴'},
                    {label: '手机'},
                    {label: '电器'},
                    {label: '设计'}
                ],
                options:{
                    activeColor:'#e9232c'
                }
            }
        }
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

    .home
        background red
        width 100%
        height 100%



</style>
