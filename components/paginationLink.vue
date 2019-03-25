<template>
  <li>
    <nuxt-link
      v-if="page!=='...'"
      class="pagination-link"
      :aria-label="'Goto page'+ page"
      :class="{'is-current': current}"
      :aria-current="(current) ? 'page': ''"
      @click.prevent="$emit('page', page)"
      :to="'/memes/' + page"
    >
      {{page}}
    </nuxt-link>
    <span  v-if="page==='...'" class="pagination-ellipsis">&hellip;</span>
  </li>
</template>

<script>
    export default {
        name: "paginationLink",
        props:['page', 'current']
    }
</script>

<style scoped>

</style>
