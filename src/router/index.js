import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home';
import User from '../views/User';
import Main from '../views/Main';
import Mail from '../views/Mail';
import Other from '../views/Other';
import PageOne from '../views/Other/PageOne';
import PageTwo from '../views/Other/PageTwo';
Vue.use(VueRouter)
//1.创建路由
//2.将路由与组件进行映射
//3.创建router实例并挂在到根实例
const routes = [
    {
        path: '/',
        component: Main,
        redirect:'/home',
        children: [
            { path: 'home', component: Home },
            { path: 'user', component: User },
            {
                path: 'mail',
                component: Mail
            },
            {
                path: 'page1',
                component: PageOne
            },
            {
                path: 'page2',
                component: PageTwo
            },
        ]
    }
]
export default new VueRouter({
    routes
})
