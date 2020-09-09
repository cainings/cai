<template>
<div>
    <el-menu class="el-menu-vertical-demo" background-color="rgba(234, 237, 241, 1)" text-color="#757981" active-text-color="#1f89fe" router>
        <div class="title1">
            <i class="el-icon-notebook-2"></i>&nbsp;
            <span>报表数据</span>
        </div>
        <el-menu-item index="/index/qindan" class="juzhong">
            <span>库存清单</span>
        </el-menu-item>
        <el-menu-item index="/index/kechukucun" class="juzhong">
            <span slot="title">可出库存</span>
        </el-menu-item>
        <el-menu-item index="/index/qichu" class="juzhong">
            <span slot="title">期初期末</span>
        </el-menu-item>
        <el-menu-item index="/index/kucuntaizhang" class="juzhong">
            <span slot="title">库存台账</span>
        </el-menu-item>
        <el-menu-item index="/index/kucunyujing" class="juzhong">
            <span slot="title">库存预警</span>
        </el-menu-item>
        <el-menu-item index="/index/rongliang" class="juzhong">
            <span slot="title">库存容量</span>
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
