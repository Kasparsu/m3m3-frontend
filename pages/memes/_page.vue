<template>
  <div class="columns is-centered">
    <div class="column is-5">
      <pagination :pagination="$store.state.memes.pagination" @page="page">
        <meme-list :page="$route.params.page"></meme-list>
      </pagination>
    </div>
  </div>
</template>

<script>
  import Pagination from "../../components/pagination";
  import MemeList from "../../components/memeList";
  export default {
    name: "page",
    components: {MemeList, Pagination},
    methods: {
      page(page){
        this.$store.dispatch('memes/getMemePage', page);
      }
    }
  }
</script>

<style scoped>

</style>
