<template>
  <div >
    <main-menu></main-menu>
    <div class="columns">

      <div class="column is-12">
        <nuxt />
      </div>
    </div>
  </div>

</template>

<script>
import MainMenu from "../components/MainMenu";
export default {
  components: {MainMenu},
  data() {
    return {
    }
  }
}
</script>
<style lang="scss">

</style>
