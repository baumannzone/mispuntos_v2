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

  beforeEach( () => {
    wrapper = shallowMount( App, {
      localVue,
      mocks: {
        $t: () => {},
      },
    } )
  } )

  it( 'Tiene componente Snackbar', () => {
    expect( wrapper.contains( Snackbar ) )
  } )

  it( 'Logo es una img', () => {
    const logo = wrapper.find( '#logo' )
    expect( logo.is( 'img' ) ).toBe( true )
  } )

  // it( 'Tiene footer', () => {
  //   const footer = wrapper.find( 'v-footer-stub' )
  //   console.debug( 'footer: ' )
  //   console.debug( footer )
  //   expect( footer.is( 'v-footer-stub' ) ).toBe( true )
  // } )
} )
