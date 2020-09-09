<template>
<el-menu class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe" router>
    <div class="title1">
        <i class="el-icon-notebook-2"></i>&nbsp;
        <span>用户管理</span>
    </div>
    <el-menu-item index="/index/yuangong" class="juzhong">
        <span>员工管理</span>
    </el-menu-item>
    <el-menu-item index="/index/juese" class="juzhong">
        <span slot="title">角色管理</span>
    </el-menu-item>
    <el-menu-item index="/index/bumen" class="juzhong">
        <span slot="title">部门管理</span>
    </el-menu-item>
</el-menu>
</template>

<script>
export default {

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
