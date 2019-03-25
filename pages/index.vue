<template>
    <meme-slider></meme-slider>
</template>

<script>


import MemeList from "../components/memeList";
import MemeSlider from "../components/MemeSlider";
export default {
    components: {MemeSlider, MemeList},
    mounted(){

    },
    created(){
        this.$store.dispatch('memes/getMemes');
    }
}
</script>
