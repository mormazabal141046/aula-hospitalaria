<template>
  <q-dialog v-model="props.showModal" persistent transition-show="scale" transition-hide="scale">
    <q-card class="text-white dialog-admin">
      <q-card-section class="q-px-xl q-pt-xl">
        <div class="flex justify-end avatar-dialog">
          <q-avatar :icon="textContentDialog.icon" style="background: #0b123e;" text-color="white" size="5em" />
        </div>
        {{ kiu }}
        <q-btn @click="kiu = 'Nola'">asdasdasd</q-btn>
        <div>
          <div class="text-h6">{{textContentDialog.title}}</div>
          {{textContentDialog.subtitle}}
          </div>
      </q-card-section>
      <q-card-section class="q-pa-md q-px-xl bg-white text-indigo-6">
        <div class="flex justify-between items-center content-center">
          Estado para iniciar sesión:
          <q-toggle
            v-model="userModel.state"
            color="indigo-6"
            icon="verified_user"
            :label="setStateUser(userModel.state).tooltip"
            unchecked-icon="remove_moderator"
            dense
            keep-color
            class="color-text-indigo-6 q-ml-md"
            size="lg"
          />
        </div>
        <div class="flex row" style="gap :16px;">
          <q-select v-model="props.userModel.profile" class="q-mt-md col-6" emit-value :options="profiles" :rules="[val => validInput(val,'profile')]" color="indigo-6" dropdown-icon="keyboard_arrow_down" label="Rol" filled dense>
            <template v-slot:prepend>
              <q-icon name="o_workspace_premium" />
            </template>
          </q-select>
        </div>
        <div class="flex row" style="gap :16px;">
          <q-input v-model="props.userModel.name" :rules="[val => validInput(val,'name')]" color="indigo-6" filled class="q-mt-xs col" label="RUT" dense>
            <template v-slot:prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
          <q-input v-model="props.userModel.lastname" :rules="[val => validInput(val,'lastname')]" type="date" color="indigo-6" filled class="q-mt-xs col" label="Fecha de Nacimiento" dense>
            <template v-slot:prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
        </div>
        <q-input v-model="props.userModel.name" :rules="[val => validInput(val,'name')]" color="indigo-6" filled class="q-mt-xs" label="Nombres" dense>
          <template v-slot:prepend>
            <q-icon name="person_outline" />
          </template>
        </q-input>
        <div class="flex row" style="gap :16px;">
          <q-input v-model="props.userModel.lastname" :rules="[val => validInput(val,'lastname')]" color="indigo-6" filled class="q-mt-xs col" label="Apellido Paterno" dense>
            <template v-slot:prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
          <q-input v-model="props.userModel.lastname" :rules="[val => validInput(val,'lastname')]" color="indigo-6" filled class="q-mt-xs col" label="Apellido Materno" dense>
            <template v-slot:prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
        </div>
        <div class="flex row" style="gap :16px;">

          <q-input v-model="props.userModel.email" :rules="[val => validEmail(val)]" :disable="!disableControlEdit" :readonly="!disableControlEdit" color="indigo-6"  filled class="q-mt-xs col" label="Email" dense type="email">
            <template v-slot:prepend>
              <q-icon name="mail_outline" />
            </template>
          </q-input>
          <q-input v-model="props.userModel.lastname" :rules="[val => validInput(val,'lastname')]" color="indigo-6" filled class="q-mt-xs col" label="Teléfono" dense>
            <template v-slot:prepend>
              <q-icon name="person_outline" />
            </template>
          </q-input>
        </div>
        <div class="flex row" style="gap :16px;">
          <q-select v-model="props.userModel.profile" class="q-mt-xs col" emit-value :options="profiles" :rules="[val => validInput(val,'profile')]" color="indigo-6" dropdown-icon="keyboard_arrow_down" label="Región" filled dense>
            <template v-slot:prepend>
              <q-icon name="o_workspace_premium" />
            </template>
          </q-select>
          <q-select v-model="props.userModel.profile" class="q-mt-xs col" emit-value :options="profiles" :rules="[val => validInput(val,'profile')]" color="indigo-6" dropdown-icon="keyboard_arrow_down" label="Comuna" filled dense>
            <template v-slot:prepend>
              <q-icon name="o_workspace_premium" />
            </template>
          </q-select>
        </div>

        <div class="flex row justify-between items-center content-center q-pt-md">
          <div class="flex col items-stretch" style="gap :16px;">
            <q-input  v-model="props.userModel.password" :type="isPwd ? 'password' : 'text'"  color="indigo-6" filled class="q-mt-none" label="Contraseña" dense>
              <template v-slot:prepend>
                <q-icon name="o_vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
              </template>
            </q-input>
            <q-btn icon="o_content_copy" unelevated class="bg-indigo-6" color="white" size="sm" dense padding="4px sm"   @click="copyPassword">
              <q-tooltip v-model="copy" anchor="bottom end" self="top middle" content-class="bg-indigo">
                Copiar
              </q-tooltip>
            </q-btn>
            <q-btn label="Generar" unelevated class="bkg-text-admin" color="indigo" outline @click="props.randomPassword"></q-btn>
          </div>
          <!-- <div class="col-5">
          </div> -->
        </div>


      </q-card-section>
      <q-card-actions align="right" class="q-pa-md q-px-lg bg-white text-indigo-8">
        <q-btn padding="sm lg" flat label="Cancelar" @click="closeModal()" />
        <q-btn class="bkg-text-admin" :disable="disableControl" padding="sm lg" unelevated :label="textContentDialog.btn" @click="actionSubmit()" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { copyToClipboard } from 'quasar'
