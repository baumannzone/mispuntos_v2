<template>
  <div class="admin">
    <v-container align-center class="login">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 text-xs-center>
          <h1>Admin</h1>
        </v-flex>
        <router-view></router-view>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'Admin',
    data () {
      return {
        headers: [],
      }
    },
    methods: {
      goTo ( to ) {
        this.$router.push( { name: to } )
      },
    },
  }
</script>
