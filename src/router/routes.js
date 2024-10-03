const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/login', component: () => import('pages/LoginPage.vue'), name: 'login' },
    ]
  },
  {
    path: '/logout',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '/logout', component: () => import('pages/LogoutPage.vue'), name: 'logout' },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { authorize: true },
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue'), name: 'app'},
      { path: '/users', component: () => import('pages/UsersPage.vue'), name: 'users' },
      { path: '/carga', component: () => import('pages/CargaAcademica.vue'), name: 'carga' },
      { path: '/asignaturas', component: () => import('pages/Asignaturas.vue'), name: 'asignaturas' },
      { path: '/matriculas', component: () => import('pages/Matriculas.vue'), name: 'matriculas' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
