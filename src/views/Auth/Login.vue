<template>
  <v-container fluid class="login">
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex sm-12>
          <h1>Login Page</h1>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {}
    },
    methods: {
      goTo ( to ) {
        this.$router.push( { name: to } )
      },
    },
  }
</script>
