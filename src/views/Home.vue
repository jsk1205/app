<template>
    <div class="home-cont">
        <div class="cont-top">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="cont">
            <el-row>
                <el-col :span="6">
                    <div class="box-t">
                        <el-card class="box-card">
                            <div class="box-top">
                                <img src="../assets/pan.jpg" alt="">
                                <div class="box-top-ri">
                                    <div class="box-name">admin</div>
                                    <div>超级管理员</div>
                                </div>
                            </div>
                            <div class="box-line"></div>
                            <div class="box-time">
                                <div class="time-div">
                                    <div>上次登录时间</div>
                                    <div>2023-06-01</div>
                                </div>
                                <div class="time-div">
                                    <div>上次登录地点</div>
                                    <div>北京</div>
                                </div>
                            </div>
                        </el-card>
                    </div>
                    <div class="box-b">

                    </div>
                </el-col>
                <el-col :span="18">
                   <div class="right-num">

                   </div>
                   <div class="right-line">

                   </div>
                   <div class="right-chart">

                   </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import { getData } from '../api'
export default{
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
.home-cont{
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #e6eaef;
    .cont-top{
    }
    .cont{
        flex: 1;
        margin-top: 10px;
        padding-top: 10px;
        .el-row{
            width: 100%;
            height: 100%;
            display: flex;
            .el-col-6{
                display: flex;
                flex-direction: column;
                .box-t{
                    .el-card{
                        .box-top{
                            display: flex;
                            align-items: center;
                            padding: 0 20px;
                            img{
                                width: 100px;
                                height: 100px;
                                border-radius: 50%;
                            }
                            .box-top-ri{
                                font-size: 16px;
                                margin-left: 30px;
                                .box-name{
                                font-size: 24px;
                                color: #333;
                                }
                                div{
                                color: #ccc;
                                }
                            }
                        }
                        .box-line{
                            width: 98%;
                            height: 1px;
                            margin: 10px 0;
                            background: #ccc;
                        }
                        .box-time{
                            .time-div{
                                height: 40px;
                                line-height: 40px;
                                display: flex;
                                div{
                                    font-size: 16px;
                                    color: #ccc;   
                                }
                                div:nth-of-type(2){
                                    color: #333;
                                    margin-left: 50px;
                                }
                            }
                        }
                        
                    }
                }
                .box-b{
                    flex: 1;
                    margin-top: 20px;
                    background: sandybrown;
                }
            }
            .el-col-18{
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                .right-num{
                    height: 25%;
                    background: rgb(180, 111, 80);
                }
                .right-line{
                    margin: 20px 0;
                    height: 35%;
                    background: saddlebrown;
                }
                .right-chart{
                    height: 40%;
                    background: salmon;
                }
            }
        }
    }
}
::v-deep .el-card__body{
    padding: 10px;
}
</style>