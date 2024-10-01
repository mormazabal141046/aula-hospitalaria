<template>
  <q-layout view="lHh LpR lFr">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Aula Hospitalaria
        </q-toolbar-title>
        <q-chip color="blue-10" text-color="white" class="cursor-pointer">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
          Mauricio Ormazábal
          <q-menu :offset="[0,15]">
            <div class="row no-wrap q-pa-md">
              <div class="column justify-between">
                <div class="q-mb-xs"><b>Mauricio Ormazábal</b></div>
                <div>
                  <div class="text-caption">Coordinador</div>
                  <div class="text-caption">mormazabal@duoc.cl</div>
                </div>
                  <q-btn color="secondary" label="Contraseña" unelevated size="sm"  class="q-mt-sm" @click="showModal = !showModal" v-close-popup />
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

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-1"
    >
    <q-scroll-area style="height: calc(100% - 180px); margin-top: 180px; border-right: 1px solid #ddd;">

      <q-list>
        <!-- <q-separator spaced /> -->
        <q-item-label header>Menú </q-item-label>
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-scroll-area>

      <q-img class="absolute-top" src="~assets/bkg-profile.png" style="height: 180px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
            <div class="text-weight-bold">Mauricio Ormazábal</div>
            <div>Coordinador</div>
            <div>mormazabal@duoc.cl</div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Dashboard',
    caption: 'Seguimiento',
    icon: 'las la-grip-horizontal',
    link: '/'
  },
  {
    title: 'Usuarios',
    caption: 'Administración',
    icon: 'las la-users',
    link: '/users'
  },
  {
    title: 'Sedes',
    caption: 'Administración',
    icon: 'las la-university',
    link: '/login'
  },
  {
    title: 'Asignaturas',
    caption: 'Administración',
    icon: 'las la-book',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Carga Académica',
    caption: 'Gestionar',
    icon: 'las la-school',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Matriculas',
    caption: 'Gestionar',
    icon: 'las la-id-badge',
    link: 'https://facebook.quasar.dev'
  },
  // {
  //   title: 'Quasar Awesome',
  //   caption: 'Community Quasar projects',
  //   icon: 'favorite',
  //   link: 'https://awesome.quasar.dev'
  // }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
  .q-item__label--header{
    padding: 1rem 2rem;

  }
</style>
