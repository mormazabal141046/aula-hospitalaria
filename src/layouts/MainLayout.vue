<template>
   <q-layout view="lHh LpR lFr">
      <q-header elevated>
         <q-toolbar>
            <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
            <div class="module-name q-pl-md ellipsis">Aula Hospitalaria</div>
            <q-toolbar-title class="text-center flex justify-center">
               <div class="header-logo">
                  <img src="logo_aula.svg" alt="Logo" >
               </div>
            </q-toolbar-title>
            <q-toggle v-model="dark_mode" color="teal-10" checked-icon="o_dark_mode"  unchecked-icon="o_light_mode"  dense class="q-mr-md"  @update:model-value="$q.dark.toggle()" />
            <q-chip color="blue-10" text-color="white" class="cursor-pointer">
               <q-avatar>
               <img src="https://cdn.quasar.dev/img/avatar4.jpg">
               </q-avatar>
               {{ store.currentUser.names }} {{ store.currentUser.lastname }}
               <q-menu :offset="[0,15]">
               <div class="row no-wrap q-pa-md">
                  <div class="column justify-between">
                     <div><b>{{ store.currentUser.names }} {{ store.currentUser.lastname }}</b></div>
                     <div>
                     <div class="text-caption">{{ store.currentUser.role }}</div>
                     <div class="text-caption">{{ store.currentUser.email }}</div>
                     </div>
                     <!-- <q-btn color="secondary" label="Contraseña" unelevated size="sm"  class="q-mt-sm" @click="showModal = !showModal" v-close-popup /> -->
                  </div>
                  <q-separator vertical inset class="q-mx-lg" />

                  <div class="column items-center justify-between">
                     <div class="text-caption q-mb-xs"><b>PERFIL</b></div>

                     <q-avatar size="52px" class="q-mb-md">
                     <img src="https://cdn.quasar.dev/img/avatar4.jpg">
                     </q-avatar>

                     <q-btn
                     color="primary"
                     label="Salir"
                     unelevated
                     size="sm"
                     @click="logout"
                     v-close-popup
                     />
                  </div>
               </div>
               </q-menu>
            </q-chip>
         </q-toolbar>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" :show-if-above="false" content-class="bg-grey-1">
         <q-scroll-area style="height: calc(100% - 180px); margin-top: 180px; border-right: 1px solid #ddd;">

            <q-list>
               <!-- <q-separator spaced /> -->
               <q-item-label header>Menú </q-item-label>
               <ListaMenu v-for="link in linksList" :key="link.title" :item="link" />
            </q-list>
         </q-scroll-area>

         <q-img class="absolute-top" src="~assets/bkg-profile-teal.png" style="height: 180px;">
            <div class="absolute-bottom bg-transparent" style="padding: 1rem 2rem;">
               <q-avatar size="56px" class="q-mb-sm">
                  <img src="https://cdn.quasar.dev/img/avatar4.jpg">
               </q-avatar>
               <div class="text-weight-bold">{{ store.currentUser.names }} {{ store.currentUser.lastname }}</div>
               <div>{{ store.currentUser.role }}</div>
               <div>{{ store.currentUser.email }}</div>
            </div>
         </q-img>
      </q-drawer>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script setup>
import { defineComponent, onMounted, ref } from 'vue'
import ListaMenu from 'components/ListaMenu.vue'
import { useUserStore } from '../stores/users'
import { useQuasar, QSpinnerGrid } from 'quasar'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
// const route = useRoute()
const linksList = ref([
   {
      title: 'Dashboard',
      caption: 'Director',
      icon: 'las la-user-shield',
      link: '/director',
      role:['Director', 'Administrador']
   },
   {
      title: 'Dashboard',
      caption: 'Coordinador',
      icon: 'las la-user-tie',
      link: '/coordinator',
      role:['Coordinador']
   },
   {
      title: 'Home',
      caption: 'Alumno',
      icon: 'las la-user-graduate',
      link: '/student',
      role:['Apoderado', 'Alumno']
   },
   {
      title: 'Home',
      caption: 'Docente',
      icon: 'las la-chalkboard-teacher',
      link: '/teacher',
      role:['Docente']
   },
   {
      title: 'Usuarios',
      caption: 'Administración',
      icon: 'las la-users',
      link: '/users',
      role:['Coordinador', 'Administrador']
   },
   {
      title: 'Asignaturas',
      caption: 'Administración',
      icon: 'las la-book',
      link: '/subjects',
      role:['Director','Coordinador']
   },
   {
      title: 'Carga Académica',
      caption: 'Gestionar',
      icon: 'las la-calendar-week',
      link: '/academic',
      role:['Director','Coordinador']
   },
   {
      title: 'Matriculas',
      caption: 'Gestionar',
      icon: 'las la-id-badge',
      link: '/enrolments',
      role:['Director','Coordinador']
   },
])
const leftDrawerOpen = ref(false)
const timer = ref(null)
const store = useUserStore();
const $q = useQuasar()
const dark_mode = ref(false)

defineComponent({
   name: 'MainLayout',
   components: {
      ListaMenu
   },
});

onMounted(()=>{
   // console.log("router", router)
});
const toggleLeftDrawer = () => {
   leftDrawerOpen.value = !leftDrawerOpen.value
}
const logout = async () => {
   timer.value = setTimeout(() => {
      $q.loading.show({
         message: `
            <div class="loading-app">
               <b>Cerrando Sesión...</b>
               <span>Hasta luego <b>${store.currentUser.name} ${store.currentUser.lastname}</b></span>
            </div>`,
         spinner: QSpinnerGrid,
         html: true
      })

      timer.value = setTimeout( async () => {
         await store.SIGN_OUT();
         router.push({name: "login" });
         $q.loading.hide()
         timer.value = void 0
      }, 1500)
   }, 100)
}


</script>

<style lang="scss">
  .q-header{
    background: #00a69b;
  }
  .q-item__label--header{
    padding: 1rem 2rem 1rem 1rem;
  }
  .header-logo{
    background: white;
    padding: 3px 12px;
    border-radius: 5px;
    width: fit-content;
  }
  .header-logo img{
    height: 20px;
  }
  .q-chip{
    background: #068f85 !important;
  }
  .module-name{
    font-size: 16px;
  }
  @media (max-width:768px) {
   .header-logo{
      display: none;
   }
  }
</style>
