<template>
    <v-card>
        <v-img
                src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                aspect-ratio="1"
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
  .v-card {
    z-index: 2;
    left: 0;
    top: 0;
    transform-origin: 50% 100%;
  }

  .v-card.reset {
     transition: transform 0.3s;
     transform: translateX(0) !important;
  }

  .v-card.inactive {
     transition: transform 0.3s;
   }

  .v-card.to-left {
     transform: translateX(-50rem) rotate(-50deg) !important;
   }

  .v-card.to-right {
     transform: translate(50rem) rotate(50deg) !important;
   }

  .v-card.below {
     z-index: 1;
   }
</style>
