<template>
  <v-container align-center class="login">
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 text-xs-center>
        <h1>Login</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 text-xs-right>
        <v-form v-model="isValid" ref="form">
          <v-text-field
            v-model="formData.email"
            :rules="[rules.required(), rules.email()]"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="formData.password"
            :rules="[rules.required()]"
            label="Password"
            type="password"
            autocomplete
            required
          ></v-text-field>
          <v-btn @click="submit('form')">submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import rules from '@/helpers/rules'

  export default {
    name: 'Login',
    created () {
      this.rules = rules
    },
    data () {
      return {
        isValid: true,
        formData: {},
        rules: [],
      }
    },
    methods: {
      submit ( form ) {
        if ( this.$refs.form.validate() ) {
          console.log( 'VALID FORM' )
        }
      },
    },
  }
</script>
