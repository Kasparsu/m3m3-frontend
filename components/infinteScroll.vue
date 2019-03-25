<template>
    <div v-scroll="scroll"><slot></slot></div>
</template>

<script>
    export default {
        name: "infinteScroll",
        props: {
          limit: {
            type: Number,
            default: 90,
            validator: (value) => (value <= 100 && value >= 0),
          },
          loading: {
            type:Boolean,
            default: false
          }
        },
        methods:{
            scroll(evt, el) {
              if (!this.loading) {
                let pageBottom = evt.target.scrollingElement.scrollTop + evt.target.defaultView.innerHeight;
                let scrollPercentage = pageBottom * 100 / el.clientHeight;
                if (scrollPercentage > this.limit) {
                  this.$emit('limit');
                }
              }
            }
        }
    }
</script>

<style scoped>

</style>
