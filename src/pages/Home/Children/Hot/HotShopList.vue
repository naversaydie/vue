<template>
    <div class='shop-container'>
        <ul class="shop-list">
            <li class="shop-list-item">
                <img src="../../imgs/shoplist/shop_item.png" alt="" width="100%">
                <h4 class="list-item-title">【凉爽一夏】夏凉被空调被春秋夏被儿童被子学生被芯单双人薄被子</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥37.7</span>
                    <span class="item-count">已拼10万+件</span>
                    <span class="item-user">
                        <img src="../../imgs/shoplist/user1.jpg" alt="">
                        <img src="../../imgs/shoplist/user2.jpg" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单</button>
                    </span>

                </div>
            </li>
            <li class="shop-list-item">
                <img src="../../imgs/shoplist/shop_item.png" alt="" width="100%">
                <h4 class="list-item-title">【凉爽一夏】夏凉被空调被春秋夏被儿童被子学生被芯单双人薄被子</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥37.7</span>
                    <span class="item-count">已拼10万+件</span>
                    <span class="item-user">
                        <img src="../../imgs/shoplist/user1.jpg" alt="">
                        <img src="../../imgs/shoplist/user2.jpg" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单</button>
                    </span>

                </div>
            </li>
            <li class="shop-list-item">
                <img src="../../imgs/shoplist/shop_item.png" alt="" width="100%">
                <h4 class="list-item-title">【凉爽一夏】夏凉被空调被春秋夏被儿童被子学生被芯单双人薄被子</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥37.7</span>
                    <span class="item-count">已拼10万+件</span>
                    <span class="item-user">
                        <img src="../../imgs/shoplist/user1.jpg" alt="">
                        <img src="../../imgs/shoplist/user2.jpg" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单</button>
                    </span>

                </div>
            </li>

        </ul>

    </div>
</template>

<script>
    export default {
        name: "HotShopList"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
    .shop-container
        margin-bottom 50px
        background #f5f5f5
        .shop-list
            .shop-list-item
                margin-bottom 10px
                background-color #fff
                display flex
                flex-direction column
                .list-item-title
                    line-height 22px
                    width 94%
                    margin-left 3%
                    height 44px
                    overflow hidden
                .list-item-bottom
                    margin 10px 0
                    display flex
                    flex-direction row
                    justify-content space-around
                    align-items center
                    .item-price
                        text-align center
                        font-size 18px
                        font-weight bold
                        color red
                        flex:1
                    .item-count
                        flex 2
                        font-size 12px
                        color #ccc
                    .item-user
                        display flex
                        justify-content center
                        align-items center
                        flex:1
                        img
                            width 40px
                            border-radius 50%
                        img:nth-child(2)
                            margin-left -6px
                    .item-buy
                        flex 2
                        button
                            width 80%
                            border none
                            height 34px
                            font-size 15px
                            color #fff
                            display flex
                            justify-content center
                            align-items center
                            margin-left 10px
                            background red
                            border-radius 8px


</style>
