<template>
<div>
    <div>
        <div>
            <el-row>
                <el-col :span="2" class="level1">
                    <el-menu default-active="0" class="el-menu-vertical-demo" background-color="#545c64" text-color="ghostwhite" active-text-color="#ffd04b">
                        <img src="@/assets/image/dl2.png" class="img" />
                        <el-menu-item v-for="(item, index) in title1" :key="index" @click="type=index+1" :index="index.toString()">
                            <span slot="title">{{item}}</span>
                        </el-menu-item>

                        <div class="xiaoxi mgtop">
                            <i class="el-icon-message-solid col-hui mg10"></i>
                            <el-badge :value="100" :max="50" class="item">
                                <span class="col-hui2 mg5">消息</span>
                            </el-badge>
                        </div>
                        <div class="xiaoxi" @click="open">
                            <i class="el-icon-switch-button col-hui mg3 mg210"></i>
                            <span class="col-hui2">退出</span>
                        </div>
                        <div class="xiaoxi">
                            <i class="el-icon-s-custom col-hui mg3 mg210"></i>
                            <span class="col-hui2">admin</span>
                        </div>
                    </el-menu>
                </el-col>
                <el-col :span="3" class="level2">
                    <level2 :type="type"></level2>
                </el-col>
                <el-col :span="19" class="level3">
                    <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </div>
</div>
</template>

<script>
import level2 from "@/components/level2/level2.vue";
export default {
    data() {
        return {
            tabPosition: "left",
            type: "",
            con: true,
            title1: ['工作台', '仓库管理', '业务管理', '财务管理', '报表管理', '基础信息', '系统设置']
        };
    },
    created() {
        this.type = this.$route.query.type;
        this.beforeRouteEnter();
    },
    components: {
        level2,
    },
    methods: {
        open() {
            this.$confirm("确定要退出登录吗？", "确认提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                })
                .then(() => {
                    this.$message({
                        type: "success",
                        message: "退出成功!",
                    });
                    sessionStorage.removeItem('isLogin')
                    this.$router.push({
                        path: "/login",
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消退出",
                    });
                });
        },
    },
    // beforeRouteEnter(to, from, next) {
    //     console.log('进入路由')
    //     if (to.name != 'login') {
    //         let user = sessionStorage.getItem('token');
    //         if (user == null) {
    //             next('/login')
    //         } else if (user != null) {
    //             next()
    //         } else {
    //             next(false)
    //         }
    //     } else {
    //         next()
    //     }
    // }
};
</script>

<style scoped>
.mgtop {
    margin-top: 140px;
}

.mg5 {
    margin-left: 5px;
}

.mg10 {
    margin-left: 28px;
}

.mg210 {
    margin-right: 5px;
}

.mg3 {
    margin-left: 28px;
}

.col-hui2 {
    color: gainsboro;
}

.ft-15 {
    font-size: 15px;
}

.xiaoxi {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.col-hui {
    color: gainsboro;
    font-size: 20px;
}

.item {
    margin-top: 10px;
    margin-right: 40px;
    width: 40px;
}

.level1 {
    height: 752px;
    background-color: rgb(84, 92, 100);
    box-sizing: border-box;
}

.level2 {
    height: 752px;
    background-color: rgba(234, 237, 241, 1);
    box-sizing: border-box;
}

.level3 {
    background-color: gainsboro;
    height: 752px;
    overflow: auto;
}

.img {
    width: 50%;
    height: 70%;
    padding-left: 40px;
    padding-top: 20px;
}

.el-menu-item {
    text-align: right;
    padding: 0 40px;
}

.is-active {
    font-weight: bolder;
    color: white !important;
    text-shadow: 0px 0px 10px white;
    background-color: #202020be !important;
}

.el-button {
    background-color: #545c64 !important;
    color: gainsboro;
    border: 0;
}
</style>
