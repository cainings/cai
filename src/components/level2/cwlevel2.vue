<template>
<el-menu class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe" router>
    <div class="title1">
        <i class="el-icon-notebook-2"></i>&nbsp;
        <span>财务数据</span>
    </div>
    <el-menu-item index="/index/caiwuType" class="juzhong">
        <span>财务类别</span>
    </el-menu-item>
    <el-menu-item index="/index/yingshou" class="juzhong">
        <span slot="title">应收管理</span>
    </el-menu-item>
    <el-menu-item index="/index/jizhang" class="juzhong">
        <span slot="title">财务记账</span>
    </el-menu-item>
</el-menu>
</template>

<script>
export default {}
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
