<template>
   <div class="row-md column items-stretch q-py-md">
      <div class="container-cards no-wrap q-pa-md q-pl-md-xl column items-stretch justify-start col-3">
         <div class="header-section ">
            <div class="row items-center " style="gap: 8px;">
               <h6 class="q-mb-xs q-mt-none text-capitalize">Home Alumno</h6>
               <div class="text-overline q-mr-xs"> - PROGRESO</div>
            </div>
            <div class="text-caption q-mb-xs">Revisa el progreso y status de la sede, asi como las solicitudes entrantes.</div>
            <div class="text-caption"><b>Curso</b>: 3° Básico</div>
            <div class="text-caption"><b>Modalidad Atención</b>: Domicilio</div>
            <div class="text-caption"><b>Apoderado</b>: Nelson Jorquera</div>
         </div>
         <q-timeline color="indigo-9" class="timeline-custom">

            <q-timeline-entry
               title="Pre-Kinder"
               subtitle="Promoción 2021"
            >
            <div>Promedio Final: 6.4</div>
            </q-timeline-entry>
            <q-timeline-entry
               title="1° Básico"
               subtitle="Promoción 2022"
               >
            <div>Promedio Final: 6.1</div>
            </q-timeline-entry>
            <q-timeline-entry
               title="2° Básico"
               subtitle="Promoción 2023"
            >
            <div>Promedio Final: 5.9</div>
            </q-timeline-entry>
            <q-timeline-entry
               title="3° Básico"
               subtitle="2024 - en Curso"
            >
            <div>Promedio Final: 0.0</div>
            </q-timeline-entry>
         </q-timeline>
      </div>

      <div class="container-report q-pa-md q-pr-md-xl row-md column items-stretch justify-start col">
         <!-- <div class="col items-start" >
            <q-item class="bg-secondary text-white q-py-md">
               <q-item-section>
                  <q-item-label><h6 class="q-my-none">Notificaciones</h6></q-item-label>
                  <q-item-label caption class="text-white">Revisa las solicitudes pendientes y en curso.</q-item-label>
               </q-item-section>
            </q-item>
            <q-scroll-area style="height: 100%;">
            <q-list bordered  class="fit">
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
            </q-list>
         </q-scroll-area>
         </div> -->
         <div class="col-12 items-start" >
            <q-table
               flat bordered
               title="Mi Horario"
               :rows="rows_horario"
               :columns="columns_horario"
               row-key="name"
               :hide-pagination="true"
               class="fit my-sticky-dynamic"
               :pagination="{ rowsPerPage: 0}"
               :separator="separator"
            >
               <template v-slot:body="props">
               <q-tr :props="props" @click="onRowClick(props.row)">
                  <q-td key="schedule" :props="props">
                     {{ props.row.schedule }}
                  </q-td>
                  <q-td key="monday" :props="props">
                     <q-badge :color="colorSubject(props.row.monday)" class="fit flex items-center justify-center">
                     {{ props.row.monday }}
                     </q-badge>
                  </q-td>
                  <q-td key="tuesday" :props="props">
                     <q-badge :color="colorSubject(props.row.tuesday)" class="fit flex items-center justify-center">
                     {{ props.row.tuesday }}
                     </q-badge>
                  </q-td>
                  <q-td key="wednesday" :props="props">
                     <q-badge :color="colorSubject(props.row.wednesday)" class="fit flex items-center justify-center">
                     {{ props.row.wednesday }}
                     </q-badge>
                  </q-td>
                  <q-td key="thursday" :props="props">
                     <q-badge :color="colorSubject(props.row.thursday)" class="fit flex items-center justify-center">
                     {{ props.row.thursday }}
                     </q-badge>
                  </q-td>
                  <q-td key="friday" :props="props">
                     <q-badge :color="colorSubject(props.row.friday)" class="fit flex items-center justify-center">
                     {{ props.row.friday }}
                     </q-badge>
                  </q-td>
               </q-tr>
               </template>
            </q-table>
         </div>
         <div class="col items-start" >
            <q-item class="bg-primary text-white q-py-md">
               <q-item-section>
                  <q-item-label><h6 class="q-my-none">Resumen Academico</h6></q-item-label>
                  <q-item-label caption class="text-white">Revisa el progreso de tu asistencia y notas en cada asignatura.</q-item-label>
               </q-item-section>
            </q-item>
            <q-scroll-area style="height: 500px; width: 100%;">
            <q-list bordered  class="fit">
               <q-item>
                  <q-item-section class="q-py-md">
                     <q-item-label class="q-mb-xs">Lenguaje y Comunicación</q-item-label>
                     <q-item-label caption>Calificaciones</q-item-label>
                     <q-item-label caption>
                        <q-table
                           flat bordered
                           title=""
                           :rows="rows"
                           :columns="columns"
                           row-key="name"
                           :separator="separator"
                           hide-pagination
                           class="notas"
                        />
                     </q-item-label>
                     <q-item-label caption  class="q-pt-md">
                        Asistencia: 86%
                     </q-item-label>
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section class="q-py-md">
                     <q-item-label class="q-mb-xs">Inglés</q-item-label>
                     <q-item-label caption>Calificaciones</q-item-label>
                     <q-item-label caption>
                        <q-table
                           flat bordered
                           title=""
                           :rows="rows"
                           :columns="columns"
                           row-key="name"
                           :separator="separator"
                           hide-pagination
                           class="notas"
                        />
                     </q-item-label>
                     <q-item-label caption  class="q-pt-md">
                        Asistencia: 86%
                     </q-item-label>
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section class="q-py-md">
                     <q-item-label class="q-mb-xs">Historia</q-item-label>
                     <q-item-label caption>Calificaciones</q-item-label>
                     <q-item-label caption>
                        <q-table
                           flat bordered
                           title=""
                           :rows="rows"
                           :columns="columns"
                           row-key="name"
                           :separator="separator"
                           hide-pagination
                           class="notas"
                        />
                     </q-item-label>
                     <q-item-label caption  class="q-pt-md">
                        Asistencia: 86%
                     </q-item-label>
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section class="q-py-md">
                     <q-item-label class="q-mb-xs">Matemáticas</q-item-label>
                     <q-item-label caption>Calificaciones</q-item-label>
                     <q-item-label caption>
                        <q-table
                           flat bordered
                           title=""
                           :rows="rows"
                           :columns="columns"
                           row-key="name"
                           :separator="separator"
                           hide-pagination
                           class="notas"
                        />
                     </q-item-label>
                     <q-item-label caption  class="q-pt-md">
                        Asistencia: 86%
                     </q-item-label>
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item>
                  <q-item-section class="q-py-md">
                     <q-item-label class="q-mb-xs">Ciencias Naturales</q-item-label>
                     <q-item-label caption>Calificaciones</q-item-label>
                     <q-item-label caption>
                        <q-table
                           flat bordered
                           title=""
                           :rows="rows"
                           :columns="columns"
                           row-key="name"
                           :separator="separator"
                           hide-pagination
                           class="notas"
                        />
                     </q-item-label>
                     <q-item-label caption  class="q-pt-md">
                        Asistencia: 86%
                     </q-item-label>
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />



               <q-item>
                  <q-item-section class="q-py-md">
                     <q-item-label class="q-mb-xs">Artes Vsiuales</q-item-label>
                     <q-item-label caption>Calificaciones</q-item-label>
                     <q-item-label caption>
                        <q-table
                           flat bordered
                           title=""
                           :rows="rows"
                           :columns="columns"
                           row-key="name"
                           :separator="separator"
                           hide-pagination
                           class="notas"
                        />
                     </q-item-label>
                     <q-item-label caption  class="q-pt-md">
                        Asistencia: 86%
                     </q-item-label>
                  </q-item-section>
               </q-item>
            </q-list>
         </q-scroll-area>
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
const columns = [
  { name: 'n1', align: 'center', label: 'N1', field: 'n1', sortable: false },
  { name: 'n2', align: 'center', label: 'N2', field: 'n2', sortable: false },
  { name: 'n3', align: 'center', label: 'N3', field: 'n3', sortable: false },
  { name: 'n4', align: 'center', label: 'N4', field: 'n4', sortable: false },
  { name: 'n5', align: 'center', label: 'N5', field: 'n5', sortable: false },
  { name: 'n6', align: 'center', label: 'N6', field: 'n6', sortable: false },
]

