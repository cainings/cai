<template>
<div>
    <el-collapse-transition name="el-fade-in-linear">
        <div v-if="type == null || type==1" class="box transition-box">
            <gzlevel></gzlevel>
        </div>
    </el-collapse-transition>

    <el-collapse-transition name="el-fade-in-linear">
        <div v-if="type == 2" class="box transition-box">
            <cklevel></cklevel>
        </div>
    </el-collapse-transition>

    <el-collapse-transition name="el-fade-in-linear">
        <div v-if="type == 3" class="box transition-box">
            <ywlevel></ywlevel>
        </div>
    </el-collapse-transition>

    <el-collapse-transition name="el-fade-in-linear">
        <div v-if="type == 4" class="box transition-box">
            <cwlevel></cwlevel>
        </div>
    </el-collapse-transition>

    <el-collapse-transition name="el-fade-in-linear">
        <div v-if="type == 5" class="box transition-box">
            <bblevel></bblevel>
        </div>
    </el-collapse-transition>

    <el-collapse-transition name="el-fade-in-linear">
        <div v-if="type == 6" class="box transition-box">
            <jclevel></jclevel>
        </div>
    </el-collapse-transition>

    <el-collapse-transition name="el-fade-in-linear" s>
        <div v-if="type == 7" class="box transition-box">
            <xtlevel></xtlevel>
        </div>
    </el-collapse-transition>
</div>
</template>

<script>
import bblevel from "./bblevel2";
import cklevel from "./cklevel2";
import cwlevel from "./cwlevel2";
import gzlevel from "./gzlevel2";
import jclevel from "./jclevel2";
import xtlevel from "./xtlevel2";
import ywlevel from "./ywlevel2";
export default {
    components: {
        bblevel,
        cklevel,
        cwlevel,
        gzlevel,
        jclevel,
        xtlevel,
        ywlevel,
    },
    props: ["type"],
    data() {
        return {};
    },
};
</script>

<style scoped>

</style>
