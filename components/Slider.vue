<template>
  <div>
  <div class="slider" v-touch:swipe="end" @dragend="end" @dragexit="end" @dragleave="end" @mouseup="end" v-touch:moving="moving" v-touch:start="start" :class="classes" :style="style"><meme :meme="memes[index]"></meme></div>
  <div class="background" ><meme v-if="memes" :meme="memes[index+1]"></meme></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
    import Meme from "./meme";
    export default {
      name: "Slider",
      components: {Meme},
      data(){
        return {
          startX: 0,
          deltaX: 0,
          style: '',
          threshold: 300,
          classes: [],
          index: 0
        }
      },
      methods:{
        start(e){
          console.log(e);
          this.startX = e.touches[0].clientX;
        },
        moving(e){
          console.log(e);
          this.deltaX = e.touches[0].clientX - this.startX;
          if(this.deltaX){
            this.style = 'transform: translateX(' + this.deltaX +'px)';
          }
        },
        end(){
          console.log(this.deltaX);
          if(this.deltaX>this.threshold){
            this.classes.push('right');
            this.next();
          }else if(this.deltaX<-this.threshold){
            this.classes.push('left');
            this.next();
          } else {
            this.classes.push('reset');
            setTimeout(()=> {
              this.style='';
              this.startX=0;
              this.deltaX=0;
              this.classes= [];
            })
          }
        },
        next(){
          setTimeout(()=> {
            this.startX=0;
            this.deltaX=0;
            this.style='';
            this.classes= [];
            this.index++;
          },300);
        }
      },
      computed: {
        ...mapGetters({
          memes: 'memes/memes'
        })
      }
    }
</script>

<style lang="scss">
  .slider{
    position: absolute;
    z-index: 2;

  }
  .background {
    z-index: 1;
    position: absolute;
  }
  .right {
    transition: transform 0.3s;
    transform: translate(50rem) !important;
  }
  .left {
    transition: transform 0.3s;
    transform: translate(-50rem) !important;
  }
  .reset{
    transition: transform 0.3s;
    transform: translate(0) !important;
  }
</style>
