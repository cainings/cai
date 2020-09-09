<template>
<div>
    <el-row class="bg-bai padtop-10">
        <el-col :span="3">
            <i class="shuxian"></i>
            <span>调拨管理</span>
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
                <span class="color_lan" @click="dialogFormVisible  = true">高级搜索</span>
            </el-col>
        </el-row>
        <el-row class="biank">
            <el-col :span="6">
                <label class="color-hui">调拨单号：</label>
                <input class="hei_30" type="text" placeholder="请输入/扫描单号" v-model="number" />
            </el-col>
            <el-col :span="6">
                <label class="color-hui">起始时间：</label>
                <input class="hei_30" type="text" placeholder="起始时间" v-model="createTime" />
            </el-col>
            <el-col :span="6">
                <label class="color-hui">单据类型：</label>
                <select v-model="states" class="select2_padd">
                    <option value="0" selected>请选择</option>
                    <option v-for="(item, index) in stateList" :key="index" :value="item.id">{{item.stateName}}</option>
                </select>
            </el-col>
            <el-col :span="6">
                <el-button type="primary" icon="el-icon-search" @click="select">查询</el-button>
                <el-button icon="el-icon-refresh">重置</el-button>
            </el-col>
        </el-row>
        <div class="biaoge">
            <el-row class="title_bg">
                <el-col :span="3" class="titl2" style="padding-left:10px">数据列表</el-col>
                <el-col :span="12" :offset="9">
                    <el-button icon="el-icon-circle-plus" @click="toUrl">新增</el-button>
                    <el-button icon="el-icon-edit">编辑</el-button>
                    <el-button icon="el-icon-remove">删除</el-button>
                    <el-button icon="el-icon-refresh">刷新</el-button>
                    <el-button icon="el-icon-folder">导出</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="ddh" label="调拨单号"></el-table-column>
                <el-table-column prop="cpmc" label="产品名称"></el-table-column>
                <el-table-column prop="cpbh" label="产品编号" width="105"></el-table-column>
                <el-table-column prop="pc" sortable label="批次"></el-table-column>
                <el-table-column prop="gg" sortable label="规格"></el-table-column>
                <el-table-column prop="sl" sortable label="数量"></el-table-column>
                <el-table-column prop="kw" label="原仓库"></el-table-column>
                <el-table-column prop="kw" label="调拨仓库"></el-table-column>
                <el-table-column prop="zt" label="状态" sortable></el-table-column>
                <el-table-column prop="shr" label="审核人"></el-table-column>
                <el-table-column prop="shsj" label="审核时间"></el-table-column>
                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="selectROw(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-view"></i> 查看
                        </el-button>
                        <el-button @click.native.prevent="updaeRow(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-edit"></i>编辑
                        </el-button>
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-delete"></i> 删除
                        </el-button>
                        <el-button @click.native.prevent="shangchuan(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-share"></i> 审核
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

    <el-dialog title="高级搜索" :visible.sync="dialogFormVisible">
        <div slot="footer" class="dialog-footer">

            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
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
            dialogFormVisible: false,
            number: "",
            createTime: '',
            multipleTable: [],
            states: 0,
            stateList: [{
                    id: 1,
                    stateName: "全部",
                },
                {
                    id: 2,
                    stateName: "待审核",
                },
                {
                    id: 3,
                    stateName: "审核成功",
                },
                {
                    id: 4,
                    stateName: "审核失败",
                },
            ],
            tableData: [],
        };
    },
    methods: {
            toUrl() {
      this.$router.push({
        path: "/index/addd"
      });
    },
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
        updaeRow(index, rows) {},
        shangchuan(index, rows) {}
    },
    created() {
        get('ruku').then((res) => {
            this.tableData = res.data.ruku
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
