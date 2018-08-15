<template>
  <v-dialog v-model="isVisible" max-width="300">
    <v-card>
      <v-card-title class="headline">Eliminar usuario {{ user.name }}</v-card-title>

      <v-card-text>
        ¿Estás seguro que deseas eliminar este usuario? Esta acción no se puede deshacer.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="cancelDialog"> Cancelar</v-btn>
        <v-btn color="primary" @click="acceptDialog"> Eliminar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<script>
  export default {
    name: 'DialogConfirm',
    props: {
      isVisible: {
        required: true,
        default: false,
      },
      user: {
        required: true,
      },
    },
    data () {
      return {
        dialog: true,
      }
    },
    methods: {
      acceptDialog () {
        this.$emit( 'accept-dialog', this.user._id )
      },
      cancelDialog () {
        this.$emit( 'cancel-dialog' )
      },
    },
  }
</script>
