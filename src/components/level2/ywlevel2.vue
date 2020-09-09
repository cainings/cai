<template>
<el-menu class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe" router>
    <div class="title1">
        <i class="el-icon-notebook-2"></i>&nbsp;
        <span>采购销售管理</span>
    </div>
    <el-menu-item index="/index/caigou" class="juzhong">
        <span>采购管理</span>
    </el-menu-item>
    <el-menu-item index="/index/tuihuo" class="juzhong">
        <span slot="title">采购退货</span>
    </el-menu-item>
    <el-menu-item index="/index/xiaoshouMag" class="juzhong">
        <span slot="title">销售管理</span>
    </el-menu-item>
    <el-menu-item index="/index/xiaoshoutuihuo" class="juzhong">
        <span slot="title">销售退货</span>
    </el-menu-item>
</el-menu>
</template>

<script>
export default {

}
</script>

<style scoped>
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
