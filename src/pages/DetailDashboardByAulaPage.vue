<template>
   <div class="header-section q-px-md-xl q-px-md q-mt-md-xl q-mt-lg">
      <div class="row items-center " style="gap: 8px;">
         <h6 class="q-mb-xs q-mt-none text-capitalize"> Sede {{aulaActive}}</h6>
         <div class="text-overline q-mr-xs"> - DETALLE</div>
      </div>
      <div class="text-caption">Revisa el progreso y status de la sede, asi como las solicitudes entrantes.</div>
   </div>
   <div class="row-md column">
      <div class="container-cards no-wrap q-pa-md q-pl-md-xl column items-stretch justify-start col-4">
         <q-card class="my-card col bg-teal-8 text-teal-1" flat bordered>
            <q-card-section horizontal class="full-height">
               <q-card-section class="col-5 column flex-center">
                  <q-icon name="las la-user-graduate" size="100px"></q-icon>
                  <div class="text-overline">DETALLE</div>
               </q-card-section>
               <q-separator vertical />
               <q-card-section class="col q-py-xs flex column justify-center items-center bg-teal-5 text-teal-1">
                  <div class="text-h5 q-mt-NONE q-mb-xs">Alumnos</div>
                  <div class="text-caption text-teal-1">
                     Matriculados
                  </div>
                  <h3 class="q-mb-none q-mt-xs qty">65</h3>
               </q-card-section>
            </q-card-section>
         </q-card>
         <q-card class="my-card col bg-indigo-8 text-indigo-1" flat bordered>
            <q-card-section horizontal class="full-height">
               <q-card-section class="col-5 column flex-center">
                  <q-icon name="las la-chalkboard-teacher" size="100px"></q-icon>
                  <div class="text-overline">DETALLE</div>
               </q-card-section>
               <q-separator vertical />
               <q-card-section class="col q-py-xs flex column justify-center items-center bg-indigo-7 text-indigo-1">
                  <div class="text-h5 q-mt-NONE q-mb-xs">Docentes</div>
                  <div class="text-caption text-indigo-1">
                     Activos
                  </div>
                  <h3 class="q-mb-none q-mt-xs qty">26</h3>
               </q-card-section>
            </q-card-section>
         </q-card>
         <q-card class="my-card col bg-red-5 text-red-1" flat bordered>
            <q-card-section horizontal class="full-height">
               <q-card-section class="col-5 column flex-center">
                  <q-icon name="o_report_gmailerrorred" size="100px"></q-icon>
                  <div class="text-overline">DETALLE</div>
               </q-card-section>
               <q-separator vertical />
               <q-card-section class="col q-py-xs flex column justify-center items-center bg-red-4 text-red-1">
                  <div class="text-h5 q-mt-NONE q-mb-xs">Incidencias</div>
                  <div class="text-caption text-red-1">
                     Eventos reportados.
                  </div>
                  <h3 class="q-mb-none q-mt-xs qty">05</h3>
               </q-card-section>
            </q-card-section>
         </q-card>

      </div>

      <div class="container-report q-pa-md q-pr-md-xl row-md column items-stretch justify-start col">
         <div class="column col" style="gap:24px;">
            <q-date v-model="date" :locale="myLocale"  title="Mis Eventos" subtitle="Agenda" class="full-width shadow-0" bordered :events="events" style="height: fit-content;" />

            <q-card class="my-card col bg-light-blue-2 text-light-blue-10
" flat bordered>
            <q-card-section horizontal class="full-height">
               <q-card-section class="col-5 column flex-center">
                  <q-icon name="o_class" size="100px"></q-icon>
                  <div class="text-overline">PROGRESO</div>
               </q-card-section>
               <q-separator vertical />
               <q-card-section class="col q-py-xs flex column justify-center items-center  bg-light-blue-1 text-light-blue-10">
                  <div class="text-h5 q-mt-none q-mb-xs">Clases</div>
                  <div class="text-caption text-light-blue-10