const rows = [
  {
    n1: 6.1,
    n2: 5.0,
    n3: 6.7,
    n4: 5.5,
    n5: null,
    n6: null,
  },

]

const columns_horario = [
  {
    name: 'schedule',
    required: true,
    label: 'Bloque',
    align: 'center',
    field: "schedule",
    sortable: true
  },
  { name: 'monday', align: 'center', label: 'Lunes', field: 'monday', sortable: true },
  { name: 'tuesday', align: 'center', label: 'Martes', field: 'tuesday', sortable: true },
  { name: 'wednesday', align: 'center', label: 'Miercoles', field: 'wednesday' },
  { name: 'thursday', align: 'center', label: 'Jueves', field: 'thursday' },
  { name: 'friday', align: 'center', label: 'Viernes', field: 'friday' },
]

const rows_horario = [
   // {
   //    schedule: '08:00 - 08:45',
   //    monday: "",
   //    tuesday: "",
   //    wednesday: "",
   //    thursday: "",
   //    friday: "",
   // },
   // {
   //    schedule: '08:45 - 09:15',
   //    monday: "",
   //    tuesday: "",
   //    wednesday: "",
   //    thursday: "",
   //    friday: "",
   // },
   // {
   //    schedule: '09:15 - 10:00',
   //    monday: null,
   //    tuesday: "",
   //    wednesday: "",
   //    thursday: "",
   //    friday: "",
   // },
   {
      schedule: '10:15 - 11:00',
      monday: "Lenguaje",
      tuesday: "Inglés",
      wednesday: "",
      thursday: "Matemáticas",
      friday: "",
   },
   {
      schedule: '11:00 - 11:45',
      monday: "Lenguaje",
      tuesday: "Inglés",
      wednesday: "",
      thursday: "Matemáticas",
      friday: "",
   },
   {
      schedule: '11:45 - 12:30',
      monday: "Matemáticas",
      tuesday: "Historia",
      wednesday: "",
      thursday: "Ciencias Naturales",
      friday: "",
   },
   {
      schedule: '12:30 - 13:15',
      monday: "Matemáticas",
      tuesday: "Historia",
      wednesday: "",
      thursday: "Ciencias Naturales",
      friday: "",
   },
   {
      schedule: '14:00 -14:45',
      monday: "",
      tuesday: "",
      wednesday: "Lenguaje",
      thursday: "",
      friday: "Lenguaje",
   },
   {
      schedule: '14:45 - 15:30',
      monday: "",
      tuesday: "",
      wednesday: "Lenguaje",
      thursday: "",
      friday: "Lenguaje",
   },
   {
      schedule: '15:30 - 16:15',
      monday: "Ciencias Naturales",
      tuesday: "Artes Visuales",
      wednesday: "Matemáticas",
      thursday: "",
      friday: "Historia",
   },
   {
      schedule: '16:15 - 17:00',
      monday: "Ciencias Naturales",
      tuesday: "Artes Visuales",
      wednesday: "Matemáticas",
      thursday: "",
      friday: "Historia",
   },
   {
      schedule: '17:00 - 17:45',
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
   },
]


