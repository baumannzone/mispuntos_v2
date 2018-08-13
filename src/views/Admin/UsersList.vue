<template>
  <v-flex xs12>
    <v-toolbar flat>
      <v-toolbar-title>Users</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="goTo('UsersCreate')">
        <v-icon>person_add</v-icon>
      </v-btn>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="users"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>
  </v-flex>
</template>

<script>

  export default {
    name: 'UsersList',
    data () {
      return {
        headers: [],
        users: [],
      }
    },
    methods: {
      goTo ( to ) {
        this.$router.push( { name: to } )
      },
    },
  }
</script>
