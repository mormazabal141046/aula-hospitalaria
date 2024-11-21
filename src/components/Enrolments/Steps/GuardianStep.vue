<template>
   <div>
      <!-- <p class="q-pb-md">Completa los datos inidcados a continuación. Recuerda que los datos asociados a la institución es donde será efectiva la matricula.</p> -->

      <div class="flex row">
         <div class="flex column q-gutter-md q-mt-sm col-6">
         <div class="text-overline q-my-none q-pl-md">Datos del Apoderado/Tutor</div>
         <div class="flex column q-ml-none q-mt-sm">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.tutor.rut" v-maska data-maska="['#.###.###-*', '##.###.###-*']" :rules="[requiredField, rutFormat]" color="indigo-6" class="col-4 q-mt-xs" label="RUT" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="o_pin" />
               </template>
               </q-input>
               <q-input v-model="form.tutor.birthdate" type="date" style="min-width:250px" class="q-mt-xs col-2" label="Fecha de nacimiento"  dense outlined rounded :rules="[requiredField]">
               <template v-slot:prepend>
                  <q-icon name="o_cake" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-sm">
               <q-input v-model="form.tutor.names" :rules="[requiredField, alphaField]" color="indigo-6" class="col-4" label="Nombres" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="person_outline" />
               </template>
               </q-input>
               <q-input v-model="form.tutor.lastname" :rules="[requiredField, alphaField]" color="indigo-6" class="col" label="Apellido Paterno" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="person_outline" />
               </template>
               </q-input>
               <q-input v-model="form.tutor.surname" :rules="[requiredField, alphaField]" color="indigo-6" class="col" label="Apellido Materno" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="person_outline" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-sm">
               <q-input v-model="form.tutor.email" type="email" :rules="[requiredField, emailFormat]" color="indigo-6" class="q-mt-xs col-4" label="Email" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="mail_outline" />
               </template>
            </q-input>
            <q-input v-model="form.tutor.phone" v-maska data-maska="['+569 ########', '+569 ########']" :rules="[requiredField, phoneFormat]" color="indigo-6" class="q-mt-xs col-4" label="Teléfono" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="o_phone_iphone" />
               </template>
            </q-input>
            </div>
         </div>
         </div>

         <q-separator vertical class="q-mx-lg"></q-separator>

         <div class="flex column q-gutter-md q-mt-sm col">
         <div class="text-overline q-my-none q-pl-md">Datos del Domicilio</div>
         <div class="flex column q-ml-none q-mt-xs">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.tutor.address" :rules="[requiredField]" color="indigo-6" class="q-mt-xs col" label="Dirección" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_villa" />
               </template>
               </q-input>
               <q-input v-model.number="form.tutor.numeration" type="number" :rules="[requiredField]" color="indigo-6" style="max-width:170px" class="q-mt-xs" label="Número" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="tag" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-select v-model="form.tutor.region" :options="store.regions" label="Región" class="q-mt-xs col" dense rounded outlined :rules="[requiredField]">
               <template v-slot:prepend>
                  <q-icon name="o_place" />
               </template>
               </q-select>
               <q-select v-model="form.tutor.commune"  option-label="name" :options="communeByRegion" :disable="form.tutor.region == ''" label="Comuna" class="q-mt-xs col" dense rounded outlined :rules="[requiredField]">
               <template v-slot:prepend>
                  <q-icon name="o_pin_drop" />
               </template>
               </q-select>
            </div>
         </div>
         </div>
      </div>
      <q-separator class="q-my-md"></q-separator>

      <!-- <div class="flex row">
         <div class="flex column q-gutter-md q-mt-sm col-6">
         <div class="text-overline q-my-none q-pl-md">Backup - Datos del Apoderado/Tutor</div>
         <div class="flex column q-ml-none q-mt-sm">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.father.rut" mask="##.###.###-X" :rules="[val => validInput(val,'rut')]" color="indigo-6" class="col-4 q-mt-xs" label="RUT" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="o_pin" />
               </template>
               </q-input>
               <q-input v-model="form.father.birthdate" type="date" style="min-width:250px" class="q-mt-xs col-2" label="Fecha de nacimiento"  dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_cake" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-sm">
               <q-input v-model="form.father.names" :rules="[val => validInput(val,'names')]" color="indigo-6" class="col-4" label="Nombres" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="person_outline" />
               </template>
               </q-input>
               <q-input v-model="form.father.lastname" :rules="[val => validInput(val,'lastname')]" color="indigo-6" class="col" label="Apellido Paterno" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="person_outline" />
               </template>
               </q-input>
               <q-input v-model="form.father.surname" :rules="[val => validInput(val,'surname')]" color="indigo-6" class="col" label="Apellido Materno" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="person_outline" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-sm">
               <q-input v-model="form.email" type="email" :rules="[val => validInput(val,'email')]" color="indigo-6" class="q-mt-xs col-4" label="Email" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="mail_outline" />
               </template>
            </q-input>
            <q-input v-model="form.phone" type="tel" prefix="+56" mask="(#) # ### ####" :rules="[val => validInput(val,'phone')]" color="indigo-6" class="q-mt-xs col-3" label="Teléfono" dense outlined rounded>
               <template v-slot:prepend>
               <q-icon name="o_phone_iphone" />
               </template>
            </q-input>
            </div>
         </div>
         </div>

         <q-separator vertical class="q-mx-lg"></q-separator>

         <div class="flex column q-gutter-md q-mt-sm col">
         <div class="text-overline q-my-none q-pl-md">Backup - Datos del Domicilio</div>
         <div class="flex column q-ml-none q-mt-xs">
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-input v-model="form.address" :rules="[val => validInput(val,'address')]" color="indigo-6" class="q-mt-xs col" label="Dirección" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="o_villa" />
               </template>
               </q-input>
               <q-input v-model.number="form.numeration" type="number" :rules="[val => validInput(val,'numeration')]" color="indigo-6" style="max-width:170px" class="q-mt-xs" label="Número" dense outlined rounded>
               <template v-slot:prepend>
                  <q-icon name="tag" />
               </template>
               </q-input>
            </div>
            <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
               <q-select v-model="form.region" :options="regions" label="Región" class="q-mt-xs col" dense rounded outlined>
               <template v-slot:prepend>
                  <q-icon name="o_place" />
               </template>
               </q-select>
               <q-select v-model="form.commune" :options="communes" :disable="form.region == ''" label="Comuna" class="q-mt-xs col" dense rounded outlined>
               <template v-slot:prepend>
                  <q-icon name="o_pin_drop" />
               </template>
               </q-select>
            </div>
         </div>
         </div>
      </div>

      <q-separator class="q-mt-md"></q-separator> -->
   </div>
</template>


<script setup>
   import { defineComponent, ref, computed, inject } from "vue";
   import { useGlobalStore } from '../../../stores/global'
   import { vMaska } from "maska/vue"
   import { requiredField, rutFormat, emailFormat, alphaField, alphaNumericField, phoneFormat } from "src/utils/validations";

   defineComponent({
      name:"GuardianStep"
   })

   const store = useGlobalStore();
   const form = inject("form")

   const communeByRegion = computed(()=>{
      if(form.value.tutor.region) {
         return store.communes.filter((c) => {
            return c.region_id == form.value.tutor.region.id;
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
