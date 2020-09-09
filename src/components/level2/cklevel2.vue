<template>
<div>
    <el-menu class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe" router>
        <div class="title1">
            <i class="el-icon-notebook-2"></i>&nbsp;
            <span>出入库管理</span>
        </div>
        <el-menu-item index="/index/ruku" class="juzhong">
            <span>入库管理</span>
        </el-menu-item>
        <el-menu-item index="/index/chuku" class="juzhong">
            <span slot="title">出库管理</span>
        </el-menu-item>
        <el-menu-item index="/index/yiku" class="juzhong">
            <span slot="title">移库管理</span>
        </el-menu-item>
        <div class="title1">
            <i class="el-icon-notebook-2"></i>&nbsp;
            <span>盘点调拨管理</span>
        </div>
        <el-menu-item index="/index/baosun" class="juzhong">
            <span slot="title">报损管理</span>
        </el-menu-item>
        <el-menu-item index="/index/pandian" class="juzhong">
            <span slot="title">盘点管理</span>
        </el-menu-item>
        <el-menu-item index="/index/diaobo" class="juzhong">
            <span slot="title">调拨管理</span>
        </el-menu-item>
    </el-menu>
</div>
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
