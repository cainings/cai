<template>
<div>
    <el-row class="bg-bai padtop-10">
        <el-col :span="3">
            <i class="shuxian"></i>
            <span v-if="this.$route.query.type==1">新增入库</span>
            <span v-else>编辑入库</span>
        </el-col>
        <el-col :span="2" :offset="15">
            <el-button plain icon="el-icon-refresh" size="mini">刷新</el-button>
        </el-col>
    </el-row>

    <div class="saixuan">
        <el-row class="sx_tou">
            <el-col :span="3">新增入库</el-col>
            <el-col :span="3" :offset="18">
                <span style="color:red">*</span><span>为必填项</span>
            </el-col>
        </el-row>
        <el-row class="biank">
            <el-col :span="6">
                <label class="color-hui">入库单号：</label>
                <input class="hei_30" type="text" placeholder="请输入/扫描单号" v-model="number" />
            </el-col>
            <el-col :span="6">
                <label class="color-hui">单据类型：</label>
                <select v-model="type" class="select2_padd">
                    <option value="0" selected>请选择</option>
                    <option v-for="(item, index) in typeList" :key="index" :value="item.id">{{item.typeName}}</option>
                </select>
            </el-col>
            <el-col :span="6">
                <label class="color-hui">入库状态：</label>
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
            <el-table :data="tableData" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="date" label="订单号"></el-table-column>
                <el-table-column prop="name" label="产品名称"></el-table-column>
                <el-table-column prop="address" sortable label="产品编号" width="105"></el-table-column>
                <el-table-column prop="address" sortable label="批次"></el-table-column>
                <el-table-column prop="address" sortable label="规格"></el-table-column>
                <el-table-column prop="address" sortable label="数量"></el-table-column>
                <el-table-column prop="address" sortable label="库位"></el-table-column>
                <el-table-column prop="address" sortable label="入库类型" width="105"></el-table-column>
                <el-table-column prop="address" sortable label="供应商" width="105"></el-table-column>
                <el-table-column prop="address" sortable label="制单人" width="105"></el-table-column>
                <el-table-column prop="address" sortable label="状态"></el-table-column>
                <el-table-column prop="address" label="审核人"></el-table-column>
                <el-table-column prop="address" label="审核时间" width="105"></el-table-column>
                <el-table-column prop="address" label="操作" width="150"></el-table-column>
            </el-table>
            <el-row style="padding:10px 0">
                <el-col :span="3" :offset="1">
                    <el-button @click="toggleSelection(tableData)" style="margin-left:50px">全选/取消全选</el-button>
                </el-col>
                <el-col :span="10" :offset="8">
                    <el-pagination background layout="prev, pager, next" :total="1000">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
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
    border: 1px solid gainsboro;
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
