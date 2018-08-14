<template>
  <v-flex xs12>
    <v-toolbar flat>
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" :to="{name: 'UsersCreate'}">
        <v-icon>person_add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="users"
      :loading="loading"
      hide-actions
      class="elevation-1"
    >
      <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
      <template slot="items" slot-scope="props">
        <td>
          <router-link :to="{name: 'User', params: {id: props.item._id}}">
            {{ props.item.fullName }}
          </router-link>
        </td>
        <td>{{ props.item.alias }}</td>
        <td>
          <v-menu open-on-hover>
            <v-chip slot="activator">
              <span> {{ props.item.totalPoints }} </span>
            </v-chip>
            <v-card>
              <v-chip>
                <span> <v-icon color="green" class="body-1">thumb_up</v-icon> {{ props.item.positivePoints }} </span>
              </v-chip>
              <v-chip>
                <span> <v-icon color="red" class="body-1">thumb_down</v-icon> {{ props.item.negativePoints }} </span>
              </v-chip>
              <v-chip>
                <span> <v-icon color="blue" class="body-2">credit_card</v-icon> {{ props.item.usedPoints }} </span>
              </v-chip>
            </v-card>
          </v-menu>
        </td>
        <td>
          <v-btn icon small @click="updatePoints(props.item._id, 'add')">
            <v-icon color="teal">thumb_up</v-icon>
          </v-btn>
          <v-btn icon small @click="updatePoints(props.item._id, 'subtract')">
            <v-icon color="pink">thumb_down</v-icon>
          </v-btn>
          <v-btn icon small @click="updatePoints(props.item._id, 'use')">
            <v-icon color="indigo">credit_card</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
    <pre>{{ users }}</pre>
  </v-flex>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'UsersList',
    created () {
      this.$store.dispatch( 'getAllUsers' )
    },
    data () {
      return {
        headers: [
          { text: 'Name', value: 'fullName' },
          { text: 'Alias', value: 'alias' },
          { text: 'Points', value: 'totalPoints' },
          { text: 'Actions', value: '', align: 'left' },
        ],
      }
    },
    computed: {
      ...mapGetters( [ 'loading', 'users' ] ),
    },
    methods: {
      updatePoints ( id, type ) {
        console.log( id, type )
      },
    },
  }
</script>
