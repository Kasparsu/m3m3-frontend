<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <infinte-scroll @limit="loadNext" :loading="$store.state.memes.loading">
        <meme-list></meme-list>
      </infinte-scroll>
    </div>
  </div>
</template>

<script>


import MemeList from "../components/memeList";

import MemeSlider from "../components/MemeSlider";
export default {
    components: {MemeSlider, MemeList},
    mounted(){

    },
    methods: {
      loadNext(){
        this.$store.dispatch('memes/getNextMemes');
      }
    }
}
</script>
