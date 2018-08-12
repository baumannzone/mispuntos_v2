import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import App from '@/App.vue'
import Snackbar from '@/components/Snackbar.vue'

const localVue = createLocalVue()
localVue.use( Vuetify )
localVue.use( VueRouter )

describe( 'Testeando componente App.vue', () => {
  let wrapper
  // vm

  beforeEach( () => {
    wrapper = shallowMount( App, {
      localVue,
      mocks: {
        $t: () => {},
      },
    } )
  } )

  it( 'Tiene componente Snackbar', () => {
    const snackBar = wrapper.find( Snackbar )
    expect( snackBar.is( Snackbar ) ).toBe( true )
  } )

  it( 'Logo es una img', () => {
    const logo = wrapper.find( '#logo' )
    expect( logo.is( 'img' ) ).toBe( true )
  } )
} )
