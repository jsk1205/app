<template>
    <div class="tops">
        <div class="top-left">
            <el-button icon="el-icon-menu" size="mini" @click="isColl"></el-button>
            <div class="top-text">首页</div>
        </div>
        <div class="top-right">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../assets/pan.jpg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        isColl(){
            this.$store.commit("collaspeMenu")
        }
    }
}
</script>
<style lang="less" scoped>
.tops{
    padding: 0 20px;
    height: 60px;
    background: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-left{
        display: flex;
        color: #fff;
        .top-text{
            margin-left: 10px;
            font-size:14px;
            line-height: 30px;
        }
    }
    .top-right{
        .el-dropdown{
            img{
                width: 36px;
                height: 36px;
                border-radius: 50%;
            }
        }
        .el-dropdown-link {
            cursor: pointer;
            color: #409EFF;
        }
        .el-icon-arrow-down {
            font-size: 12px;
        }
    }
}
</style>