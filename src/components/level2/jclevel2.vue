<template>
<el-menu class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe" router>
    <div class="title1">
        <i class="el-icon-notebook-2"></i>&nbsp;
        <span>仓库资料</span>
    </div>
    <el-menu-item index="/index/bCangku" class="juzhong">
        <span>仓库管理</span>
    </el-menu-item>
    <el-menu-item index="/index/bKuwei" class="juzhong">
        <span slot="title">库位管理</span>
    </el-menu-item>
    <el-menu-item index="/index/bShenbei" class="juzhong">
        <span slot="title">设备管理</span>
    </el-menu-item>
    <el-menu-item index="/index/bJiliang" class="juzhong">
        <span slot="title">计量单位</span>
    </el-menu-item>
    <div class="title1">
        <i class="el-icon-notebook-2"></i>&nbsp;
        <span>供应商资料</span>
    </div>
    <el-menu-item index="/index/bgongyingshang" class="juzhong">
        <span slot="title">供应商管理</span>
    </el-menu-item>
    <el-menu-item index="/index/bKehu" class="juzhong">
        <span slot="title">客户管理</span>
    </el-menu-item>
    <el-menu-item index="/index/btype" class="juzhong">
        <span slot="title">产品类别</span>
    </el-menu-item>
    <el-menu-item index="/index/bChanpin" class="juzhong">
        <span slot="title">产品管理</span>
    </el-menu-item>
    <el-menu-item index="/index/chengyunshang" class="juzhong">
        <span slot="title">承运商管理</span>
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
