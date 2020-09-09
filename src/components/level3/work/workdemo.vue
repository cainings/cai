<template>
<div>
    <el-row class="bg-bai padtop-10">
        <el-col :span="3">
            <i class="shuxian"></i>
            {{title}}
        </el-col>
        <el-col :span="2" :offset="15">
            <el-button plain icon="el-icon-refresh" size="mini">刷新</el-button>
        </el-col>
        <el-col :span="2">
            <el-button plain icon="el-icon-arrow-left" size="mini">返回</el-button>
        </el-col>
    </el-row>

    <div class="saixuan">
        <el-row class="sx_tou">
            <el-col :span="3">数据筛选</el-col>
            <el-col :span="3" :offset="18">
                <span class="color_lan">高级搜索</span>
            </el-col>
        </el-row>
        <el-row class="biank" v-if="inpuType.length<=4">
            <el-col :span="5" v-for="(item, index) in inpuType" :key="index">
                <label class="color-hui">{{tableName[index]}}</label>
                <input class="hei_30" type="text" placeholder="请输入/扫描单号" v-if="inpuType[index]=='text'" v-model="date[index]" />
                <input class="hei_30" type="date" placeholder="起始时间" v-if="inpuType[index]=='time'" v-model="date[index]" />
                <select class="select_padd" v-model="select1Num" v-if="selectList1.length>0 && inpuType[index]=='select1'">
                    <option :value="0">请选择</option>
                    <option v-for="(item2, index2) in selectList1" :key="index2" :value="index2+1">
                        <label class="color-hui">{{item2}}</label>
                    </option>
                </select>
                <select class="select_padd" v-model="select2Num" v-if="selectList2.length>0 && inpuType[index]=='select2'">
                    <option :value="0">请选择</option>
                    <option v-for="(item3, index3) in selectList1" :key="index3" :value="index3+1">
                        <label class="color-hui">{{item3}}</label>
                    </option>
                </select>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-search" size="mini" @click="select">查询</el-button>
                <el-button icon="el-icon-refresh" size="mini">重置</el-button>
            </el-col>
        </el-row>
        <el-row v-else class="biank">
            <el-col :span="7">
                <label class="color-hui">流水号：</label>
                <input type="text" class="color-hui hei2_30" placeholder="请输入" v-model="date[0]" />
            </el-col>
            <el-col :span="7">
                <label class="color-hui">名称：</label>
                <input type="text" class="color-hui hei2_30" placeholder="请输入" v-model="date[1]" />
            </el-col>
            <el-col :span="7">
                <label class="color-hui">财务类别：</label>
                <select v-model="select1Num" class="select2_padd">
                    <option :value="0">请选择</option>
                    <option v-for="(item, index) in selectList1" :key="index" :value="index+1">{{item}}</option>
                </select>
            </el-col>
            <el-col :span="15" style="margin-top:20px">
                <label class="color-hui">起始时间：</label>
                <input type="date" class="color-hui hei2_30 mg-right" placeholder="开始时间" v-model="date[2]" />
                <input type="date" class="color-hui hei2_30" placeholder="结束时间" v-model="date[3]" />
            </el-col>
            <el-col :span="4" style="margin-top:20px">
                <el-button type="primary" icon="el-icon-search" size="mini" @click="select">查询</el-button>
                <el-button icon="el-icon-refresh" size="mini">重置</el-button>
            </el-col>
        </el-row>
        <div class="biaoge">
            <el-row class="title_bg">
                <el-col :span="3" class="titl2">数据列表</el-col>
                <el-col :span="3" :offset="15" v-if="btn.length==1">
                    <el-button icon="el-icon-folder">导出</el-button>
                </el-col>
                <el-col :span="12" :offset="9" v-if="btn.length>1">
                    <el-button icon="el-icon-circle-plus" @click="toUrl">新增</el-button>
                    <el-button icon="el-icon-edit">编辑</el-button>
                    <el-button icon="el-icon-remove">删除</el-button>
                    <el-button icon="el-icon-refresh">刷新</el-button>
                    <el-button icon="el-icon-folder">导出</el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableName: ["入库单号：", "数据类型：", "入库单状态：", "入库单状态："], //要查询的标签名称
            inpuType: ["text", "select1", "select2", 'text', 'text'], //input框的类型
            selectList1: [ //第一个select标签的内容
                "采购收货入库",
                "销售退货入库",
                "生产产品入库",
                "领用退还入库",
                "借货入库",
                "借出还入",
            ],
            selectList2: ["全部", "待审核", "审核成功", "审核失败"], //第二个select标签的内容
            select1Num: 0, //第一个input框的值
            select2Num: 0, //第二个input框的值
            title: "入库管理", //组件标题
            date: [], //input框的值
            btn: ['新增', '编辑', '删除', '刷新', '导出']
        };
    },
    methods: {
            toUrl() {
      this.$router.push({
        path: "/index/addd"
      });
    },
        select() {
            console.log(this.date)
        }
    },
};
</script>

<style scoped>
.title_bg {
    padding-bottom: 20px;
}

.titl2 {
    font-weight: bolder;
    color: rgb(43, 43, 43);
}

.mg-right {
    margin-right: 20px;
}

.color_lan {
    color: rgba(0, 0, 255, 0.781);
}

.select_padd {
    height: 35px;
    text-indent: 5px;
    width: 100px;
}

.select2_padd {
    height: 35px;
    text-indent: 5px;
    width: 150px;
}

.hei_30 {
    height: 30px;
    text-indent: 5px;
    width: 110px;
}

.hei2_30 {
    height: 30px;
    text-indent: 5px;
    width: 150px;
}

.color-hui {
    color: rgb(116, 113, 113);
}

.sx_tou {
    height: 50px;
    line-height: 50px;
    font-weight: bold;
}

.saixuan {
    width: 97.5%;
    margin-left: 2.5%;
    background-color: white;
    margin-top: 20px;
    text-indent: 20px;
}

.bg-bai {
    background-color: white;
}

.biank {
    border-bottom: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
    padding: 20px 10px;
}

.padtop-10 {
    padding: 10px 0;
}

.biaoge {
    padding-top: 20px;
}
</style>
