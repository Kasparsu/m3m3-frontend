<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
     <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link :to="el.url" v-for="el in menuEls" :key="el.title" class="navbar-item" :class="{'is-active': $route.fullPath === el.url}">{{el.title}}</nuxt-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
    export default {
        name: "MainMenu",
      data() {
          return {
            menuEls:[
              {title: 'index', url: '/'},
              {title: 'memes', url: '/memes'},
            ]
          }
      }
    }
</script>

<style lang="scss" scoped>
  .navbar-menu {
    a.is-active {
      border-bottom: 3px solid $primary;
    }
  }
</style>
