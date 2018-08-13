<template>
  <div class="admin">
    <v-container align-center class="login">
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3 text-xs-center>
          <h1>Admin</h1>
        </v-flex>
        <v-flex xs12>
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
      </v-layout>
    </v-container>
  </div>
</template>
