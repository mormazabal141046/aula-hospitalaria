
<template>
  <div>
    <!-- <p class="q-pb-md">Completa los datos inidcados a continuación. Recuerda que los datos asociados a la institución es donde será efectiva la matricula.</p> -->

    <div class="flex row">
      <div class="flex column q-gutter-md q-mt-sm col-6">
        <div class="text-overline q-my-none q-pl-md">Adjuntar Documentación</div>
        <div class="flex column q-ml-none q-mt-sm">
          <div class="flex column q-gutter-md q-ml-none q-mt-xs">
            <q-input v-model="form.names" :rules="[val => validInput(val,'names')]" color="indigo-6" class="q-mt-xs col" label="Certificado Médico" dense outlined rounded>
                <template v-slot:prepend>
                  <q-icon name="o_link" />
                </template>
            </q-input>
            <q-input v-model="form.names" :rules="[val => validInput(val,'names')]" color="indigo-6" class="q-mt-xs col" label="Autorización Escrita Apoderado" dense outlined rounded>
                <template v-slot:prepend>
                  <q-icon name="o_link" />
                </template>
            </q-input>
            <!-- <q-file v-model="form.medical_document" label="Certificado Médico" color="indigo-6" class="q-mt-xs col" dense outlined rounded counter use-chips>
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
              <template v-slot:file="{ index, file }">
                <q-chip
                  class="q-my-xs"
                  color="grey-12" text-color="white"
                  removable=""
                >{{ file.name }}</q-chip>
              </template>
            </q-file>
            {{ form.medical_document }}
            <q-file v-model="form.medical_document" label="Certificado Médico" color="indigo-6" class="q-mt-xs col" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file>
            <q-file v-model="form.medical_document" label="Certificado Médico" color="indigo-6" class="q-mt-xs col" dense outlined rounded>
              <template v-slot:prepend>
                <q-icon name="attach_file" />
              </template>
            </q-file> -->
          </div>

        </div>
      </div>

      <!-- <q-separator vertical class="q-mx-lg"></q-separator>

      <div class="flex column q-gutter-md q-mt-sm col">
        <div class="text-overline q-my-none q-pl-md">Datos del Domicilio</div>
        <div class="flex column q-ml-none q-mt-xs">

        </div>
      </div> -->
    </div>
    <q-separator class="q-mt-md"></q-separator>

    <!-- <q-btn @click="sendEmail">sdfsdf </q-btn> -->


  </div>
</template>


<script setup>
  import { defineComponent, ref } from "vue";

  defineComponent({
    name:"AttachDocumentsStep"
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
    medical_document: null,
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


  const sendEmail = ()=>{
    console.log("sendEmail");
    Email.send({
      Host : "smtp.elasticemail.com",
      Port:"2525",
      Username : "ahospitalaria2024@gmail.com",
      Password : "E924C3DDF5E46D98606BF7F2C9C543035CF1",
      To : 'ahospitalaria2024@gmail.com',
      From : "ahospitalaria2024@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }).then(
      message => alert(message)
    );

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
