<template>
  <v-flex xs12>
    <v-card>
      <v-form v-model="isValid" ref="form">

        <v-card-text>
          <v-container class="pt-0">
            <v-layout wrap>
              <v-flex xs12>
                <h2>Create user</h2>
                <v-divider></v-divider>
              </v-flex>
              <!--FullName-->
              <v-flex xs12 sm6 px-2>
                <v-text-field
                  v-model="formData.fullName"
                  :rules="[rules.required(), rules.min3()]"
                  label="Full Name"
                  hint="John Snow"
                  persistent-hint
                ></v-text-field>
              </v-flex>
              <!--Alias-->
              <v-flex xs12 sm6 px-2>
                <v-text-field
                  v-model="formData.alias"
                  :rules="[rules.required(), rules.min3()]"
                  label="Alias"
                  hint="Johnny"
                  persistent-hint
                ></v-text-field>
              </v-flex>

              <v-flex xs12 text-xs-right>
                <v-btn @click="submit('form')" color="primary" data-cy="submit" :loading="loading">submit</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
  import { mapGetters } from 'vuex'
  import rules from '@/helpers/rules'

  export default {
    name: 'UsersCreate',
    created () {
      this.rules = rules
    },
    data () {
      return {
        rules: [],
        isValid: true,
        menu: false,
        formData: {
          fullName: '',
          alias: '',
          imgUrl: '',
        },
        defaultData: {
          totalPoints: 0,
          positivePoints: 0,
          negativePoints: 0,
          usedPoints: 0,
          events: [],
          isActive: true,
        },
      }
    },
    computed: {
      ...mapGetters( [ 'loading' ] ),
    },
    methods: {
      submit ( form ) {
        if ( this.$refs.form.validate() ) {
          const payload = { fullName: this.formData.fullName, alias: this.formData.alias, ...this.defaultData }
          console.log( 'payload:' )
          console.log( payload )
          this.$store.dispatch( 'createUser', payload )
        }
      },
    },
  }
</script>
