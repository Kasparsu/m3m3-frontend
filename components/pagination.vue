<template>
  <div>
    <slot></slot>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
      <a class="pagination-previous" @click="paginate(pagination.current_page -1)">Previous</a>
      <a class="pagination-next" @click="paginate(pagination.current_page +1)">Next page</a>
      <ul class="pagination-list">
        <pagination-link @page="paginate" v-for="page in paging" :page="page" :current="pagination.current_page === page"></pagination-link>
      </ul>
    </nav>
  </div>
</template>

<script>
  import PaginationLink from "./paginationLink";

  export default {
    name: "pagination",
    components: {PaginationLink},
    props: ['pagination'],
    methods: {
      paginate(page){
        this.$emit('page', page);
      },
      paginationArray() {
          let current = this.pagination.current_page,
          last = this.pagination.last_page,
          delta = 2,
          left = current - delta,
          right = current + delta + 1,
          range = [],
          rangeWithDots = [],
          l;

        for (let i = 1; i <= last; i++) {
          if (i === 1 || i === last || i >= left && i < right) {
            range.push(i);
          }
        }

        for (let i of range) {
          if (l) {
            if (i - l === 2) {
              rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
              rangeWithDots.push('...');
            }
          }
          rangeWithDots.push(i);
          l = i;
        }

        return rangeWithDots;
      }
    },
    computed: {
      paging(){
        return this.paginationArray();
      }
    }
  }
</script>

<style scoped>
  .pagination {
    position: sticky;
    bottom: 0px;
    background-color: white;
  }
</style>
