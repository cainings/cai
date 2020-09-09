<template>
<div>
    <div class="sanji">
        <el-row class="bg-bai padtop-10">
            <el-col :span="3">
                <i class="shuxian"></i>
                <span>数据概览</span>
            </el-col>
            <el-col :span="2" :offset="15">
                <el-button plain icon="el-icon-refresh" size="mini">刷新</el-button>
            </el-col>
            <el-col :span="2">
                <el-button plain icon="el-icon-arrow-left" size="mini">返回</el-button>
            </el-col>
        </el-row>
        <div class="qiehuan">
            <el-row>
                <el-col :span="4" :offset="8">
                    <p @click="dianji()" :class="activeName==0?'active':''">数据总览</p>
                </el-col>
                <el-col :span="4">
                    <p @click="dianji1()" :class="activeName==1?'active':''">仓库作业</p>
                </el-col>
            </el-row>
        </div>
        <div class="xianshi" v-show="activeName==0">
            <div class="x-1 flex">
                <div class="x-1-1">
                    <p>库存总量</p>
                    <p>76,763,424.80</p>
                    <p>库存成本</p>
                    <p>3,665,745,933.54</p>
                </div>
                <div class="x-1-2">
                    <p>本年销售总额</p>
                    <p>16,349.00</p>
                    <p>本年销售毛利</p>
                    <p>2,660.31</p>
                </div>
                <div class="x-1-3">
                    <p>本周销售总额</p>
                    <p>349.00</p>
                    <p>本周销售毛利</p>
                    <p>660.31</p>
                </div>
                <div class="x-1-4">
                    <p>本年采购额</p>
                    <p>2,815,102,175.90</p>
                    <p>本月采购额</p>
                    <p>1,400,990,823.71</p>
                </div>
            </div>
            <div class="x-2">
                <div class="x-2-1">
                    <p>本季度-业务员销售排名</p>
                    <ve-histogram :data="chartData" :settings="chartSettings" :colors="colors"></ve-histogram>
                </div>
                <div class="x-2-2">
                    <p>本季度-仓库销售比较分析</p>
                    <ve-histogram :data="chartData1" :settings="chartSettings1" :colors="colors1"></ve-histogram>
                </div>
            </div>
            <div class="x-3">
                <div class="x-3-1">
                    <p>本季度-存货销售比较分析</p>
                    <ve-pie :data="chartData2"></ve-pie>
                </div>
                <div class="x-3-2">
                    <p>本季度-客户销售比较分析</p>
                    <ve-histogram :data="chartData3" :settings="chartSettings3" :colors="colors1"></ve-histogram>
                </div>
            </div>
            <div class="x-4">
                <p></p>
                <ve-line :data="chartData4"></ve-line>
            </div>
            <div class="x-5">
                <p>Copyright © AxurePro, All Rights Reserved.</p>
            </div>
        </div>
        <div class="xianshi1" v-show="activeName==1">
            <div class="s-1 flex">
                <div class="s-1-1">
                    <p>SO总量</p>
                    <p>76,763</p>
                </div>
                <div class="s-1-2">
                    <p>已发运</p>
                    <p>3,424</p>
                </div>
                <div class="s-1-3">
                    <p>待发运</p>
                    <p>63,424</p>
                </div>
                <div class="s-1-4">
                    <p>ANS</p>
                    <p>76,763</p>
                </div>
                <div class="s-1-5">
                    <p>质检</p>
                    <p>76,763,424.80</p>
                </div>
                <div class="s-1-6">
                    <p>移库</p>
                    <p>76,763,424.80</p>
                </div>
            </div>
            <div v-if="activeName==1" style="margin-top:10px;margin-left:10px" class="s-2">
                <div class="ac1_es">
                    <p>仓库操作统计</p>
                    <ve-line :data="chartData5" height="800px"></ve-line>
                </div>
                <div class="ac1_es">
                    <div class="s-3 flex">
                        <div class="s-3-1">
                            <p>库存周转率</p>
                            <ve-ring :data="chartData6"></ve-ring>
                        </div>
                        <div class="s-3-2">
                            <p>贷位利率</p>
                            <ve-line :data="chartData7" :settings="chartSettings7" :colors="colors2" style="height:300px;"></ve-line>
                        </div>
                    </div>
                    <div class="s-4">
                        <ve-bar :data="chartData8" :settings="chartSettings8" :colors="colors3"></ve-bar>
                    </div>
                </div>
            </div>
            <div class="s-5">
                <p>Copyright © AxurePro, All Rights Reserved.</p>
                <p>作者原创，联系方式：3208508757</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        this.chartSettings = {
            metrics: ["销售额"],
            dimension: ["业务员"]
        };
        this.chartSettings1 = {
            metrics: ["销售额"],
            dimension: ["仓库"]
        };
        this.chartSettings2 = {
            metrics: ["百分比"],
            dimension: ["类别"]
        };
        this.chartSettings3 = {
            metrics: ["销售额"],
            dimension: ["手机"]
        };
        this.chartSettings5 = {
            xAxisType: "time"
        };
        this.chartSettings7 = {
            stack: {
                用户: ["利率"]
            },
            area: true
        };
        this.chartSettings8 = {
            dimension: ["类别"],
            metrics: ["完成率"]
        };
        return {
            colors: ["rgb(56,160,255)"],
            colors1: ["rgb(56,160,255)"],
            colors2: ["rgb(174,211,244)"],
            colors3: ["rgb(56,160,255)"],
            activeName: 0,
            chartData: {
                columns: ["业务员", "销售额"],
                rows: [{
                        业务员: "李铭",
                        销售额: 700
                    },
                    {
                        业务员: "王潇",
                        销售额: 690
                    },
                    {
                        业务员: "李张莉",
                        销售额: 950
                    },
                    {
                        业务员: "小伊伊",
                        销售额: 1450
                    },
                    {
                        业务员: "李咪咪",
                        销售额: 2150
                    },
                    {
                        业务员: "赵小红",
                        销售额: 2520
                    },
                    {
                        业务员: "小明",
                        销售额: 2660
                    },
                    {
                        业务员: "李咪咪",
                        销售额: 2150
                    },
                    {
                        业务员: "李张莉",
                        销售额: 950
                    },
                    {
                        业务员: "小花",
                        销售额: 440
                    },
                    {
                        业务员: "小兰",
                        销售额: 1100
                    },
                    {
                        业务员: "小菊",
                        销售额: 1800
                    }
                ]
            },
            chartData1: {
                columns: ["仓库", "销售额"],
                rows: [{
                        仓库: "1号仓库",
                        销售额: 390
                    },
                    {
                        仓库: "2号仓库",
                        销售额: 420
                    },
                    {
                        仓库: "3号仓库",
                        销售额: 570
                    },
                    {
                        仓库: "4号仓库",
                        销售额: 850
                    },
                    {
                        仓库: "5号仓库",
                        销售额: 1190
                    },
                    {
                        仓库: "6号仓库",
                        销售额: 1520
                    },
                    {
                        仓库: "7号仓库",
                        销售额: 1700
                    },
                    {
                        仓库: "8号仓库",
                        销售额: 1660
                    }
                ]
            },
            chartData2: {
                columns: ["类别", "百分比"],
                rows: [{
                        类别: "手机47.19%",
                        百分比: 4717
                    },
                    {
                        类别: "电视",
                        百分比: 2830
                    },
                    {
                        类别: "电脑",
                        百分比: 943
                    },
                    {
                        类别: "智能设备",
                        百分比: 472
                    },
                    {
                        类别: "电子产品",
                        百分比: 283
                    },
                    {
                        类别: "穿戴设备",
                        百分比: 189
                    },
                    {
                        类别: "服务器",
                        百分比: 472
                    },
                    {
                        类别: "智能家电",
                        百分比: 94
                    }
                ]
            },
            chartData3: {
                columns: ["仓库", "销售额"],
                rows: [{
                        手机: "华为科技",
                        销售额: 390
                    },
                    {
                        手机: "小米科技",
                        销售额: 420
                    },
                    {
                        手机: "oppo",
                        销售额: 570
                    },
                    {
                        手机: "vivo",
                        销售额: 850
                    },
                    {
                        手机: "apple",
                        销售额: 1190
                    },
                    {
                        手机: "一家科技",
                        销售额: 1520
                    },
                    {
                        手机: "lenov",
                        销售额: 1700
                    },
                    {
                        手机: "华为科技",
                        销售额: 1660
                    }
                ]
            },
            chartData4: {
                columns: ["日期", "销售金额", "毛利润"],
                rows: [{
                        日期: "2019-05-01",
                        销售金额: 13930,
                        毛利润: 20368
                    },
                    {
                        日期: "2019-05-06",
                        销售金额: 144440,
                        毛利润: 34059.6
                    },
                    {
                        日期: "2019-05-11",
                        销售金额: 30000,
                        毛利润: 5533.76
                    },
                    {
                        日期: "2019-05-16",
                        销售金额: 7890,
                        毛利润: 664.23
                    },
                    {
                        日期: "2019-05-21",
                        销售金额: 46580,
                        毛利润: 18080.4
                    },
                    {
                        日期: "2019-05-26",
                        销售金额: 15642,
                        毛利润: 5600
                    },
                    {
                        日期: "2019-05-31",
                        销售金额: 4300,
                        毛利润: 637.7
                    }
                ]
            },
            chartData5: {
                columns: ["日期", "入库", "出库", "盘点", "调拨", "补货"],
                rows: [{
                        日期: "2019-05-01",
                        入库: 7098,
                        出库: 18080,
                        盘点: 1278.33,
                        调拨: 10000,
                        补货: 12180
                    },
                    {
                        日期: "2019-05-02",
                        入库: 5525,
                        出库: 100000,
                        盘点: 294.76,
                        调拨: 91036,
                        补货: 94110
                    },
                    {
                        日期: "2019-05-03",
                        入库: 3710,
                        出库: 2400,
                        盘点: 2109.02,
                        调拨: 5680,
                        补货: 3500
                    },
                    {
                        日期: "2019-05-04",
                        入库: 924.67,
                        出库: 2400,
                        盘点: 4895.33,
                        调拨: 5680,
                        补货: 3500
                    },
                    {
                        日期: "2019-05-05",
                        入库: 22904.5,
                        出库: 60000,
                        盘点: 17070.32,
                        调拨: 51920,
                        补货: 54100
                    },
                    {
                        日期: "2019-05-06",
                        入库: 34059.3,
                        出库: 144000,
                        盘点: 28239.4,
                        调拨: 135231,
                        补货: 138100
                    },
                    {
                        日期: "2019-05-07",
                        入库: 10003.3,
                        出库: 2100,
                        盘点: 3309.13,
                        调拨: 5980,
                        补货: 3800
                    },
                    {
                        日期: "2019-05-08",
                        入库: 11470.4,
                        出库: 4200,
                        盘点: 4193.55,
                        调拨: 3880,
                        补货: 1700
                    },
                    {
                        日期: "2019-05-09",
                        入库: 3556.25,
                        出库: 10300,
                        盘点: 5237.98,
                        调拨: 2220,
                        补货: 4400
                    },
                    {
                        日期: "2019-05-10",
                        入库: 5567.45,
                        出库: 30000,
                        盘点: 7778.66,
                        调拨: 21920,
                        补货: 24100
                    },
                    {
                        日期: "2019-05-11",
                        入库: 6643.21,
                        出库: 30000,
                        盘点: 10234.2,
                        调拨: 21920,
                        补货: 24100
                    },
                    {
                        日期: "2019-05-12",
                        入库: 3877.2,
                        出库: 76556.73,
                        盘点: 5555.12,
                        调拨: 6920,
                        补货: 9100
                    },
                    {
                        日期: "2019-05-16",
                        入库: 45.73,
                        出库: 5000,
                        盘点: 4896.33,
                        调拨: 3080,
                        补货: 350
                    },
                    {
                        日期: "2019-05-17",
                        入库: 5615.85,
                        出库: 6250,
                        盘点: 956.07,
                        调拨: 1830,
                        补货: 3500
                    },
                    {
                        日期: "2019-05-18",
                        入库: 23438.31,
                        出库: 2400,
                        盘点: 17002.47,
                        调拨: 5680,
                        补货: 3500
                    },
                    {
                        日期: "2019-05-21",
                        入库: 52400.14,
                        出库: 1093,
                        盘点: 46582.24,
                        调拨: 2305,
                        补货: 3500
                    },
                    {
                        日期: "2019-05-22",
                        入库: 6315.44,
                        出库: 2400,
                        盘点: 495.34,
                        调拨: 2305,
                        补货: 2600
                    },
                    {
                        日期: "2019-05-23",
                        入库: 60244.5,
                        出库: 19800,
                        盘点: 54424.4,
                        调拨: 4780,
                        补货: 13900
                    },
                    {
                        日期: "2019-05-26",
                        入库: 2011.01,
                        出库: 5600,
                        盘点: 190.1,
                        调拨: 2480,
                        补货: 300
                    },
                    {
                        日期: "2019-05-27",
                        入库: 22400.85,
                        出库: 36160,
                        盘点: 18987.2,
                        调拨: 28080,
                        补货: 30260
                    },
                    {
                        日期: "2019-05-28",
                        入库: 1620.07,
                        出库: 26555,
                        盘点: 4199.93,
                        调拨: 18475,
                        补货: 20655
                    },
                    {
                        日期: "2019-05-31",
                        入库: 18783.58,
                        出库: 637.7,
                        盘点: 12963.07,
                        调拨: 7442,
                        补货: 5262
                    }
                ]
            },
            chartData6: {
                columns: ["状态", "比例"],
                rows: [{
                        状态: "完成",
                        比例: 8056
                    },
                    {
                        状态: "未完成",
                        比例: 1944
                    }
                ]
            },
            chartData7: {
                columns: ["日期", "利率"],
                rows: [{
                        日期: "Jan",
                        利率: 7
                    },
                    {
                        日期: "Feb",
                        利率: 6.9
                    },
                    {
                        日期: "Mar",
                        利率: 9.5
                    },
                    {
                        日期: "Apr",
                        利率: 14.5
                    }
                ]
            },
            chartData8: {
                columns: ["类别", "完成率"],
                rows: [{
                        类别: "集货",
                        完成率: 18.4
                    },
                    {
                        类别: "装箱",
                        完成率: 14.5
                    },
                    {
                        类别: "补货",
                        完成率: 9.5
                    },
                    {
                        类别: "拣货",
                        完成率: 6.9
                    },

                    {
                        类别: "上架",
                        完成率: 7
                    }
                ]
            }
        };
    },
    methods: {
        dianji() {
            this.activeName = 0;
        },
        dianji1() {
            this.activeName = 1;
        }
    }
};
</script>

