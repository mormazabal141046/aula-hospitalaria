
<template>
   <div>
      <!-- <p class="q-pb-md">Completa los datos inidcados a continuación. Recuerda que los datos asociados a la institución es donde será efectiva la matricula.</p> -->

      <div class="flex row">
         <div class="flex column q-gutter-md q-mt-sm col-6">
         <div class="text-overline q-my-none q-pl-md">Adjuntar Documentación</div>
         <div class="flex column q-ml-none q-mt-sm">
            <div class="flex column q-gutter-md q-ml-none q-mt-xs">
               <q-input v-model="form.documents.medical_document" :rules="[requiredField]" color="indigo-6" class="q-mt-xs col" label="Certificado Médico" dense outlined rounded>
                  <template v-slot:prepend>
                     <q-icon name="o_link" />
                  </template>
               </q-input>
               <q-input v-model="form.documents.accept_tutor" :rules="[requiredField]" color="indigo-6" class="q-mt-xs col" label="Autorización Escrita Apoderado" dense outlined rounded>
                  <template v-slot:prepend>
                     <q-icon name="o_link" />
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
   import { requiredField, rutFormat, emailFormat, alphaField, alphaNumericField, phoneFormat } from "src/utils/validations";


   defineComponent({
      name:"AttachDocumentsStep"
   })

   const form = inject("form")
</script>


<style lang="scss">
   .text-overline{
      line-height: 1rem;
   }
</style>
