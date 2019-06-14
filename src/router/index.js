import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Search from '@/pages/Search/Search'
import Chat from '@/pages/Chat/Chat'
import Me from '@/pages/Me/Me'
import Hot from '@/pages/Home/Children/Hot/Hot'
import Dress from '@/pages/Home/Children/Dress'
import Ele from '@/pages/Home/Children/Ele'
import Female from '@/pages/Home/Children/Female'
import General from '@/pages/Home/Children/General'
import Mbaby from '@/pages/Home/Children/Mbaby'
import Phone from '@/pages/Home/Children/Phone'
import Shirt from '@/pages/Home/Children/Shirt'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            redirect:'/home'
        },{
            path:'/home',
            component:Home,
            children:[
                {
                    path:'hot',
                    component:Hot
                },
                {
                    path:'dress',
                    component:Dress
                },{
                    path:'ele',
                    component:Ele
                },{
                    path:'female',
                    component:Female
                },{
                    path:'general',
                    component:General
                },{
                    path:'mbaby',
                    component:Mbaby
                },{
                    path:'phone',
                    component:Phone
                },{
                    path:'shirt',
                    component:Shirt
                },{
                    path:'/home',
                    redirect:'/home/hot'
                }
            ]

        },{
            path:'/recommend',
            component:Recommend
        }, {
            path:'/search',
            component:Search
        }, {
            path:'/chat',
            component:Chat
        }, {
            path:'/me',
            component:Me
        }, {
            path:'*',
            redirect: '/'
        }


    ]
})
