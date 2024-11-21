<template>
   <q-page>
      <q-stepper v-model="step" ref="stepper" alternative-labels color="primary" animated header-nav >
         <q-step :name="1" title="Identificación del Alumno" icon="las la-user-circle" :done="step > 1" class="flex column">
         <StudentStep></StudentStep>
         </q-step>

         <q-step :name="2" title="Antecedentes Familiares" icon="o_supervised_user_circle" :done="step > 2">
         <FamilyStep></FamilyStep>
         </q-step>

         <q-step :name="3" title="Antecedentes Apoderado/Tutor" icon="las la-user-tie" :done="step > 3">
         <GuardianStep></GuardianStep>
         </q-step>

         <q-step :name="4" title="Documentación" icon="add_comment">
         <AttachDocumentsStep></AttachDocumentsStep>
         </q-step>

         <template v-slot:navigation>
         <q-stepper-navigation class="flex justify-end full-width" style="gap:16px">
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Volver" class="q-ml-sm" rounded />
               <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finalizar' : 'Continuar'" rounded  />
         </q-stepper-navigation>
         </template>
      </q-stepper>
   </q-page>
</template>


<script setup>
   import { defineComponent, provide, ref } from "vue";
   import StudentStep from "./Steps/StudentStep.vue";
   import FamilyStep from './Steps/FamilyStep.vue'
   import GuardianStep from './Steps/GuardianStep.vue'
   import AttachDocumentsStep from './Steps/AttachDocumentsStep.vue'


   defineComponent({
      name:"NewEnrolment",
      components: ['StudentStep', 'FamilyStep', 'GuardianStep', 'AttachDocumentsStep']
   })
   const step = ref(1)
   const form = ref({
      student:{
         headquarters: '',
         modality:'',
         support_programme:'',
         rut:"",
         names:"",
         lastname:"",
         surname:"",
         birthdate: '',
         email: '',
         phone: '',
         address: '',
         numeration: '',
         region: '',
         commune: '',
         school: '',
         level: '',
         course: '',
         medical_diagnosis: '',
      },
      family:{
         father:{
            rut:"",
            names:"",
            lastname:"",
            surname:"",
            birthdate: '',
         },
         mother:{
            rut:"",
            names:"",
            lastname:"",
            surname:"",
            birthdate: '',
         },
         family_members: [],
         total_home: '',
         total_brothers: '',
         position_family: ''
      },
      tutor:{
         rut:"",
         names:"",
         lastname:"",
         surname:"",
         birthdate: '',
         email: '',
         phone: '',
         address:'',
         numeration:'',
         address:'',
         region:'',
         commune:'',
      },
      documents:{
         medical_document: null,
         accept_tutor: null,
      }
   })
   provide("form", form)
</script>


<style lang="scss" scoped>
   .text-overline{
      line-height: 1rem;
   }
</style>
