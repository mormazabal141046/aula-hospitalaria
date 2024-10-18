<template>
  <div>
    <!-- <p class="q-pb-md">Completa los datos inidcados a continuación. Recuerda que los datos asociados a la institución es donde será efectiva la matricula.</p> -->

    <div class="flex row">
      <div class="flex column q-gutter-md q-mt-sm col-6">
        <div class="text-overline q-my-none q-pl-md">Datos del Padre</div>
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
        </div>
      </div>

      <q-separator vertical class="q-mx-lg"></q-separator>

      <div class="flex column q-gutter-md q-mt-sm col">
        <div class="text-overline q-my-none q-pl-md">Datos de la Madre</div>
        <div class="flex column q-ml-none q-mt-xs">
          <div class="flex row q-gutter-x-md q-ml-none q-mt-sm">
            <q-input v-model="form.mother.rut" mask="##.###.###-X" :rules="[val => validInput(val,'rut')]" color="indigo-6" class="col-4 q-mt-xs" label="RUT" dense outlined rounded>
            <template v-slot:prepend>
              <q-icon name="o_pin" />
            </template>
            </q-input>
            <q-input v-model="form.mother.birthdate" type="date" style="min-width:250px" class="q-mt-xs col-" label="Fecha de nacimiento"  dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="o_cake" />
              </template>
            </q-input>
          </div>
          <div class="flex row q-gutter-x-md q-ml-none q-mt-sm">
            <q-input v-model="form.mother.names" :rules="[val => validInput(val,'names')]" color="indigo-6" class="col-4" label="Nombres" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="person_outline" />
              </template>
            </q-input>
            <q-input v-model="form.mother.lastname" :rules="[val => validInput(val,'lastname')]" color="indigo-6" class="col" label="Apellido Paterno" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="person_outline" />
              </template>
            </q-input>
            <q-input v-model="form.mother.surname" :rules="[val => validInput(val,'surname')]" color="indigo-6" class="col" label="Apellido Materno" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="person_outline" />
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </div>

    <q-separator class="q-my-md"></q-separator>

    <div class="flex column">
      <div class="text-overline q-my-none q-pl-md">Información del Hogar</div>
      <div class="flex row q-gutter-md q-mt-sm">
        <q-select v-model="form.family_members"  multiple :options="family_members" label="Personas con quien vive" class="q-mt-xs col-5"  dense rounded outlined >
          <template v-slot:prepend>
            <q-icon name="o_groups" />
          </template>
        </q-select>
        <q-input v-model.number="form.total_home" type="number" :rules="[val => validInput(val,'total_home')]" color="indigo-6" class="q-mt-xs col-3" label="N° de personas en el hogar" dense outlined rounded>
          <template v-slot:prepend>
            <q-icon name="o_home" />
          </template>
        </q-input>
      </div>
      <div class="flex row q-gutter-md q-mt-sm">
        <q-input v-model.number="form.total_brothers" type="number" :rules="[val => validInput(val,'total_brothers')]" color="indigo-6" class="q-mt-xs col-2" label="Total Hermanos" dense outlined rounded>
          <template v-slot:prepend>
            <q-icon name="o_people" />
          </template>
        </q-input>
        <q-select v-model="form.position_family" :options="positions" label="Lugar que ocupa"  class="q-mt-xs col-3" dense rounded outlined>
          <template v-slot:prepend>
            <q-icon name="o_format_list_numbered" />
          </template>
        </q-select>
      </div>
    </div>
    <q-separator class="q-mt-md"></q-separator>
  </div>
</template>


<script setup>
  import { defineComponent, ref } from "vue";

  defineComponent({
    name:"FamilyStep"
  })

  const family_members = ref([
    { label: 'Padre', value: 'Padre' },
    { label: 'Madre', value: 'Madre', color: 'green' },
    { label: 'Hermano', value: 'Hermano', color: 'green' },
    { label: 'Hermana', value: 'Hermana', color: 'green' },
    { label: 'Abuelo', value: 'Abuelo', color: 'green' },
    { label: 'Abuela', value: 'Abuela', color: 'green' },
    { label: 'Tío/a', value: 'Tío/a', color: 'red' },
    { label: 'Primo/a', value: 'Primo/a', color: 'red' },
  ])
  const positions = ref([
    { label: "Primero", value: 1 },
    { label: "Segundo", value: 2 },
    { label: "Tercero", value: 3 },
    { label: "Cuarto", value: 4 },
    { label: "Quinto", value: 5 },
    { label: "Sexto", value: 6 },
    { label: "Séptimo", value: 7 },
  ])
  const form = ref({
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
  })
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
