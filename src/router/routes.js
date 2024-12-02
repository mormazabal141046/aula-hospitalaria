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
    props: true,
    children: [
      { path: '/director', component: () => import('pages/DirectorDashboardPage.vue'), name: 'Director', label: "Dashboard - Director"},
      { path: '/coordinator', component: () => import('pages/CoordinatorDashboardPage.vue'), name: 'Coordinador' , label: "Dashboard - Coordinador"},
      { path: '/student', component: () => import('pages/StudentHome.vue'), name: 'Alumno' , label: "Home"},
      { path: '/teacher', component: () => import('pages/TeacherDashboard.vue'), name: 'Docente' , label: "Home"},
      { path: '/users', component: () => import('pages/UsersPage.vue'), name: 'Administrador', label: "Administración Usuarios" },
      { path: '/enrolments', component: () => import('pages/EnrolmentPage.vue'), name: 'enrolments' , label: "Matriculas"},
      { path: '/academic', component: () => import('pages/AcademicPage.vue'), name: 'academic' , label: "Carga Académica"},
      { path: '/subjects', component: () => import('pages/SubjectsPage.vue'), name: 'subjects' , label: "Asignaturas"},
      { path: '/aula/:value/detail', component: () => import('pages/DetailDashboardByAulaPage.vue'), name: 'aula', props: true }    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
