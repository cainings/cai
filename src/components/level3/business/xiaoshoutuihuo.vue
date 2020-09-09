<template>
<div>
    <el-row class="bg-bai padtop-10">
        <el-col :span="3">
            <i class="shuxian" style="margin-left:10px"></i>
            <span>销售退货</span>
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
            <el-col :span="3" style="padding-left:10px">数据筛选</el-col>
            <el-col :span="3" :offset="18">
                <el-button type="text" @click="dialogVisible = true">高级搜索</el-button>
            </el-col>
        </el-row>
        <el-row class="biank">
            <el-col :span="5">
                <label class="color-hui">退货单号：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="number" />
            </el-col>
            <el-col :span="5">
                <label class="color-hui">销售单号：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="typeName" />
            </el-col>
            <el-col :span="5">
                <label class="color-hui">产品名称：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="chanpin" />
            </el-col>
            <el-col :span="5">
                <label class="color-hui">订单状态：</label>
                <select v-model="dingdanState" class="select2_padd">
                    <option value="0" selected>请选择</option>
                    <option v-for="(item, index) in stateList" :key="index" :value="item.id">{{item.stateName}}</option>
                </select>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-search" @click="select">查询</el-button>
                <el-button icon="el-icon-refresh">重置</el-button>
            </el-col>
        </el-row>
        <div class="biaoge">
            <el-row class="title_bg">
                <el-col :span="3" class="titl2" style="padding-left:10px">数据列表</el-col>
                <el-col :span="7" :offset="14">
                    <el-button icon="el-icon-remove">删除</el-button>
                    <el-button icon="el-icon-refresh">刷新</el-button>
                    <el-button icon="el-icon-folder">导出</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="thdh" label="退货单号"></el-table-column>
                <el-table-column prop="cpmc" label="产品名称"></el-table-column>
                <el-table-column prop="cpbh" label="产品编号"></el-table-column>
                <el-table-column prop="cpgg" label="产品规格"></el-table-column>
                <el-table-column prop="dw" label="单位"></el-table-column>
                <el-table-column prop="dj" label="单价"></el-table-column>
                <el-table-column prop="ths" label="退货数"></el-table-column>
                <el-table-column prop="ze" label="总额"></el-table-column>
                <el-table-column prop="xsdh" label="销售单号"></el-table-column>
                <el-table-column prop="khmc" label="客户名称"></el-table-column>
                <el-table-column prop="zt" label="状态"></el-table-column>
                <el-table-column prop="cjsj" label="创建时间"></el-table-column>
                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="selectROw(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-view"></i> 查看
                        </el-button>
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-delete"></i> 删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-row style="padding:10px 0">
                <el-col :span="3" :offset="1">
                    <el-button @click="toggleSelection(tableData)" style="margin-left:50px">全选/取消全选</el-button>
                </el-col>
                <el-col :span="10" :offset="8">
                    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>

    <el-dialog title="高级搜索" :visible.sync="dialogVisible" width="30%">
        <div class="all">
            <div class="small">
                <div class="a-2">
                    <div class="a-2-1">
                        <p>退货单号：</p>
                        <input type="text" v-model="a1_input" />
                    </div>
                    <div class="a-2-2">
                        <p>产品编号</p>
                        <input type="text" v-model="a2_input" />
                    </div>
                    <div class="a-2-2">
                        <p>客户编号</p>
                        <input type="text" v-model="a6_input" />
                    </div>
                    <div class="a-2-3">
                        <p>起始时间：</p>
                        <input type="text" placeholder="起始时间" v-model="a3_input" />
                    </div>
                </div>
                <div class="a-3">
                    <div class="a-2-1">
                        <p>销售单号</p>
                        <input type="text" placeholder="请输入/扫描单号" v-model="a4_input" />
                    </div>
                    <div class="a-2-2">
                        <p>产品名称：</p>
                        <input type="text" v-model="a5_input" />
                    </div>
                    <div class="a-2-2">
                        <p>客户名称：</p>
                        <input type="text" v-model="a7_input" />
                    </div>
                </div>
            </div>
            <div class="foot flex">
                <p @click="moveAll()">清除条件</p>
                <el-button size="small" style="height:40px;font-size:14px;" @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" size="small" style="height:40px;font-size:14px;">确定</el-button>
            </div>
        </div>
    </el-dialog>