const  separator = ref('vertical')
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

})

const colorSubject = (item)=>{
   let color = "white"
   switch (item) {
      case 'Lenguaje':
         color = "red-7"
         break;
      case 'Matemáticas':
         color = "blue-9"
         break;
      case 'Ciencias Naturales':
         color = "light-green-5"
         break;
      case 'Inglés':
         color = "orange-6"
         break;
      case 'Historia':
         color = "teal-6"
         break;
      case 'Artes Visuales':
         color = "pink-5"
         break;
      default:
         color = "white"
         break;
   }
   return color;
}
</script>


<style lang="scss">
.container-cards, .container-report{
   gap: 24px;
}
.container-cards .my-card{
   // width: 100%;
}

.notas .q-table thead tr th{
   padding: 0px !important;
}
.notas .q-table thead tr, .notas .q-table tbody td{
   height: 24px;
}
.notas .q-table tbody tr td{
   padding: 0px !important;
}
.q-timeline__title{
   margin-bottom: 0px;
}
.q-table__top {
   background-color: var(--primary);
   color: white;
   text-align: center;
   display: flex;
   justify-content: center;
}
@media (max-width:375px) {
   .my-sticky-dynamic{
      max-width: 345px !important;
      overflow: auto;
   }
}
@media (max-width:768px) {
   .my-sticky-dynamic{
      max-width: 450px;
      overflow: auto;
   }
}
@media (max-width:992px) {
   .my-card .qty{
      font-size: 32px;
   }
   .my-card .text-h5{
      font-size: 20px;
   }
   // .timeline-custom{
   //    display: flex;
   // }
   .timeline-custom .q-timeline__entry {
      display: flex;
   }
   .q-timeline__subtitle{
      margin-right: 24px;

   }

}
</style>
