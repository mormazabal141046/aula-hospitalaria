<template>
   <div class="header-section q-px-md-xl q-px-md q-mt-md-xl q-mt-lg">
      <div class="row items-center " style="gap: 8px;">
         <h6 class="q-mb-xs q-mt-none text-capitalize">Home Docente</h6>
         <div class="text-overline q-mr-xs"> - CALIFICACIÓN PROMEDIO </div>
         <q-rating
            v-model="rating"
            max="5"
            size="1.5em"
            color="yellow"
            icon="star_border"
            icon-selected="star"
            icon-half="star_half"
            no-dimming
            />
            ({{ rating }})
      </div>
      <div class="text-caption">Revisa la progamación de tu jornada.</div>
      <div class="q-mt-lg">
         <q-btn-group  :outline="true" :unelevated="true">
            <q-btn outline label="Mis Alumnos" icon="o_groups" />
            <q-btn outline label="Material Académico" icon="o_auto_stories" />
            <q-btn outline label="Mensajes" icon="o_chat" />
            <q-btn outline label="Historial de Clases" icon="history" />
         </q-btn-group>
      </div>
   </div>
   
   <div class="row-md column">
      <div class="container-cards no-wrap q-pa-md q-pl-md-xl column items-stretch justify-start col-4">
         <q-list bordered  class="fit">
               <q-item class="bg-grey-9 text-white q-py-md">
                  <q-item-section>
                     <q-item-label><h6 class="q-my-none">Proximas Clases</h6></q-item-label>
                     <q-item-label caption class="text-white">Revisa tu programación para las siguientes clases.</q-item-label>
                  </q-item-section>
               </q-item>
               <q-item class="bg-red-7 text-red-1">
                  <q-item-section>
                     <q-item-label>Lenguaje y Comunicación</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Alumno: Jorge Andrade</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Nivel: 1° Básico</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="location_on"></q-icon> Modalidad: Domicilio</q-item-label>
                  </q-item-section>
                  <q-item-section side center>
                  </q-item-section>
                  <q-separator spaced vertical inset class="" />
                  <q-item-section side top>
                     <q-item-label caption class="text-red-1 flex items-center justify-start">08-Nov - 10:00 - 11:45</q-item-label>
                     <q-icon name="o_schedule" color="red-1" />
                     <q-btn color="primary" class="q-mt-xs" disabled>Iniciar</q-btn>
                  </q-item-section>

               </q-item>

               <q-separator spaced inset />

               <q-item class="bg-blue-8 text-blue-1">
                  <q-item-section>
                     <q-item-label>Matemáticas</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Alumno: Jorge Andrade</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Nivel: 1° Básico</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="location_on"></q-icon> Modalidad: Domicilio</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption class="text-red-1">08-Nov - 12:00 - 13:45</q-item-label>
                     <q-icon name="o_schedule" color="red-1" />
                     <q-btn color="primary" class="q-mt-xs" disabled>Iniciar</q-btn>
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item class="bg-yellow-8 text-red-1">
                  <q-item-section>
                     <q-item-label>Ciencias Naturales</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Alumno: Alonso Madrid</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Nivel: 3° Básico</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="location_on"></q-icon> Modalidad: Domicilio</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption class="text-red-1">08-Nov - 14:45 - 16:30</q-item-label>
                     <q-icon name="o_schedule" color="red-1" />
                     <q-btn color="primary" class="q-mt-xs" disabled>Iniciar</q-btn>
                  </q-item-section>
               </q-item>

               <q-separator spaced inset />

               <q-item class="bg-teal-8 text-red-1">
                  <q-item-section>
                     <q-item-label>Historia</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Alumno: Alonso Madrid</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Nivel: 3° Básico</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="location_on"></q-icon> Modalidad: Domicilio</q-item-label>
                  </q-item-section>

                  <q-item-section side top>
                     <q-item-label caption class="text-red-1">08-Nov - 16:45 - 18:30</q-item-label>
                     <q-icon name="o_schedule" color="red-1" />
                     <q-btn color="primary" class="q-mt-xs" disabled>Iniciar</q-btn>
                  </q-item-section>
               </q-item>
         </q-list>
      </div>

      <div class="container-report q-pa-md q-pr-md-xl row-md column items-stretch justify-start col">
         <div class="column col" style="gap:24px;">
            <div>
            <q-list bordered  class="fit">
               <q-item class="bg-grey-3 text-grey-14 q-py-md">
                  <q-item-section>
                     <q-item-label><h6 class="q-my-none text-grey-14">Clases en Curso</h6></q-item-label>
                     <q-item-label caption class="text-grey-14">Monitorea el estado de tus clases.</q-item-label>
                  </q-item-section>
               </q-item>
               <q-item class="text-red-1" v-for="(subject, index) in subjects_progress" :key="index" :class="subject.color">
                  <q-item-section>
                     <q-item-label>{{ subject. title }}</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Alumno: {{ subject. student }}</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Nivel: {{ subject. level }}</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="location_on"></q-icon> Modalidad: {{ subject. modality }}</q-item-label>
                  </q-item-section>
                  <q-item-section side center>
                  </q-item-section>
                  <q-separator spaced vertical inset class="" />
                  <q-item-section side top>
                     <q-item-label caption class="text-red-1 flex items-center justify-start">Tiempo en Curso - {{ subject.duration }}</q-item-label>
                     <q-icon name="o_schedule" color="red-1" />
                     <q-btn color="primary" class="q-mt-xs" @click="modal = true">Finalizar</q-btn>
                  </q-item-section>
               </q-item>
            </q-list>
            </div>
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
                     <h3 class="q-mb-none q-mt-xs qty">0/5</h3>
                  </q-card-section>
               </q-card-section>
            </q-card>
         </div>

         <div class="col items-start" >
            <q-list bordered  class="fit">
               <q-item class="bg-teal-14 text-grey-1 q-py-md">
                  <q-item-section>
                     <q-item-label><h6 class="q-my-none text-grey-1">Clases en Finalizadas</h6></q-item-label>
                     <q-item-label caption class="text-grey-1">Revisa el listado de las clases completadas.</q-item-label>
                  </q-item-section>
               </q-item>
               <q-item class="bg-brown-6 text-red-1">
                  <q-item-section>
                     <q-item-label>Artes Visuales</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Alumno: Jorge Andrade</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Nivel: 1° Básico</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="location_on"></q-icon> Modalidad: Domicilio</q-item-label>
                  </q-item-section>
                  <q-item-section side center>
                  </q-item-section>
                  <q-separator spaced vertical inset class="" />
                  <q-item-section side top>
                     <q-item-label caption class="text-red-1 flex items-center justify-start">Duración - 01:01:12</q-item-label>
                     <q-icon name="o_check_circle" color="red-1" />
                     <q-btn color="positive" class="q-mt-xs" disabled>realizada</q-btn>
                  </q-item-section>
               </q-item>
               <q-item class="text-red-1" v-for="(subject, index) in subjects_finished" :key="index" :class="subject.color">
                  <q-item-section>
                     <q-item-label>{{ subject. title }}</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Alumno: {{ subject. student }}</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="o_person"></q-icon> Nivel: {{ subject. level }}</q-item-label>
                     <q-item-label caption lines="1" class="flex justify-start text-red-1"><q-icon name="location_on"></q-icon> Modalidad: {{ subject. modality }}</q-item-label>
                  </q-item-section>
                  <q-item-section side center>
                  </q-item-section>
                  <q-separator spaced vertical inset class="" />
                  <q-item-section side top>
                     <q-item-label caption class="text-red-1 flex items-center justify-start">Duración - {{ subject.duration }}</q-item-label>
                     <q-icon name="o_check_circle" color="red-1" />
                     <q-btn color="positive" class="q-mt-xs" disabled>realizada</q-btn>
                  </q-item-section>
               </q-item>
            </q-list>
         </div>
      </div>
   </div>
   <ModalCloseSubject :show-modal="modal"></ModalCloseSubject>
</template>

<script setup>
import { defineComponent, onMounted, ref, defineProps, computed} from "vue";
import { useGlobalStore } from '../stores/global'
import { useRouter, useRoute } from 'vue-router'
import ModalCloseSubject from "src/components/Teacher/ModalCloseSubject.vue";
import { provide } from "vue";

defineComponent({
   name: "TeacherDashboard",
   components:{
      ModalCloseSubject
   }
})
const subjects_progress = ref([
   {
      title: "Inglés",
      student: "Jorge Andrade",
      level: "1° Básico",
      duration: "01:24:26",
      modality: "Domicilio",
      color: "bg-pink-5"
   }
])
const subjects_finished = ref([
   
])
const props = defineProps(()=>{
   "value"
})
const rating = ref(4.4)
const modal = ref(false)

provide("modal", modal)
provide("subjects_progress", subjects_progress)
provide("subjects_finished", subjects_finished)
onMounted(() => {

})
</script>


<style lang="scss">
.container-cards, .container-report{
   gap: 24px;
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
