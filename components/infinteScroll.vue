<template>
    <div @scroll.native="scroll"><slot></slot></div>
</template>

<script>
    export default {
        name: "infinteScroll",
        methods:{
            scroll(e) {
                console.log(e);
                console.log(this.$el.clientHeight);
            }
        }
    }
</script>

<style scoped>

</style>