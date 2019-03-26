<template>
  <div class="columns is-centered">
    <div class="column is-5 is-5-mobile">
        <slider v-if="$store.state.memes.list.length"></slider>
    </div>
  </div>
</template>

<script>


import MemeList from "../components/memeList";

import MemeSlider from "../components/MemeSlider";
import Slider from "../components/Slider";
export default {
    components: {Slider, MemeSlider, MemeList},
    created(){
      this.$store.dispatch('memes/getNextMemes');
    },
    methods: {
      loadNext(){
        this.$store.dispatch('memes/getNextMemes');
      }
    }
}
</script>
<style>
  .box{
    background-color: #47494e;
  }
</style>
