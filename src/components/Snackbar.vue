<template>
  <v-snackbar
    :value="showSnack"
    :color="snackBar.color"
    :timeout="snackBar.timeout"
    :right="snackBar.x === 'right'"
    :left="snackBar.x === 'left'"
    :bottom="snackBar.y === 'bottom'"
    :top="snackBar.y === 'top'"
  >
    {{ snackBar.text }}
    <v-btn icon flat @click="closeSnack()">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'SnackBar',
    computed: {
      ...mapGetters( [ 'showSnack', 'snackBar' ] ),
    },
    methods: {
      closeSnack () {
        this.$store.dispatch( 'closeSnackBar' )
      },
    },
  }
</script>
