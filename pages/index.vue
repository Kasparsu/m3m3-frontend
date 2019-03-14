<template>
    <meme-list></meme-list>
</template>

<script>


import MemeList from "../components/memeList";
export default {
    components: {MemeList},
    mounted(){

    },
    created(){
        this.$store.dispatch('memes/getMemes');
    }
}
</script>
