<template>
  <v-flex xs12>
    <v-card>
      <v-form v-model="isValid" ref="form">
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">New User</h3>
          </div>
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model="formData.email"
            :rules="[rules.required(), rules.email()]"
            label="Email"
            required
          ></v-text-field>
          <v-btn @click="submit('form')" data-cy="submit" :loading="loading">submit</v-btn>
        </v-card-text>

        <v-card-actions>
          <v-btn flat color="orange">Create</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'UsersCreate',
  }
</script>