<style scoped>
.flex {
    display: flex;
}

.sanji {
    background-color: rgb(240, 242, 245);
    width: 100%;
}

.tou {
    background-color: white;
    height: 50px;
    margin-top: 20px;
}

.tou-2 {
    float: left;
    margin-top: 5px;
}

.tou-1 {
    float: right;
    margin-right: 30px;
    margin-top: 5px;
}

.tou-2>p:nth-child(1) {
    width: 5px;
    height: 30px;
    background: rgb(0, 121, 254);
    margin-left: 10px;
}

.tou-2>p:nth-child(2) {
    color: rgb(153, 153, 153);
    font-size: 20px;
    font-weight: bolder;
    margin-left: 5px;
}

.tou-1 {
    margin-left: 1050px;
}

.tou-1>p {
    width: 70px;
    height: 30px;
    border: 1px solid rgb(228, 228, 228);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(153, 153, 153);
}

.tou-1>p:nth-child(2) {
    margin-left: 10px;
}

.tou-1>p:hover {
    background-color: rgb(242, 242, 242);
    cursor: pointer;
}

.tou-1>p>i {
    font-weight: bolder;
}

.qiehuan {
    margin: 5px 0;
}

.qiehuan p {
    font-size: 18px;
    background-color: white;
    height: 30px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
}

