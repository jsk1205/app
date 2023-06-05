<template>
    <el-menu
    :default-active="activeMenu"
    mode="vertical"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    @select="handleSelect"
    :collapse="isCollapse"
    router
    >
        <h3>{{isCollapse ? '后台':'后台管理系统'}}</h3>
        <template v-for="(item, index) in menuData" >
            <template v-if="item.children">
                <el-submenu :key="index" :index="index+''">
                    <template slot="title">
                        <i :class="`el-icon-${item.icon}`"></i>
                        <span slot="title">{{ item.label }}</span>
                    </template>
                    <el-menu-item-group v-for="(items,ind) in item.children" :key="ind">
                        <el-menu-item :index="items.path">{{items.label}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </template>
            <template v-else>
                <el-menu-item :key="index" :index="item.path">
                    <i :class="`el-icon-${item.icon}`"></i>
                    <span slot="title">{{item.label}}</span>
                </el-menu-item>
            </template>
        </template>
    </el-menu>
</template>
<script>
export default {
    data(){
        return{
          menuData:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'s-home',
                url:"Home/Home"
            },
            {
                path:'/mail',
                name:'mail',
                label:'商品管理',
                icon:'video-play',
                url:"MailManage/MailManage"
            },
            {
                path:'/user',
                name:'user',
                label:'用户管理',
                icon:'user',
                url:"UserManage/UserManage"
            },
            {
                name:'other',
                label:'其他',
                icon:'location',
                children:[
                    {
                        path:'/page1',
                        name:'page1',
                        label:'页面1',
                        icon:'setting',
                        url:"Other/PageOne"
                    },
                    {
                        path:'/page2',
                        name:'page2',
                        label:'页面2',
                        icon:'setting',
                        url:"Other/PageTwo"
                    }
                ]
            },
          ],
          //当前激活的菜单
          activeMenu:'/',
        //   isCollapse: false
    
        }
    },
    computed:{
        isCollapse(){
            return this.$store.state.menu.isCollapse;
        }
    },
    methods:{
        handleSelect(key, keyPath) {
          
        }
    },
}
</script>
<style lang="less" scoped>
.el-menu{
    width: 100%;
    height: 100vh;
    h3{
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>
