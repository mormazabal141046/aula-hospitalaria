<template>
   <div class="header-section  q-px-xl">
      <h6 class="q-mb-xs">Dashboard Director</h6>
      <div class="text-caption">Consulta y gestiona cada una de las sedes asignadas.</div>
   </div>
   <div class="container-cards  flex q-pa-md q-px-xl row items-start justify-start">
      <q-card v-for="item in store.headquarters" :key="item.id" class="my-card" flat bordered style="width: 300px;">
         <q-img src="~assets/sede.jpg" style="height: 150px;" />
         <q-card-section>
            <div class="text-overline text-primary">SEDE</div>
            <div class="text-h5 q-mt-none q-mb-xs">{{ item.label }}</div>
            <q-card-section class="q-px-none q-mt-md" horizontal>
               <q-item-section class="q-pa-none">
                  <q-item-label caption>Cordinador</q-item-label>
                  <q-item-label>Pedro Perez</q-item-label>
               </q-item-section>
               <div class="q-pa-none justify-end flex row">
                  <q-btn color="primary" rounded unelevated label="gestionar" @click="goToDetail(item)" />
               </div>
            </q-card-section>
         </q-card-section>
      </q-card>
   </div>
</template>

<script setup>
import { defineComponent, onMounted, ref } from "vue";
import { useGlobalStore } from '../stores/global'
import { useRouter, useRoute } from 'vue-router'

defineComponent({
   name: "DirectorDashboardPage"
})
const router = useRouter()
const route = useRoute()
const store = useGlobalStore()
const expanded = ref(false)
const form = ref({
   subject:""
})
const lorem = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')

onMounted(() => {
   // store.GET_ALL_HEADQUARTERS();
   kiu();
})
const goToDetail = async (route)=>{
   router.push({ name: "aula", params: { value: route.value }});
   return
}
const kiu = async ()=>{

   let miInicializador = { method: 'GET',
   headers:{
      "Content-Type": "application/json"
},
                        mode: 'cors',
                        cache: 'default' };
    fetch('http://localhost:8000/api/administrativo/sedes',miInicializador)
   .then(response => response.json())
   .then(data => console.log(data));
}
</script>


<style lang="scss">
   .container-cards {
      gap: 24px;
   }
</style>
