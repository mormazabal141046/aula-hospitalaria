<template>
  <div>
    <!-- <p class="q-pb-md">Completa los datos inidcados a continuación. Recuerda que los datos asociados a la institución es donde será efectiva la matricula.</p> -->

    <div class="flex column q-mb-lg">
      <div class="text-overline q-my-none q-pl-md">Datos de la Institución</div>
      <div class="flex row q-gutter-md q-mt-none">
        <q-select v-model="form.headquarters" :options="headquarters" label="Sede" style="width: 280px;" dense rounded outlined>
          <template v-slot:prepend>
            <q-icon name="o_foundation" />
          </template>
        </q-select>
        <q-select v-model="form.modalities" :options="modalities" label="Modalidad de Atención" style="width: 280px;" dense rounded outlined>
            <template v-slot:prepend>
            <q-icon name="o_person_pin_circle" />
          </template>
        </q-select>
        <div class="col-2">
          <q-toggle v-model="is_program" color="teal" checked-icon="check" unchecked-icon="clear" label="Programa de apoyo" />
        </div>
        <q-select v-if="is_program" v-model="form.support_programme" :options="support_programs" label="Programa de apoyo" style="width: 280px;" dense rounded outlined>
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
          <q-input v-model="form.rut" mask="##.###.###-X" :rules="[val => validInput(val,'rut')]" color="indigo-6" class="col-2" label="RUT" dense outlined rounded>
            <template v-slot:prepend>
              <q-icon name="o_pin" />
            </template>
          </q-input>
          <q-input v-model="form.names" :rules="[val => validInput(val,'names')]" color="indigo-6" class="col-3" label="Nombres" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="person_outline" />
              </template>
          </q-input>
          <q-input v-model="form.lastname" :rules="[val => validInput(val,'lastname')]" color="indigo-6" class="col-3" label="Apellido Paterno" dense outlined rounded>
            <template v-slot:prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
          <q-input v-model="form.surname" :rules="[val => validInput(val,'surname')]" color="indigo-6" class="col-3" label="Apellido Materno" dense outlined rounded>
            <template v-slot:prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
        </div>
        <div class="flex q-gutter-md q-mt-xs row">
          <q-input v-model="form.birthdate" type="date" style="min-width:250px" class="q-mt-xs col-2" label="Fecha de nacimiento"  dense outlined rounded>
            <template v-slot:prepend>
              <q-icon name="o_cake" />
            </template>
          </q-input>
          <q-input v-model="form.email" type="email" :rules="[val => validInput(val,'email')]" color="indigo-6" class="q-mt-xs col-3" label="Email" dense outlined rounded>
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
    <q-separator class="q-my-md"></q-separator>
    <div class="flex row">
      <div class="flex column q-gutter-md q-mt-sm col-6">
        <div class="text-overline q-my-none q-pl-md">Datos del Domicilio</div>
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

      <q-separator vertical class="q-mx-lg"></q-separator>

      <div class="flex column q-gutter-md q-mt-sm col">
        <div class="text-overline q-my-none q-pl-md">Información Académica</div>
        <div class="flex column q-ml-none q-mt-xs">
          <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
            <q-input v-model="form.school" :rules="[val => validInput(val,'school')]" color="indigo-6" class="q-mt-xs col-5" label="Colegio Origen" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="o_school" />
              </template>
            </q-input>
            <q-select v-model="form.level" :options="courses" label="Nivel curso"  class="q-mt-xs col" dense rounded outlined>
              <template v-slot:prepend>
                <q-icon name="o_person_pin_circle" />
              </template>
            </q-select>
            <q-input v-model="form.course" :rules="[val => validInput(val,'course')]"  color="indigo-6" class="q-mt-xs col" label="Curso" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="o_upgrade" />
              </template>
            </q-input>
          </div>
          <div class="flex row q-gutter-x-md q-ml-none q-mt-xs">
            <q-input v-model="form.medical_diagnosis" :rules="[val => validInput(val,'medical_diagnosis')]" color="indigo-6" class="q-mt-xs col" label="Diagnostico" dense outlined rounded>
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
  import { defineComponent, ref } from "vue";

  defineComponent({
    name:"StudentStep"
  })
  const headquarters = ref(['Arica', 'Iquique', 'Antofagasta', 'Copiapó', 'La Serena', 'Coquimbo', 'Ovalle'])
  const regions = ref(['Arica', 'Iquique', 'Antofagasta', 'Copiapó', 'La Serena', 'Coquimbo', 'Ovalle'])
  const communes = ref(['Arica', 'Iquique', 'Antofagasta', 'Copiapó', 'La Serena', 'Coquimbo', 'Ovalle'])
  const modalities = ref(['Sala Cama', 'Hospital', 'Domicilio'])
  const support_programs = ref(['Aula Remota', 'AIESS'])
  const courses = ref([{ label: "1° Básico", value: "1_basico"}])
  const form = ref({
    headquarters: '',
    mode:'',
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
  })
  const is_program =ref(false)
  const checkInputs = ref({
    name:false,
    lastname: false,
    email:false,
  })
  const validInput = (value, input) => {
    let valid = (value.length > 0 || Object.keys(value).length > 0)
    checkInputs[input] = valid
    return valid || 'Este campo es requerido'
  }
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