.active {
    background-color: rgb(61, 132, 231) !important;
    color: white;
}

.x-1 {
    background-color: white;
    width: 98%;
    margin-left: 1%;
    height: 170px;
}

.x-1>div {
    width: 25%;
    text-align: center;
}

.shuxian {
    display: inline-block;
    width: 5px;
    height: 20px;
    background-color: rgba(0, 0, 255, 0.781);
    margin-left: 20px;
    margin-right: 5px;
}

.x-1>div>p:nth-child(1),
.x-1>div>p:nth-child(3) {
    font-size: 16px;
    margin-top: 10px;
}

.x-1>div>p:nth-child(2),
.x-1>div>p:nth-child(4) {
    font-size: 22px;
    font-weight: bolder;
}

.x-1>div {
    padding-top: 10px;
}

.x-2-1 {
    width: 50%;
    background-color: white;
}

.x-2-2 {
    width: 50%;
    background-color: white;
    margin-left: 4%;
}

.x-2 {
    margin-top: 20px;
    display: flex;
    width: 98%;
    margin-left: 1%;
    height: 420px;
}

.x-2-1>p {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 18px;
    font-weight: bolder;
}

.x-2-2>p {
    margin-top: 15px;
    margin-left: 15px;
    font-size: 18px;
    font-weight: bolder;
}

