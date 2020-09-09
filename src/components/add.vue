<template>
<div>
    <el-row class="bg-bai padtop-10">
        <el-col :span="3">
            <i class="shuxian"></i>
            <span>新增入库</span>
        </el-col>
        <el-col :span="2" :offset="15">
            <el-button plain icon="el-icon-refresh" size="mini" @click="$router.go(0)">刷新</el-button>
        </el-col>
        <el-col :span="2">
            <el-button plain icon="el-icon-arrow-left" size="mini" @click="$router.go(-1)">返回</el-button>
        </el-col>
    </el-row>
    <div class="z">
        <div id="tou">新增入库单</div>
        <div class="zz">
            <div class="e">
                <div class="e-1">
                    <p>订单号：</p>
                    <input type="text" :value="ddh" readonly/>
                </div>
                <div class="e-2">
                    <p>
                        <span style="color:red;">*</span>产品编号：
                    </p>
                    <input type="text" placeholder="" v-model="cpbh"/>
                </div>
                <div class="e-3">
                    <p>
                        <span style="color:red;">*</span>批次：
                    </p>
                    <input type="text" v-model="pc"/>
                </div>
            </div>
            <div class="r">
                <div class="r-1">
                    <p>
                        <span style="color:red;">*</span>规格：
                    </p>
                    <input type="text" v-model="gg"/>
                </div>
                <div class="r-2">
                    <p>
                        <span style="color:red;">*</span>数量：
                    </p>
                    <input type="text" v-model="sl"/>
                </div>
                <div class="r-3">
                    <p>库位：</p>
                    <input type="text" v-model="kw"/>
                </div>
            </div>
            <div class="w">
                <div class="w-1">
                    <p>入库类型：</p>
                    <input type="text" v-model="rklx"/>
                </div>
                <div class="w-2">
                    <p>供应商</p>
                    <input type="text" v-model="gys"/>
                </div>
                <div class="w-3">
                    <p>审核时间：</p>
                    <input type="text" :value="shsj | guolv" readonly />
                </div>
            </div>
        </div>
        <div class="t">
            <p>备注</p>
            <input type="text" placeholder="请输入备注信息" v-model="bz"/>
        </div>
        <!-- 表 -->
        <div class="zzz">
            <div class="tou2">
                <el-row>
                    <el-col :span="6">
                        <p style="margin-left: 20px;margin-top:15px;font-weight:bolder;">入库产品信息</p>
                    </el-col>
                    <el-col :span="2" :offset="16">
                        <el-button style="margin-top:5px;height:40px;width:100px;" id="xinzeng" @click="sj1()">新增产品</el-button>
                    </el-col>
                </el-row>
            </div>
            <el-table :data="tableData" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                <el-table-column type="selection"></el-table-column>
                <el-table-column prop="number" label="产品名称"></el-table-column>
                <el-table-column prop="name" label="产品编码"></el-table-column>
                <el-table-column prop="phone" label="规格" width="105"></el-table-column>
                <el-table-column prop="cz" label="批次"></el-table-column>
                <el-table-column prop="email" label="单价"></el-table-column>
                <el-table-column prop="person" label="入库数"></el-table-column>
                <el-table-column prop="address" label="总价"></el-table-column>
                <el-table-column prop="address" label="库位" width="105"></el-table-column>
                <el-table-column label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
                            <i class="el-icon-delete"></i> 删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="tijiao">
                <el-button type="primary" @click="tijiao">提交</el-button>

                <el-button>取消</el-button>
            </div>
        </div>
        <!-- 表 -->
    </div>
    <!-- 遮罩层--选择供应商 -->
    <el-dialog title="选择供应商" :visible.sync="dialogVisible" width="30%">
        <div class="all">
            <div class="small flex">
                <p>供应商编号:</p>
                <input type="text" placeholder="请输入供应商编码" />
                <p>供应商名称：</p>
                <input type="text" placeholder="请输入供应商名称" />
                <el-button type="primary">搜索</el-button>
            </div>
            <div class="biao">
                <el-table :data="tableData" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="number" label="供应商编号"></el-table-column>
                    <el-table-column prop="name" label="供应商名称"></el-table-column>
                    <el-table-column prop="phone" label="电话" width="105"></el-table-column>
                    <el-table-column prop="cz" label="传真"></el-table-column>
                    <el-table-column prop="email" label="Email"></el-table-column>
                    <el-table-column prop="person" label="联系人"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
            </div>
            <div class="fenye">
                <el-pagination background layout=" prev,pager, next,sizes" :total="1000" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[100, 200, 300, 400]" :page-size="100"></el-pagination>
            </div>
            <div class="foot flex">
                <el-button size="small" style="height:40px;font-size:14px;" @click="dialogVisible=false">关闭</el-button>
                <el-button type="primary" size="small" style="height:40px;font-size:14px;" @click="dialogVisible=false">选择</el-button>
            </div>
        </div>
    </el-dialog>

    <el-dialog title="选择产品" :visible.sync="dialogVisible1" width="30%">
        <div class="all">
            <div class="small flex">
                <p>产品编码：:</p>
                <input type="text" placeholder="请输入编码" />
                <p>产品名称：</p>
                <input type="text" placeholder="请输入名称" />
                <el-button type="primary">搜索</el-button>
            </div>
            <div class="biao">
                <el-table :data="tableData1" style="width: 100%;" ref="multipleTable" :header-cell-style="{background:'#eef1f6',color:'#606266'}" :default-sort="{prop: 'date', order: 'descending'}" border label-class-name="bg-color_hui" :row-style="{'padding':'0'}">
                    <el-table-column type="selection"></el-table-column>
                    <el-table-column prop="bm" label="产品编码"></el-table-column>
                    <el-table-column prop="mc" label="产品名称"></el-table-column>
                    <el-table-column prop="gg" label="规格" width="105"></el-table-column>
                    <el-table-column prop="lb" label="类别"></el-table-column>
                    <el-table-column prop="dw" label="存储单位"></el-table-column>
                    <el-table-column prop="lx" label="包装类型"></el-table-column>
                    <el-table-column prop="dj" label="单价"></el-table-column>
                    <el-table-column prop="zl" label="重量"></el-table-column>
                    <el-table-column prop="xsm" label="显示名"></el-table-column>
                </el-table>
            </div>
            <div class="fenye">
                <el-pagination background layout=" prev,pager, next,sizes" :total="1000" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[100, 200, 300, 400]" :page-size="100"></el-pagination>
            </div>
            <div class="foot flex">
                <el-button size="small" style="height:40px;font-size:14px;" @click="dialogVisible=false">关闭</el-button>
                <el-button type="primary" size="small" style="height:40px;font-size:14px;" @click="dialogVisible=false">选择</el-button>
            </div>
        </div>
    </el-dialog>
