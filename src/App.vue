<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="$t('title')" @click="goTo('Home')"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="goTo('Login')" data-cy="login">
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn icon @click="goTo('Admin')">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </v-content>
    <v-footer app>
      <span class="ml-2">2018</span>
      <v-spacer></v-spacer>
      <span class="mr-2">
        <a href="https://twitter.com/baumannzone">@baumannzone</a>
      </span>
    </v-footer>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
  import Snackbar from '@/components/Snackbar.vue'

  export default {
    name: 'App',
    components: {
      Snackbar,
    },
    data () {
      return {
        fixed: false,
      }
    },
    methods: {
      goTo ( to ) {
        this.$router.push( { name: to } )
      },
    },
  }
</script>

<style scoped>

  .slide-fade-enter-active {
    transition: all .2s linear;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
