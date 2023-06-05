<template>
    <div class="cont">
        <el-container>
            <el-aside style="width:auto">
                <left-aside></left-aside>
            </el-aside>
            <el-container class="elcontain">
                <right-top></right-top>
                <el-main>
                    <!-- 子路由出口 -->
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import leftAside from './../components/aside.vue';
import rightTop from './../components/top.vue';
export default{
    components:{
        leftAside,
        rightTop
    },
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.cont{
    width: 100%;
    height: 100%;
    .el-container{
        width: 100%;
        height: 100%;
        display: flex;
        .el-aside{
            width: 200px;
            height: 100%;
            background-color: #D3DCE6;
            color: #333;
        }
        .elcontain{
            flex: 1;
            height: auto;
            display: flex;
            flex-direction: column;
            .el-header{
                height: 80px;
            }
            .el-main{
                flex: 1;
                color: #333;
                padding: 0;
            }
        }
    }
}
</style>