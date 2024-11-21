<template>
   <div>
      <!-- <p class="q-pb-md">Completa los datos inidcados a continuación. Recuerda que los datos asociados a la institución es donde será efectiva la matricula.</p> -->

      <div class="flex column q-mb-lg">
         <div class="text-overline q-my-none q-pl-md">Datos de la Institución</div>
         <div class="flex row q-gutter-md q-mt-none">
         <q-select v-model="form.student.headquarters" :options="store.headquarters" label="Sede" style="width: 280px;" dense rounded outlined :rules="[requiredField]">
            <template v-slot:prepend>
               <q-icon name="o_foundation" />
            </template>
         </q-select>
         <q-select v-model="form.student.modality" :options="store.modalitiesAttention" label="Modalidad de Atención" style="width: 280px;" dense rounded outlined :rules="[requiredField]">
               <template v-slot:prepend>
               <q-icon name="o_person_pin_circle" />
            </template>
         </q-select>
         <div class="col-2">
            <q-toggle v-model="is_program" color="teal" checked-icon="check" unchecked-icon="clear" label="Programa de apoyo" />
         </div>
         <q-select v-if="is_program" v-model="form.student.support_programme" :options="support_programs" label="Programa de apoyo" style="width: 280px;" dense rounded outlined>
               <template v-slot:prepend>
               <q-icon name="o_history_edu" />
            </template>
         </q-select>
         </div>
      </div>
      <q-separator class="q-my-md"></q-separator>
      <div class="flex column q-gutter-md q-mt-sm">
         <div class="text-overline q-my-none q-pl-md">Información Personal</div>
         <div class="flex column q-mt-none">
         <div class="flex q-gutter-md q-mt-none row">
            <q-input v-model="form.student.rut" v-maska data-maska="['#.###.###-*', '##.###.###-*']" :rules="[requiredField, rutFormat]" color="indigo-6" class="col-2" label="RUT" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="o_pin" />
               </template>
            </q-input>
            <q-input v-model="form.student.names" :rules="[requiredField, alphaField]" color="indigo-6" class="col-3" label="Nombres" dense outlined rounded >
               <template v-slot:prepend>
                  <q-icon name="person_outline" />
               </template>
            </q-input>
            <q-input v-model="form.student.lastname" :rules="[requiredField, alphaField]" color="indigo-6" class="col-3" label="Apellido Paterno" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="person_outline" />
               </template>
            </q-input>
            <q-input v-model="form.student.surname" :rules="[requiredField, alphaField]" color="indigo-6" class="col-3" label="Apellido Materno" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="person_outline" />
               </template>
            </q-input>
         </div>
         <div class="flex q-gutter-md q-mt-xs row">
            <q-input v-model="form.student.birthdate" type="date" style="min-width:250px" class="q-mt-xs col-2" label="Fecha de nacimiento"  dense outlined rounded :rules="[requiredField]">
               <template v-slot:prepend>
               <q-icon name="o_cake" />
               </template>
            </q-input>
            <q-input v-model="form.student.email" type="email" :rules="[requiredField, emailFormat]" color="indigo-6" class="q-mt-xs col-3" label="Email" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="mail_outline" />
               </template>
            </q-input>
            <q-input v-model="form.student.phone" v-maska data-maska="['+569 ########', '+569 ########']" :rules="[requiredField, phoneFormat]" color="indigo-6" class="q-mt-xs col-3" label="Teléfono" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="o_phone_iphone" />
               </template>
            </q-input>
         </div>
         </div>
      </div>
      <q-separator class="q-my-md"></q-separator>
      <div class="flex row">
         <div class="flex column q-gutter-md q-mt-sm col-6">
         <div class="text-overline q-my-none q-pl-md">Datos del Domicilio</div>
         <div class="flex column q-ml-none q-mt-xs">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.student.address" :rules="[requiredField]" color="indigo-6" class="q-mt-xs col" label="Dirección" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_villa" />
               </template>
               </q-input>
               <q-input v-model.number="form.student.numeration" :rules="[requiredField, alphaField]" color="indigo-6" style="max-width:170px" class="q-mt-xs" label="Número" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="tag" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-select v-model="form.student.region" :options="store.regions" label="Región" class="q-mt-xs col" dense rounded outlined :rules="[requiredField]">
               <template v-slot:prepend>
                  <q-icon name="o_place" />
               </template>
               </q-select>
               <q-select v-model="form.student.commune" option-label="name" :options="communeByRegion" :disable="form.student.region == ''" label="Comuna" class="q-mt-xs col" dense rounded outlined :rules="[requiredField]">
               <template v-slot:prepend>
                  <q-icon name="o_pin_drop" />
               </template>
               </q-select>
            </div>
         </div>
         </div>

         <q-separator vertical class="q-mx-lg"></q-separator>

         <div class="flex column q-gutter-md q-mt-sm col">
         <div class="text-overline q-my-none q-pl-md">Información Académica</div>
         <div class="flex column q-ml-none q-mt-xs">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.student.school" :rules="[requiredField]" color="indigo-6" class="q-mt-xs col-5" label="Colegio Origen" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_school" />
               </template>
               </q-input>
               <q-select v-model="form.student.level" :options="store.academicLevels" label="Nivel curso"  class="q-mt-xs col" dense rounded outlined :rules="[requiredField]">
               <template v-slot:prepend>
                  <q-icon name="o_person_pin_circle" />
               </template>
               </q-select>
               <q-input v-model="form.student.course" :rules="[requiredField]"  color="indigo-6" class="q-mt-xs col" label="Curso" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_upgrade" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.student.medical_diagnosis" :rules="[requiredField, alphaField]" color="indigo-6" class="q-mt-xs col" label="Diagnostico" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_local_hospital" />
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
   import { computed, defineComponent, inject, ref } from "vue";
   import { useGlobalStore } from '../../../stores/global'
   import { vMaska } from "maska/vue"
   import { requiredField, rutFormat, emailFormat, alphaField, alphaNumericField, phoneFormat } from "src/utils/validations";

   defineComponent({
      name:"StudentStep"
   })

   const store = useGlobalStore();
   const support_programs = ref(['Aula Remota', 'AIESS'])
   const form = inject("form")
   const is_program =ref(false)
   const communeByRegion = computed(()=>{
      if(form.value.student.region) {
         return store.communes.filter((c) => {
            return c.region_id == form.value.student.region.id;
         }).sort((a,b) => a.name.localeCompare (b.name));;
      } else {
         return [{id: -1, name: 'empty'}];
      }
   })

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