</div>
</template>

<script>
var pasetime = function (datetime) {
    return datetime < 10 ? "0" + datetime : datetime;
};
export default {
    data() {
        return {
            ddh:"RDX789987",
            bz:"",
            cpbh:"",
            pc:"",
            gg:"",
            sl:"",
            kw:"",
            rklx:"",
            gys:"",
            shsj: new Date(),
            currentPage2: 1,
            tableData: [{
                    number: "设备箱",
                    name: "000187",
                    phone: "10040100 ",
                    cz: "20190518",
                    email: "13500.00",
                    person: "3250",
                    address: "936300.00"
                },
                {
                    number: "J29B 浩方移动电源",
                    name: "000180",
                    phone: "个 ",
                    cz: "20190518",
                    email: "150.00",
                    person: "3250",
                    address: "661277.00"
                },
                {
                    number: "设备箱",
                    name: "000187",
                    phone: "10040100 ",
                    cz: "20190518",
                    email: "13500.00",
                    person: "3250",
                    address: "936300.00"
                },
                {
                    number: "J29B 浩方移动电源",
                    name: "000180",
                    phone: "个 ",
                    cz: "20190518",
                    email: "150.00",
                    person: "3250",
                    address: "661277.00"
                },
                {
                    number: "设备箱",
                    name: "000187",
                    phone: "10040100 ",
                    cz: "20190518",
                    email: "13500.00",
                    person: "3250",
                    address: "936300.00"
                },
                {
                    number: "J29B 浩方移动电源",
                    name: "000180",
                    phone: "个 ",
                    cz: "20190518",
                    email: "150.00",
                    person: "3250",
                    address: "661277.00"
                }
            ],
            tableData1: [{
                    bm: "000187",
                    mc: "设备箱",
                    gg: "个",
                    lb: "数码产品",
                    dw: "件",
                    lx: "1",
                    dj: "50",
                    zl: "0",
                    xsm: ""
                },
                {
                    bm: "000187",
                    mc: "设备箱",
                    gg: "个",
                    lb: "数码产品",
                    dw: "件",
                    lx: "1",
                    dj: "50",
                    zl: "0",
                    xsm: ""
                },
                {
                    bm: "000187",
                    mc: "设备箱",
                    gg: "个",
                    lb: "数码产品",
                    dw: "件",
                    lx: "1",
                    dj: "50",
                    zl: "0",
                    xsm: ""
                }, {
                    bm: "000187",
                    mc: "设备箱",
                    gg: "个",
                    lb: "数码产品",
                    dw: "件",
                    lx: "1",
                    dj: "50",
                    zl: "0",
                    xsm: ""
                },
                {
                    bm: "000187",
                    mc: "设备箱",
                    gg: "个",
                    lb: "数码产品",
                    dw: "件",
                    lx: "1",
                    dj: "50",
                    zl: "0",
                    xsm: ""
                },
                {
                    bm: "000187",
                    mc: "设备箱",
                    gg: "个",
                    lb: "数码产品",
                    dw: "件",
                    lx: "1",
                    dj: "50",
                    zl: "0",
                    xsm: ""
                },
                {
                    bm: "000187",
                    mc: "设备箱",
                    gg: "个",
                    lb: "数码产品",
                    dw: "件",
                    lx: "1",
                    dj: "50",
                    zl: "0",
                    xsm: ""
                }
            ],
            dialogVisible: false,
            dialogVisible1: false
        };
    },
    filters: {
        guolv(value) {
            var date = new Date(value);
            var nian = pasetime(date.getFullYear());
            var yue = pasetime(date.getMonth() + 1);
            var ri = pasetime(date.getDay() - 1);

            return nian + "-" + yue + "-" + ri;
        }
    },
    methods: {
        sj() {
            this.dialogVisible = true;
        },
        sj1() {
            this.dialogVisible1 = true;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        tijiao(){
            let sz={
                cpmc:"设备箱",
                zdr:"晏楠",
                zt:"等待审核",
                shr:"蔡宁",

                 ddh:this.ddh,
                cpbh:this.cpbh,
                pc:this.pc,
                gg:this.gg,
                sl:this.sl,
                kw:this.kw,
                rklx:this.rklx,
                gys:this.gys,
                shsj:"2020-09-04",
                bz:this.bz
            }
            this.$router.push({
                name:'ruku',
                params:{
                    items:sz
                }
            })

        }
    }
};
</script>

<style scoped>
.flex {
    display: flex;
}

.zz {
    display: flex;
    margin-top: 30px;
}

.e,
.r,
.w {
    width: 30%;
    margin-left: 3%;
}

.e>div,
.w>div,
.r>div {
    padding-left: 60px;
}

.e>div>input,
.w>div>input,
.r>div>input {
    height: 40px;
    font-size: 14px;
    margin-top: 10px;
    text-indent: 5px;
    width: 250px;
}

.e>div>p,
.w>div>p,
.r>div>p {
    font-size: 16px;
    margin-top: 10px;
}

.t {
    width: 84%;
    margin-left: 7%;
    margin-top: 15px;
}

.t>input {
    width: 100%;
    height: 180px;
    font-size: 16px;
    margin-top: 15px;
}

#tou {
    border: 1px solid rgb(233, 233, 233);
    height: 40px;
    width: 94%;
    margin-left: 3%;
    font-size: 18px;
    font-weight: bolder;
    color: rgb(102, 102, 102);
    padding-top: 20px;
    padding-left: 15px;
}

