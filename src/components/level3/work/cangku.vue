<template>
<div>
    <el-row class="bg-bai padtop-10">
        <el-col :span="3">
            <i class="shuxian" style="margin-left:10px"></i>
            <span>库存台账</span>
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
        </el-row>
        <el-row class="biank">
            <el-col :span="5">
                <label class="color-hui">参评编号：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="number" />
            </el-col>
            <el-col :span="5">
                <label class="color-hui">参评名称：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="typeName" />
            </el-col>
            <el-col :span="5">
                <label class="color-hui">仓库：</label>
                <select v-model="cangkuId" class="select2_padd">
                    <option value="0" selected>请选择</option>
                    <option v-for="(item, index) in stateList" :key="index" :value="item.id">{{item.stateName}}</option>
                </select>
            </el-col>
            <el-col :span="5">
                <label class="color-hui">产品批次：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="chanpin" />
            </el-col>
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-search" @click="select">查询</el-button>
                <el-button icon="el-icon-refresh">重置</el-button>
            </el-col>
        </el-row>
        <div class="biaoge">
            <el-row class="title_bg">
                <el-col :span="3" class="titl2" style="padding-left:10px">数据列表</el-col>
                <el-col :span="3" :offset="18">
                    <el-button icon="el-icon-folder">导出</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                <el-table-column type="selection"></el-table-column>
                <el-table-column type="index" width="50" label="序号"> </el-table-column>
                <el-table-column prop="cpbh" label="产品编号"></el-table-column>
                <el-table-column prop="cpmc" label="产品名称"></el-table-column>
                <el-table-column prop="cpgg" label="产品规格"></el-table-column>
                <el-table-column prop="cppc" label="产品批次"></el-table-column>
                <el-table-column prop="lx" label="类型"></el-table-column>
                <el-table-column prop="ck" label="仓库"></el-table-column>
                <el-table-column prop="sl" label="数量"></el-table-column>
                <el-table-column prop="dw" label="单位"></el-table-column>
                <el-table-column prop="ykw" label="原库位"></el-table-column>
                <el-table-column prop="mbck" label="目标仓库"></el-table-column>
                <el-table-column prop="rq" label="日期"></el-table-column>
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
</div>
</template>

<script>
import {
    get
} from '@/utlis/request'
export default {
    data() {
        return {
            tableData: [],
            chanpin: '',
            number: "",
            typeName: '',
            multipleTable: [],
            cangkuId: 0,
            stateList: [{
                    id: 1,
                    stateName: "三号仓库",
                },
                {
                    id: 2,
                    stateName: "二号仓库",
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
        updaeRow(index, rows) {}
    },
    created() {
        get('taizahng').then((res) => {
            this.tableData = res.data.taizhang
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
</style>
