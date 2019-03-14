<template>
    <infinte-scroll>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>

                <meme v-for="meme in memes" :meme="meme"></meme>
            </v-flex>
        </v-layout>
    </infinte-scroll>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Meme from "./meme";
    import InfinteScroll from "./infinteScroll";
    export default {
        name: "memeList",
        components: {InfinteScroll, Meme},
        created() {

        },
        computed: {
            ...mapGetters({
                memes: 'memes/memes'
            })
        }
    }
</script>

<style scoped>

</style>