.z {
    background: white;
    margin-top: 20px;
    padding-top: 10px;
}

.padtop-10 {
    padding: 10px 0;
}

.bg-bai {
    background-color: white;
}

.shuxian {
    display: inline-block;
    width: 5px;
    height: 20px;
    background-color: rgba(0, 0, 255, 0.781);
    margin-left: 20px;
    margin-right: 5px;
}

.tou2 {
    border: 1px solid rgb(233, 233, 233);
    width: 96%;
    margin-left: 2%;
    height: 50px;
    margin-top: 20px;
}

.el-table {
    width: 96% !important;
    margin-left: 2%;
}

/* 选择供应商 */
#xinzeng {
    height: 40px !important;
    width: 100px !important;
    margin-left: -10px !important;
}

.small {
    height: 70px;
    width: 100%;
    /* border-bottom: 1px solid rgb(228, 228, 228); */
    align-items: center;
}

.small>input {
    height: 40px;
    margin-left: 5px;
}

.small>p {
    font-size: 14px;
}

.small>.el-button {
    height: 38px !important;
    width: 100px !important;
}

.el-button--primary {
    margin-left: 10px;
}

.small>p:nth-of-type(1) {
    margin-left: 70px;
}

.small>p:nth-of-type(2) {
    margin-left: 5px;
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
    font-size: 14px;
}

.flex {
    display: flex;
}

.all {
    height: 418px;
    margin: 0 auto;
}

/deep/.el-dialog__header {
    background: rgb(242, 242, 242) !important;
}

/deep/.el-dialog {
    width: 50% !important;
    height: 638px !important;
    margin-top: 50px !important;
}

/deep/.el-dialog__body {
    padding: 0 !important;
}

.tijiao {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.tijiao>.el-button--primary {
    width: 150px !important;
    height: 50px !important;
}

.el-button {
    margin-left: 20px !important;
    height: 50px !important;

    width: 150px !important;
}

.fenye>.el-pagination {
    margin-left: 277px;
    margin-top: 10px;
}

.fenye {
    border-bottom: 1px solid rgb(233, 233, 233);
    height: 40px;
}

.foot>.el-button {
    width: 80px !important;
    height: 40px !important;
}

.foot>.el-button:nth-of-type(1) {
    margin-left: 647px !important;
}
</style>