">
                     Programadas del día.
                  </div>
                  <h3 class="q-mb-none q-mt-xs qty">24/65</h3>
               </q-card-section>
            </q-card-section>
         </q-card>
         </div>

         <div class="col items-start" >
            <q-list bordered  class="fit">
               <q-item class="bg-primary text-white q-py-md">
                  <q-item-section>
                     <q-item-label><h6 class="q-my-none">Solicitudes Academicas</h6></q-item-label>
                     <q-item-label caption class="text-white">Revisa las solicitudes pendientes y en curso.</q-item-label>
                  </q-item-section>
               </q-item>
               <!-- <q-separator spaced inset /> -->
               <q-item>
                  <q-item-section>
                     <q-item-label>Cambio de horario clase</q-item-label>
                     <q-item-label caption lines="2">Buenas tardes, por favor su ayuda con la siguiente solicitud...</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption>08-Nov</q-item-label>
                     <q-icon name="o_feedback" color="primary" />
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section>
                     <q-item-label>Cambio de horario clase</q-item-label>
                     <q-item-label caption lines="2">Buenas tardes, por favor su ayuda con la siguiente solicitud...</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption>06-Nov</q-item-label>
                     <q-icon name="o_feedback" color="primary" />
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section>
                     <q-item-label>Cambio de horario clase</q-item-label>
                     <q-item-label caption lines="2">Buenas tardes, por favor su ayuda con la siguiente solicitud...</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption>06-Nov</q-item-label>
                     <q-icon name="o_feedback" color="primary" />
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section>
                     <q-item-label>Cambio de horario clase</q-item-label>
                     <q-item-label caption lines="2">Buenas tardes, por favor su ayuda con la siguiente solicitud...</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption>04-Nov</q-item-label>
                     <q-icon name="o_feedback" color="primary" />
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section>
                     <q-item-label>Cambio de horario clase</q-item-label>
                     <q-item-label caption lines="2">Buenas tardes, por favor su ayuda con la siguiente solicitud...</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption>01-Nov</q-item-label>
                     <q-icon name="o_feedback" color="primary" />
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />
               <q-item>
                  <q-item-section>
                     <q-item-label>Cambio de horario clase</q-item-label>
                     <q-item-label caption lines="2">Buenas tardes, por favor su ayuda con la siguiente solicitud...</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption>01-Nov</q-item-label>
                     <q-icon name="o_feedback" color="primary" />
                  </q-item-section>
               </q-item>

               <!-- <q-separator spaced inset /> -->


            </q-list>
         </div>
      </div>
   </div>

</template>

<script setup>
import { defineComponent, onMounted, ref, defineProps, computed} from "vue";
import { useGlobalStore } from '../stores/global'
import { useRouter, useRoute } from 'vue-router'

defineComponent({
   name: "DirectorDashboardPage"
})

const props = defineProps(()=>{
   "value"
})
const router = useRouter()
const route = useRoute()

const store = useGlobalStore();
const expanded = ref(false)
const form = ref({
   subject:""
})
const date = ref("2024/11/20")
const myLocale = {
        /* starting with Sunday */
        days: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
        daysShort: 'Dom_Lun_Mar_Mié_Jue_Vie_Sáb'.split('_'),
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
        monthsShort: 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
        firstDayOfWeek: 1, // 0-6, 0 - Sunday, 1 Monday, ...
        format24h: true,
        pluralDay: 'dias'
      }
const events= [ '2024/11/01', '2024/11/04', '2024/11/30', '2024/11/24', '2024/11/12' ]
onMounted(() => {
   // store.GET_ALL_HEADQUARTERS();
   // console.log("router", router);
   // console.log("route ", route.params);
})

const aulaActive = computed(()=>{
   return route.params.value.replace("-", " ")
})
</script>


<style lang="scss">
.container-cards, .container-report{
   gap: 24px;
}
.container-cards .my-card{
   // width: 100%;
}

@media (max-width:992px) {
   .my-card .qty{
      font-size: 32px;
   }
   .my-card .text-h5{
      font-size: 20px;
   }
}
</style>
