<template>
   <q-page>
      <q-stepper v-model="step" ref="stepper" alternative-labels color="primary" animated header-nav>
         <q-step :name="1" title="Datos de la asignatura" icon="las la-user-circle" :done="step > 1" class="flex column">
         <CreateSubjectStep></CreateSubjectStep>
         </q-step>
         <template v-slot:navigation>
         <q-stepper-navigation class="flex justify-end full-width">
            <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 1 ? 'Registrar' : 'Continuar'" rounded  />
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Volver" class="q-ml-sm" rounded />
         </q-stepper-navigation>
         </template>
      </q-stepper>
   </q-page>
</template>


<script setup>
   import { defineComponent, provide, ref } from "vue";
   import CreateSubjectStep from "./Steps/CreateSubjectStep.vue";


   defineComponent({
      name:"NewSubject",
      components: ['CreateSubjectStep']
   })

   const step = ref(1)
   const form = ref({
      subject:"",
      level:"",
      description:"",
      grade:"",
      unit_1:"",
      unit_2:"",
      unit_3:"",
      unit_4:"",
      unit_5:"",
      unit_6:"",
   })
   provide("form", form)
</script>


<style lang="scss" scoped>
   .text-overline{
      line-height: 1rem;
   }
</style>
