<template>
<div class="dl">
    <div class="dlz">
        <div class="dlz-1 flex">
            <img src="../assets/image/dl2.png" alt />
            <div class="dlz-1-1">
                <p>和智云仓储管理系统</p>
                <p>HeZi Cloud Warehouse Management System</p>
            </div>
        </div>
        <div class="kuang flex">
            <div class="kuang-1 flex" :class="{active:act_index===1}">
                <i class="el-icon-user"></i>
                <el-input placeholder="请输入用户名称" v-model="input1" clearable @focus="jiaodian(1)"></el-input>
            </div>
            <div class="kuang-2 flex" :class="{active:act_index===2}">
                <i class="el-icon-lock"></i>
                <el-input placeholder="请输入密码" v-model="input2" show-password @focus="jiaodian(2)"></el-input>
            </div>
            <i class="el-icon-right" @click="login"></i>
        </div>
        <div class="tishi flex" v-if="message != ''">
            <i class="el-icon-warning-outline"></i>
            <p>{{message}}</p>
        </div>
    </div>
</div>
</template>

<script>
import {
    get
} from '@/utlis/request'
export default {
    data() {
        return {
            input1: "",
            input2: "",
            message: "",
            act_index: ""
        };
    },
    // created() {
    //     var _this = this;
    //     document.onkeydown = function (e) {
    //         let key = window.event.keyCode;
    //         if (key == 13) {
    //             _this.login();
    //         }
    //     };
    // },
    created() {
        let _this = this;
        document.onkeydown = function(e){
            let key = window.event.keyCode;
            if(key==13){
                _this.login();
            }
        }
    },

    methods: {
login() {
    this.$router.push({
        path:'index'
    })
            // let than = this
            // let userList = []
            // if (than.input1 != "") {
            //     if (than.input2 != "") {
            //         than.axios.post('http://139.9.169.87:8081/examsystem/login?username=' +
            //                 than.input1 + "&password=" + than.input2)
            //             .then((res) => {
            //                 if (res.data.success) {
            //                     sessionStorage.setItem('token', res.data.data.token)
            //                     than.$router.push({
            //                         path: 'index'
            //                     })
            //                 } else {
            //                     than.message = "用户名或密码错误";
            //                 }
            //             })
            //     } else {
            //         than.message = "请填写登陆密码";
            //     }
            // } else {
            //     than.message = "请填写用户账户";
            // }
},
        jiaodian(val) {
            this.act_index = val;
        }
    }
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.active {
    /* //边框高亮 */
    box-shadow: 0 0 15px white;

}

.tishi {
    color: white;
    margin-left: 450px;
    margin-top: 20px;
    align-items: center;
}

.tishi>i {
    color: orange !important;
}

.tishi>p {
    color: orange !important;
}

.el-icon-right {
    color: white;
    font-size: 30px;
    font-weight: bolder;
    border: 5px solid white;
    border-radius: 25px;
    margin-left: 30px;
}

.el-icon-right:hover {
    color: rgb(0, 121, 254);
    border: 5px solid rgb(0, 121, 254);
}

/deep/ .el-input__inner {
    border: none !important;
}

.flex {
    display: flex;
}

.dl {
    background: url("../assets/image/dl1.jpg") no-repeat;
    background-size: 100%;
    height: 800px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
}

.dlz {
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 300px;
}

.dlz-1 {
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}

.dlz-1>img {
    width: 100px;
    height: 100px;
}

.dlz-1-1>p {
    color: white;
}

.dlz-1-1>p:nth-of-type(1) {
    font-size: 44px;
}

.dlz-1-1>p:nth-of-type(2) {
    font-size: 33px;
}

.kuang {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
}

.kuang-1,
.kuang-2 {
    width: 350px;
    height: 50px;
    background-color: white;
    justify-content: center;
    align-items: center;
    /* 边框为透明色 */
    border: 3px solid transparent;
}

.kuang-1>i {
    font-size: 25px;
    margin-left: 10px;
}

.kuang-2>i {
    font-size: 25px;
    margin-left: 10px;
}

.kuang-2 {
    margin-left: 20px;
}

.kuang-1:hover {
    border: 3px solid blue;

}

.kuang-2:hover {
    border: 3px solid blue;
}
</style>
