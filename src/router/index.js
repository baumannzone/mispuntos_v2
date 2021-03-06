import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home/Index.vue'

Vue.use( Router )

const router = new Router( {
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user/:id',
      name: 'User',
      component: () => import( '../views/User/Index' ),
    },
    {
      path: '/admin',
      name: 'Admin',
      // Default go to UsersList
      redirect: { name: 'UsersList' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "Admin" */ '../views/Admin/Index' ),
      children: [
        {
          path: 'users',
          name: 'UsersList',
          component: () => import( '../views/Admin/UsersList' ),
        },
        {
          path: 'users/create',
          name: 'UsersCreate',
          component: () => import( '../views/Admin/UsersCreate' ),
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import( '../views/Auth/Login' ),
    },
    {
      path: '/logout',
      name: 'Logout',
    },
  ],
} )

router.beforeEach( ( to, from, next ) => {
  console.debug( `${from.name} => ${to.name}` )
  next()
} )

export default router
