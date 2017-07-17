const routes = [
  {
    path: '/',
    name: 'homePage',
    component: require('../views/MovieList.vue')
  },
  {
    path: '/movielist',
    name: 'movieList',
    component: require('../views/MovieList.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: require('../views/Login.vue')
  },
  // {
  //   path: '/setting',
  //   name: 'setting'
  // },
  // {
  //   path: '/admin',
  //   name: 'admin'
  // },
  // {
  //   path: '/source',
  //   name: 'source'
  // },
  {
    path: '/*',
    component: require('../views/MovieList.vue')
  }
]

export default routes
