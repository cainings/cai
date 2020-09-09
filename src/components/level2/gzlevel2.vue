<template>
<div>
    <el-menu class="el-menu-vertical-demo" default-active="/index/shuju" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe" router>
        <div class="title1">
            <i class="el-icon-notebook-2"></i>&nbsp;
            <span>快捷功能</span>
        </div>
        <el-menu-item index="/index/shuju" class="juzhong">
            <span slot="title">数据概览</span>
        </el-menu-item>
        <el-menu-item index="/index/ruku" class="juzhong">
            <span>入库管理</span>
        </el-menu-item>
        <el-menu-item index="/index/chuku" class="juzhong">
            <span>出库管理</span>
        </el-menu-item>
        <el-menu-item index="/index/pandian" class="juzhong">
            <span>盘点管理</span>
        </el-menu-item>
        <div class="title1">
            <i class="el-icon-notebook-2"></i>&nbsp;
            <span>报表分析</span>
        </div>
        <el-menu-item index="/index/cangku" class="juzhong">
            <span>仓库台账</span>
        </el-menu-item>
        <el-menu-item index="/index/yujing" class="juzhong">
            <span>库存预警</span>
        </el-menu-item>
        <el-menu-item index="/index/qingdan" class="juzhong">
            <span>库存清单</span>
        </el-menu-item>
        <el-menu-item index="/index/caiwu" class="juzhong">
            <span>财务记账</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    methods: {},
}
</script>

<style scoped>
.box {
    height: 752px;
    box-sizing: border-box;
    background-color: rgba(234, 237, 241, 1);
}

.is-active {
    background-color: white !important;
}

.title1 {
    color: #757981;
    background-color: whitesmoke;
    text-align: center;
    padding: 20px 0;
}

.juzhong {
    text-align: center;
    border-bottom: 1px solid gainsboro;
}
</style>
