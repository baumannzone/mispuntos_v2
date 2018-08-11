<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title v-text="$t('title')" @click="goTo('Home')"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="goTo('Login')" id="btn-login">
        <v-icon>account_circle</v-icon>
      </v-btn>
      <v-btn icon @click="goTo('Admin')">
        <v-icon>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer app>
      <span class="ml-2">2018</span>
      <v-spacer></v-spacer>
      <span class="mr-2">
        <a href="https://twitter.com/baumannzone">@baumannzone</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
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
