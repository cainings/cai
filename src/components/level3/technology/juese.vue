<template>
<div>
    <el-row class="bg-bai padtop-10">
        <el-col :span="3">
            <i class="shuxian" style="margin-left:10px"></i>
            <span>角色管理</span>
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
                <label class="color-hui">角色名：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="number" />
            </el-col>
            <el-col :span="5">
                <label class="color-hui">备注：</label>
                <input class="hei_30" type="text" placeholder="请输入" v-model="typeName" />
            </el-col>
            <el-col :span="4">
                <el-button type="primary" icon="el-icon-search" @click="select">查询</el-button>
                <el-button icon="el-icon-refresh">重置</el-button>
            </el-col>
        </el-row>
        <div class="biaoge">
            <el-row class="title_bg">
                <el-col :span="3" class="titl2" style="padding-left:10px">数据列表</el-col>
                <el-col :span="11" :offset="10">
                    <el-button icon="el-icon-circle-plus" @click="toUrl">新增</el-button>
                    <el-button icon="el-icon-edit">编辑</el-button>
                    <el-button icon="el-icon-remove">删除</el-button>
                    <el-button icon="el-icon-refresh">刷新</el-button>
                    <el-button icon="el-icon-folder">导出</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                <el-table-column type="selection"></el-table-column>
                <el-table-column label="角色名"></el-table-column>
                <el-table-column prop="name" label="创建时间"></el-table-column>
                <el-table-column label="备注"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="updaeRow(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-edit"></i> 编辑
                        </el-button>
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-delete"></i> 删除
                        </el-button>
                        <el-button @click.native.prevent="updaeRow(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-edit"></i> 分配权限
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
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            chanpin: "",
            number: "",
            typeName: '',
            multipleTable: [],
            tableData: [{
                    date: "2016-05-02",
                    name: "王小虎",
                    address: "上海市 ",
                },
                {
                    date: "2016-05-04",
                    name: "王小虎",
                    address: "上海市 ",
                },
                {
                    date: "2016-05-01",
                    name: "王小虎",
                    address: "上海市 ",
                },
                {
                    date: "2016-05-03",
                    name: "王小虎",
                    address: "上海市",
                },
            ],
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
        updaeRow(index, rows) {},
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