</div>
</template>

<script>
import {
    get
} from '@/utlis/request'
export default {
    data() {
        return {
            a1_input: "",
            a2_input: "",
            a3_input: "",
            a4_input: "",
            a5_input: "",
            a6_input: "",
            a7_input: "",
            tableData: [],
            dialogVisible: false,
            chanpin: '',
            dingdanState: 0,
            number: "",
            typeName: '',
            multipleTable: [],
            cangkuId: 0,
            stateList: [{
                    id: 1,
                    stateName: "全部",
                },
                {
                    id: 2,
                    stateName: "待审核",
                }, {
                    id: 3,
                    stateName: "审核成功",
                }, {
                    id: 4,
                    stateName: "审核失败",
                }
            ],
            tableData: [],
        };
    },
    methods: {
        select() {
            this.$router.push({
                path:'/index/chaxunAll'
            })
        },
        gjSelect() {},
        toggleSelection(rows) {
            if (rows) {
                rows.forEach((row) => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        selectROw(index, rows) {},
        moveAll() {
            this.a1_input = "";
            this.a2_input = "";
            this.a3_input = "";
            this.a4_input = "";
            this.a5_input = "";
            this.a6_input = "";
            this.a7_input = "";
        }
    },
    created() {
        get('xstuihuo').then((res) => {
            this.tableData = res.data.tuihuo
        })
    },
};
</script>

<style scoped>
.clleHei {
    height: 10px !important;
    padding: 0 !important;
}

.bg-color_hui {
    background-color: gainsboro;
}

.shuxian {
    display: inline-block;
    width: 5px;
    height: 20px;
    background-color: rgba(0, 0, 255, 0.781);
    margin-left: 20px;
    margin-right: 5px;
}

.title_bg {
    padding-bottom: 20px;
    border-top: 1px solid gainsboro;
    padding-top: 20px;
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
    width: 150px;
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
    width: 98.5%;
    margin-left: 1.5%;
    background-color: white;
    margin-top: 20px;
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

.small {
    height: 300px;
    width: 100%;
}

.foot {
    width: 100%;
    height: 70px;
    align-items: center;
}

.foot>p {
    font-size: 14px;
    color: rgb(51, 158, 254);
    cursor: pointer;
    margin-left: 340px;
}

.foot>.el-button:nth-child(2) {
    margin-left: 20px;
}

input {
    text-indent: 5px;
}

.flex {
    display: flex;
}

.a-2 {
    float: left;
    width: 46%;
    padding-left: 4%;
    margin-top: 20px;
}

.a-3 {
    float: right;
    width: 46%;
    padding-left: 4%;
    margin-top: 20px;
}

.all {
    width: 600px;
    height: 418px;
    margin: 0 auto;
}

/deep/.el-dialog__header {
    background: rgb(242, 242, 242) !important;

}

.a-1>p {
    font-size: 18px;
    font-weight: bolder;
    color: rgb(102, 102, 102);
    margin-left: 20px;
}

.a-1>i {
    font-size: 20px;
    color: rgb(102, 102, 102);
    font-weight: bolder;
    margin-left: 450px;
}

.a-2-1>input,
.a-2-2>input,
.a-2-3>input {
    width: 230px;
    height: 40px;
    font-size: 16px;
    color: rgb(102, 102, 102);
    border: 1px solid rgb(102, 102, 102);
    margin-top: 10px;
}

.a-2-2>p,
.a-2-3>p {
    margin-top: 10px;
}

.a-3-3>input {
    width: 230px;
    height: 40px;
}

.a-3-2>p {
    margin-top: 10px;
}

.a-3-3>p {
    margin-top: 10px;
}

.a-3-3>input {
    margin-top: 10px;
}

/deep/.el-dialog {
    width: 40% !important;
    height: 500px !important;
}
</style>
