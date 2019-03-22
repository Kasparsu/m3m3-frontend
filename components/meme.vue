<template>
  <div class="section">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{meme.title}}
        </p>
      </header>
      <div class="card-image">
        <figure class="image">
          <img :src="meme.image.path" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <a v-for="tag in meme.tags" href="#">#{{tag.name}} </a>
          <br>
          <time :datetime="$moment(meme.created_at).format()">{{$moment(meme.created_at).fromNow()}}</time>
        </div>
      </div>
    </div>
  </div>

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