import { defineComponent, onMounted, ref, computed, inject} from 'vue'

defineComponent({
  name:"ModalUser"
})
const kiu = inject("kiu")
const user = ref({
  role: "",
  rut:"",
  birthday:"",
  names:"",
  lastname:"",
  surname:"",
  email:"",
  phone:"",
  region:"",
  commune:""
})

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  },
  modalMode: {
    type: String,
    default: "create"
  },
  userModel: {
    type: Object,
    default: () => {}
  },
  actionSubmit: {
    type: Function,
    default: () => {}
  },
  closeModal: {
    type: Function,
    default: () => {}
  },
  checkInputs: {
    type: Object,
    default: () => {}
  },
  setStateUser: {
    type: Function,
    default: () => {}
  },
  randomPassword: {
    type: Function,
    default: () => {}
  }
})
const isPwd = ref(false)
const copy = ref(false)
const profiles = ref([
  { label:"Administrador", value:"Administrador" },
  { label:"Director", value:"Director" },
  { label:"Coordinador", value:"Coordinador" },
  { label:"Docente", value:"Docente" },
  { label:"Tutor", value:"Tutor" },
  { label:"Alumno", value:"Alumno" },
])

const textContentDialog = computed(()=>{
//   console.log("textContentDialog", props.modalMode.value);
  return props.modalMode == 'create' ?
  {
    title: 'Nuevo Usuario',
    subtitle: 'Completa los campos solicitados para registrar un nuevo usuario.',
    btn: 'Registrar',
    icon:'las la-user-plus'
  } :
  {
    title: 'Editar Usuario',
    subtitle: 'Solo puedes editar los campos habilitados.',
    btn: 'Actualizar',
    icon:'las la-user-edit'
  }
})
const visibleControl = computed(()=>{
  return props.modalMode == 'create' ? true : false
})
const disableControl = computed(()=>{
//   console.log("disableControl", props.checkInputs);
  let state = Object.values(props.checkInputs).every( item => item == true)
  return !state
})
const disableControlEdit = computed(()=>{
  return props.modalMode == 'edit' ? false : true
})
const disabledRetryPass = computed(()=>{
  return passwordIsValid(props.userModel.credentials.password) ? false : true
})
const disableByCustomer = computed(()=>{
  return props.userModel.userprofile.customer ? false : true
})
const existModulePoi = computed(()=>{
  let exist = props.userModel.modulesSelected.find(item => item.value == "pointofinterest")
  return exist ? true : false
})

onMounted(() =>{
//   console.log("onMounted Modal User",props.modalMode.value);
  if(props.modalMode == "edit"){
    validAllInputs()
  }else{
    props.randomPassword()
  }
});

const validInput = (value, input) => {
  let valid = (value.length > 0 || Object.keys(value).length > 0)
  props.checkInputs[input] = valid
  return valid || 'Este campo es requerido'
}
const validEmail = (email) => {
  let valid = emailIsValid(email)
  props.checkInputs.email = valid
  return valid || "Ingresa un correo válido";
}
const validPassword = (password) => {
  let valid = passwordIsValid(password)
  props.checkInputs.pass = valid
  return valid || "Ingresa una contraseña válida";
}
const validRetryPassword = (password) => {
  let valid = password == props.userModel.value.credentials.password
  props.checkInputs.retry_pass = valid
  return valid || "Las contraseñas deben ser iguales"
}
const validAllInputs = () => {
  validInput(props.userModel.name, 'name');
  validInput(props.userModel.lastname, 'lastname');
  validInput(props.userModel.profile, 'profile');
}
const emailIsValid = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regex.test(String(email).toLowerCase());
}
const copyPassword = () => {
  copy.value = true;
  copyToClipboard(props.userModel.password).then(() => { })
  .catch(() => {})
  timer.value = setTimeout(() => {
    timer.value = setTimeout(() => {
        timer.value = void 0
        copy.value = false;
    }, 1000)
  }, 100)


}
</script>

<style>
.dialog-admin{
  border-radius: 12px !important;
  width: 700px;
  max-width: 700px !important;
  background: #1c2559;
}
.avatar-dialog{
  position: absolute;
  top: 10px;
  right: 20px;
}
</style>
