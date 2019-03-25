<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <meme :class="classes" :style="css" v-touch:swipe="endHandler" v-touch:moving="movingHandler" v-touch:start="touchHandler" v-if="active==index" v-for="(meme,index) in memes" :meme="meme"></meme>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Meme from "./meme";
    export default {
      components: {Meme},
      name: "MemeSlider",
      data(){
        return {
          active: 1,
          animating: false,
          cardsCounter: 0,
          numOfCards:6,
          decisionVal: 80,
          pullDeltaX: 0,
          deg: 0,
          startX: 0,
          css: '',
          class: '',
          classes: [],
        }
      },
      methods: {
        touchHandler(e){
          this.startX = e.touches[0].pageX;
        },
        movingHandler(e){
          let x = e.touches[0].pageX;
          this.pullDeltaX = (x - this.startX);
          if (!this.pullDeltaX) return;
            this.pullChange();
        },
        pullChange(){
          this.animating = true;
          this.deg = this.pullDeltaX / 10;
          this.css = "transform: translateX("+ this.pullDeltaX +"px)";
        },
        endHandler(){
          if (!this.pullDeltaX) return; // prevents from rapid click events
            githis.release();
        },
        release(){
          if (this.pullDeltaX >= this.decisionVal) {
            this.classes.push('to-right');
          } else if (this.pullDeltaX <= -this.decisionVal) {
            this.classes.push('to-left')
          }
          if (Math.abs(this.pullDeltaX) >= this.decisionVal) {
            this.classes.push('inactive')
          }
          setInterval(()=>{
            this.classes = [];
          }, 300)
          if (Math.abs(this.pullDeltaX) < this.decisionVal) {
            this.classes.push("reset");
          }
          setTimeout(function() {
            this.css = '';
            this.classes = [];
            this.pullDeltaX = 0;
            this.animating = false;
          }, 300);
          this.css = '';
        }
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
