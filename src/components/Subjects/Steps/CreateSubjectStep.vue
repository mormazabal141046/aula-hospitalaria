<template>
   <div>
      <!-- <p class="q-pb-md">Completa los datos inidcados a continuación. Recuerda que los datos asociados a la institución es donde será efectiva la matricula.</p> -->


      <div class="flex row-md column">
         <div class="flex column q-gutter-md q-mt-sm col">
         <div class="text-overline q-my-none q-pl-md">Información General</div>
         <div class="flex column q-ml-none q-mt-xs">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.subject" :rules="[requiredField, alphaField]" color="indigo-6" class="q-mt-xs col" label="Nombre Asignatura" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_school" />
               </template>
               </q-input>
               <q-select v-model="form.level" :options="store.academicLevels" :rules="[requiredField]" label="Nivel curso"  class="q-mt-xs col" dense rounded outlined>
               <template v-slot:prepend>
                  <q-icon name="o_person_pin_circle" />
               </template>
               </q-select>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.description" :rules="[requiredField, alphaField]" type="textarea" color="indigo-6" class="q-mt-xs col" label="Descripción" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_speaker_notes" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.grade" v-maska data-maska="['#.#']" :rules="[requiredField]" color="indigo-6" class="q-mt-xs col-4" label="Nota para Aprobar" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_pin" />
               </template>
               </q-input>
            </div>
         </div>
         </div>
         <q-separator vertical class="q-mx-lg"></q-separator>


         <div class="flex column q-gutter-md q-mt-sm col-6">
         <div class="text-overline q-my-none q-pl-md">Listado de Unidades</div>
         <div class="flex column q-ml-none q-mt-xs">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.unit_1" :rules="[alphaField]"  color="indigo-6" class="q-mt-xs col" label="Unidad 1" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_menu_book" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.unit_2"  :rules="[alphaField]" color="indigo-6" class="q-mt-xs col" label="Unidad 2" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_menu_book" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.unit_3"  :rules="[alphaField]" color="indigo-6" class="q-mt-xs col" label="Unidad 3" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_menu_book" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.unit_4"  :rules="[alphaField]" color="indigo-6" class="q-mt-xs col" label="Unidad 4" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_menu_book" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.unit_5"  :rules="[alphaField]" color="indigo-6" class="q-mt-xs col" label="Unidad 5" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_menu_book" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.unit_5" :rules="[alphaField]" color="indigo-6" class="q-mt-xs col" label="Unidad 6" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_menu_book" />
               </template>
               </q-input>
            </div>
         </div>
         </div>
      </div>
      <q-separator class="q-mt-md"></q-separator>
   </div>
</template>


<script setup>
   import { defineComponent, inject } from "vue";
   import { useGlobalStore } from '../../../stores/global'
   import { vMaska } from "maska/vue"
   import { requiredField, rutFormat, emailFormat, alphaField, alphaNumericField, phoneFormat } from "src/utils/validations";

   defineComponent({
      name:"StudentStep"
   })
   const store = useGlobalStore();
   const form = inject("form")

</script>


<style lang="scss">
   .text-overline{
      line-height: 1rem;
   }
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      margin: 0 !important;
   }
   input[type=number] {
      -moz-appearance: textfield !important;
   }
</style>
