// 这个是子组件
<template>
<div>
    <button @click="toContent">点击向父组件传值<tton>
</div>
</template>

<script>
export default {
    data() {
        return {
            content: '往父组件传递的值'
        }
    },
    methods: {
        toContent() {
            this.$emit('show', this.content)
        }
    },
}
</script>

<style>

</style>
// 这个是父组件
<template>
<div>
    <children @show="show"><ildren>
</div>
</template>

<script>
import children from '@/componentslider'
export default {
    components: {
        children
    },
    methods: {
        show(val) {
            alert(val)
        }
    },
}
</script>

<style>

</style>