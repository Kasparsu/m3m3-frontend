<template>
    <v-card>
        <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">{{meme.title}}</h3>
            </div>
        </v-card-title>
    </v-card>
</template>

<script>
    export default {
        name: "meme",
        props: ['meme'],
        created(){

        }
    }
</script>

<style scoped>

</style>