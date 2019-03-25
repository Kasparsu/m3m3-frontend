<template>
  <div>
      <meme v-for="meme in memes" :key="meme.id" :meme="meme"></meme>
  </div>

</template>

<script>
    import { mapGetters } from 'vuex'
    import Meme from "./meme";
    export default {
        name: "memeList",
        components: {Meme},
        props: ['page'],
        created(){
          if(this.page){
            this.$store.dispatch('memes/getMemePage', this.page);
          } else {
            this.$store.dispatch('memes/getNextMemes');
          }

        },
        computed: {
            ...mapGetters({
                memes: 'memes/memes'
            })
        },

    }
</script>

<style scoped>

</style>