.ac1_es {
    background-color: white !important;
    display: inline-block;
    width: 55%;
}

.xianshi {
    background-color: rgb(240, 242, 245);
    height: 1600px;
}

.padtop-10 {
    padding: 10px 0;
}

.x-3 {
    display: flex;
    margin-left: 1%;
    width: 98%;
}

.x-3-1 {
    width: 50%;
    background-color: white;
    margin-top: 2%;
}

.x-3-2 {
    width: 50%;
    background-color: white;
    margin-top: 2%;
    margin-left: 4%;
}

.x-2-1>.ve-histogram {
    width: 90% !important;
}

.x-3-1>.ve-histogram {
    width: 90% !important;
}

.x-3-2>.ve-histogram {
    width: 90% !important;
}

.x-3-1>p {
    padding-left: 15px;
    padding-top: 15px;
    font-size: 18px;
    font-weight: bolder;
}

.x-3-2>p {
    padding-left: 15px;
    padding-top: 15px;
    font-size: 18px;
    font-weight: bolder;
}

.x-4 {
    width: 98%;
    margin-left: 1%;
    margin-top: 15px;
    background-color: white;
}

.x-4>p {
    height: 20px;
}

.x-4>.ve-histogram {
    width: 90% !important;
}

.x-5 {
    width: 98%;
    margin-left: 1%;
    height: 81px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.x-5>p {
    color: rgb(204, 204, 204);
}

.xianshi1 {
    background-color: rgb(240, 242, 245);
}

.s-1 {
    width: 98%;
    margin-left: 1%;
    background-color: white;
    padding-top: 15px;
    height: 160px;
}

.bg-bai {
    background-color: white;
}

.s-1>div {
    width: 15%;
    border: 1px solid rgb(233, 233, 233);
    margin-left: 1.3%;
    background-color: rgb(253, 253, 253);
    height: 138px;
    line-height: 40px;
    text-align: center;
}

.s-1>div>p:nth-child(1) {
    margin-top: 28px;
    font-size: 16px;
    color: rgb(102, 102, 102);
}

.s-1>div>p:nth-child(2) {
    font-size: 20px;
    font-weight: bolder;
    color: rgb(102, 102, 102);
}

.s-3 {
    background-color: white;
}

.s-2 {
    display: flex;
}

.s-2>.ac1_es:nth-child(1) {
    width: 49%;
}

.s-2>.ac1_es:nth-child(1)>p {
    font-size: 18px;
    font-weight: bolder;
    margin-left: 20px;
    margin-top: 20px;
}

.s-2>.ac1_es:nth-child(1)>.ve-line {
    margin-top: 20px;
}

.s-2>.ac1_es:nth-child(2) {
    width: 48%;
    margin-left: 2%;
}

.s-2>.ac1_es:nth-child(1)>.ve-line {
    width: 90%;
}

.s-3-1,
.s-3-2 {
    width: 50%;
}

.s-3-1>p,
.s-3-2>p {
    font-size: 18px;
    font-weight: bolder;
    margin-left: 20px;
    margin-top: 20px;
}

.s-3-1>.ve-ring {
    margin-top: 20px;
}

.s-3-2>.ve-line {
    margin-top: 20px;
}

.s-5>p {
    color: rgb(208, 209, 209);
    text-align: center;
    font-size: 14px;
}

.s-5>p:nth-child(1) {
    margin-top: 20px;
}
</style>
