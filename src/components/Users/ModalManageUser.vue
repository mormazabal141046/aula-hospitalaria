<template>
<q-dialog v-model="props.showModal" persistent transition-show="scale" transition-hide="scale">
   <q-card class="text-white dialog-admin">
      <q-card-section class="q-px-sm-xl q-px-lg q-pt-xl">
         <div class="flex justify-end avatar-dialog">
               <q-avatar :icon="textContentDialog.icon" style="background: #0b123e;" text-color="white" size="5em" />
         </div>
         <div>
               <div class="text-h6">{{textContentDialog.title}}</div>
               {{textContentDialog.subtitle}}
         </div>
      </q-card-section>
      <q-card-section class="flex column q-pa-md q-px-sm-md q-px-lg bg-white text-primary">
         <q-stepper
            v-model="step"
            ref="stepper"
            color="primary"
            animated
            bordered
            class="no-shadow"
         >
            <q-step :name="1" title="Información Personal" caption="Obligatorio"  icon="settings" :done="step > 1">
               <q-card-section class="flex column q-pa-md q-px-sm-sm q-px-lg bg-white text-primary">
                  <div class="flex row-sm column justify-between items-sm-center items-start  q-mb-md">
                     <span>Estado para iniciar sesión:</span>
                     <q-toggle v-model="user.state" icon="verified_user" :label="setStateUser(user.state).tooltip" unchecked-icon="remove_moderator" dense class="" size="lg" />
                  </div>
                  <div class="flex row-sm column gap-0 gap-sm-16">
                     <q-select v-model="user.role" class="q-mt-xs col" emit-value :options="roles" color="indigo-6" dropdown-icon="keyboard_arrow_down" label="Rol" filled dense :rules="[requiredField]">
                        <template v-slot:prepend>
                           <q-icon name="o_person_pin" />
                        </template>
                     </q-select>
                     <q-select v-model="user.headquarters" class="q-mt-xs col" :options="store_global.headquarters" dropdown-icon="keyboard_arrow_down" label="Sede" filled dense :rules="[requiredField]">
                        <template v-slot:prepend>
                           <q-icon name="o_account_balance" />
                        </template>
                     </q-select>

                  </div>
                  <div class="flex row-sm column gap-0 gap-sm-16">
                     <q-input v-model="user.rut" color="indigo-6" name="rut" filled class="q-mt-xs col" label="RUT" dense v-maska data-maska="['#.###.###-*', '##.###.###-*']" :rules="[requiredField, rutFormat]" :readonly="!disableControlEdit" :disable="!disableControlEdit">
                        <template v-slot:prepend>
                           <q-icon name="o_pin" />
                        </template>
                     </q-input>
                     <q-input v-model="user.birthday"  type="date" color="indigo-6" filled class="q-mt-xs col" label="Fecha de Nacimiento" dense :rules="[requiredField]">
                        <template v-slot:prepend>
                           <q-icon name="o_cake" />
                        </template>
                     </q-input>
                  </div>
                  <q-input v-model="user.names" color="indigo-6" filled class="q-mt-xs" label="Nombres" dense :rules="[requiredField, alphaField]" :readonly="!disableControlEdit" :disable="!disableControlEdit">
                     <template v-slot:prepend>
                        <q-icon name="person_outline" />
                     </template>
                  </q-input>
                  <div class="flex row-sm column gap-0 gap-sm-16">
                     <q-input v-model="user.lastname" color="indigo-6" filled class="q-mt-xs col" label="Apellido Paterno" dense :rules="[requiredField, alphaField]" :readonly="!disableControlEdit" :disable="!disableControlEdit">
                        <template v-slot:prepend>
                           <q-icon name="person_outline" />
                        </template>
                     </q-input>
                     <q-input v-model="user.surname" color="indigo-6" filled class="q-mt-xs col" label="Apellido Materno" dense :rules="[requiredField, alphaField]" :readonly="!disableControlEdit" :disable="!disableControlEdit">
                        <template v-slot:prepend>
                           <q-icon name="person_outline" />
                        </template>
                     </q-input>
                  </div>
               </q-card-section>
            </q-step>

            <q-step :name="2" title="Datos de la Cuenta" caption="Obligatorio" icon="create_new_folder" :done="step > 2">
               <q-card-section class="flex column q-pa-md q-px-sm-sm q-px-lg bg-white text-primary">
                  <div class="flex row-sm column gap-0 gap-sm-16">
                     <q-input v-model="user.email" color="indigo-6" filled class="q-mt-xs col" label="Email" dense type="email" :rules="[requiredField, emailFormat]">
                        <template v-slot:prepend>
                           <q-icon name="mail_outline" />
                        </template>
                     </q-input>
                     <q-input v-model="user.phone" color="indigo-6" filled class="q-mt-xs col" label="Teléfono" dense v-maska data-maska="['+569 ########', '+569 ########']" :rules="[requiredField, phoneFormat]">
                        <template v-slot:prepend>
                           <q-icon name="o_phone_iphone" />
                        </template>
                     </q-input>
                  </div>
                  <div class="flex row-sm column gap-0 gap-sm-16">
                     <q-select v-model="user.region" class="q-mt-xs col" emit-value :options="store_global.regions" color="indigo-6" dropdown-icon="keyboard_arrow_down" label="Región" filled dense :rules="[requiredField]">
                        <template v-slot:prepend>
                           <q-icon name="o_travel_explore" />
                        </template>
                     </q-select>
                     <q-select v-model="user.commune" class="q-mt-xs col" option-label="name" :options="communeByRegion" :disable="user.region == ''" color="indigo-6" dropdown-icon="keyboard_arrow_down" label="Comuna" filled dense :rules="[requiredField]">
                        <template v-slot:prepend>
                           <q-icon name="o_pin_drop" />
                        </template>
                     </q-select>
                  </div>
                  <div class="flex row-sm column gap-0 gap-sm-16">
                     <q-input v-model="user.address" color="indigo-6" filled class="q-mt-xs col" label="Dirección" dense :rules="[requiredField]">
                        <template v-slot:prepend>
                           <q-icon name="o_signpost" />
                        </template>
                     </q-input>
                     <q-input v-model="user.numeration" color="indigo-6" filled class="q-mt-xs col-4" label="N°/Depto/Oficina" dense :rules="[requiredField]">
                        <template v-slot:prepend>
                           <q-icon name="o_tag" />
                        </template>
                     </q-input>
                  </div>

                  <div v-if="disableControlEdit" class="flex row justify-between items-center content-center q-pt-md">
                     <div class="flex col items-stretch" >
                        <q-input v-model="user.password" :type="isPwd ? 'password' : 'text'" color="indigo-6" filled class="q-mt-none" label="Contraseña" dense :rules="[requiredField]">
                           <template v-slot:prepend>
                                 <q-icon name="o_vpn_key" />
                           </template>
                           <template v-slot:append>
                                 <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                           </template>
                        </q-input>
                        <div class="flex row items-stretch full-height" style="gap: 16px;">
                           <q-btn icon="o_content_copy" unelevated class="bg-primary" style="color:white;" size="sm" dense padding="4px sm" @click="copyPassword">
                              <q-tooltip v-model="copy" anchor="bottom end" self="top middle" content-class="bg-indigo">
                                 Copiar
                              </q-tooltip>
                           </q-btn>
                           <q-btn label="Generar" outlined @click="randomPassword()" padding="8px 24px" rounded class="btn-bg text-white" unelevated />
                        </div>
                     </div>
                  </div>
               </q-card-section>
            </q-step>
         </q-stepper>
      </q-card-section>
      <q-card-actions align="right" class="q-pa-md q-px-lg bg-white text-primary">
         <q-btn flat label="Cancelar" @click="closeModalNotify()" padding="8px 24px" rounded />
         <q-btn v-if="step == 2" label="Atrás" @click="step = step - 1" padding="8px 24px" outline rounded />
         <q-btn v-if="step > 0 && step < 2" label="Continuar"  @click="step = step + 1" padding="8px 24px" outline rounded unelevated />
         <q-btn v-else :label="textContentDialog.btn" @click="actionSubmit()" :disabled="disableControl" padding="8px 24px" rounded class="btn-bg text-white" unelevated />
      </q-card-actions>
   </q-card>
</q-dialog>
</template>

<script setup>

import { defineComponent, onMounted, ref, computed, inject } from 'vue'
import { copyToClipboard, useQuasar } from 'quasar'
import { useUserStore } from '../../stores/users'
import { useGlobalStore } from '../../stores/global'
import { vMaska } from "maska/vue"
import { requiredField, rutFormat, emailFormat, alphaField, alphaNumericField, phoneFormat } from "src/utils/validations";


defineComponent({
    name: "ModalManageUser",
})
const props = defineProps({
   showModal: {
      type: Boolean,
      default: false
   },
   modalMode: {
      type: String,
      default: "create"
   }
})

const manageUserModal = inject("manageUserModal")
const getUsers = inject("getUsers")
const showNotify = inject("showNotify")
const setMessageModal = inject("setMessageModal")
const dataEditUser = inject("dataEditUser")

const step = ref(1)
const $q = useQuasar()
const store = useUserStore();
const store_global = useGlobalStore();
const user = ref({
   state: true,
   headquarters:null,
   role: "",
   rut: "",
   birthday: "",
   names: "",
   lastname: "",
   surname: "",
   email: "",
   phone: "",
   region: "",
   commune: "",
   address:"",
   numeration:"",
   password:""
})
const isPwd = ref(false)
const copy = ref(false)
const roles = ref([
   // {
   //    label: "Administrador",
   //    value: "Administrador",
   // },
   {
      label: "Director",
      value: "Director"
   },
   {
      label: "Coordinador",
      value: "Coordinador"
   },
   {
      label: "Docente",
      value: "Docente"
   },
   {
      label: "Alumno",
      value: "Alumno"
   },
   {
      label: "Apoderado",
      value: "Apoderado"
   }
])

onMounted(() => {
   if (props.modalMode == "edit") {
      user.value =  dataEditUser.value
   } else {
      randomPassword()
   }
});

const textContentDialog = computed(() => {
   return props.modalMode == 'create' ? {
      title: 'Nuevo Usuario',
      subtitle: 'Completa los campos solicitados para registrar un nuevo usuario.',
      btn: 'Registrar',
      icon: 'las la-user-plus'
   } : {
      title: 'Editar Usuario',
      subtitle: 'Solo puedes editar los campos habilitados.',
      btn: 'Actualizar',
      icon: 'las la-user-edit'
   }
})
const disableControlEdit = computed(() => {
   return props.modalMode == 'edit' ? false : true
})

const disableControl = computed(() => {
   let state = Object.values(user.value).every(item => item != "")
   return !state
})
const communeByRegion = computed(()=>{
   if(user.value.region) {
      return store_global.communes.filter((c) => {
         return c.region_id == user.value.region.id;
      }).sort((a,b) => a.name.localeCompare (b.name));;
   } else {
      return [{id: -1, name: 'empty'}];
   }
})
const showHeadquarters = ()=>{

}
const actionSubmit = async ()=>{
   if(props.modalMode == 'create'){
      await createUser()
   }else{
      await updateUser()
   }
}
const createUser = async () => {
   let account = {
      email: user.value.email,
      password: user.value.password,
   }

   delete user.value.password
   account.data = user.value

   const dialog = showNotify("Registrando Nuevo Usuario")
   let result = await store.CREATE_USER(account)
   let response = await setMessageModal(result.code)

   setTimeout(() => {
      dialog.update(response)
         .onOk(async () => {
            if (result.code == 201) {
               await getUsers()
            }
         })
         manageUserModal.value = result.code == 201 ? false : true
   }, 1500)
}
const updateUser = async () =>{
   // console.log("updateUser");
}
const setStateUser = (state) => {
   return state ? {
      icon: 'verified_user',
      colorIcon: 'teal-13',
      colorBkg: 'teal-14',
      tooltip: 'Habilitado'
   } : {
      icon: 'remove_moderator',
      colorIcon: 'indigo-2',
      colorBkg: 'indigo-4',
      tooltip: 'Deshabilitado'
   }
}
const randomPassword = () => {
   let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let passwordLength = 12;
   let password = "";
   for (var i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
   }
   user.value.password = password
   return password
}
const copyPassword = () => {
   copy.value = true;
   copyToClipboard(user.password).then(() => {})
   .catch(() => {})
   timer.value = setTimeout(() => {
      timer.value = setTimeout(() => {
         timer.value = void 0
         copy.value = false;
      }, 1000)
   }, 100)

}
const closeModalNotify = () =>{
   $q.dialog({
      class:'modal-custom',
      color: 'indigo-6',
      title: "¿Estas Seguro?",
      message: "Estas a punto de cerrar el formulario.<br> ¿Desea continuar en él?",
      persistent: true,
      ok: {
         label: "Continuar",
         unelevated: true,
         padding: '8px 24px',
         color:'primary',
         rounded: true,
      },
      cancel: {
         label: "Cerrar",
         flat:true,
         unelevated: true,
         padding: '8px 24px',
         color:'primary',
         rounded: true,
      },
      html: true,
   }).onCancel(()=>{
      manageUserModal.value = false
   })
}
</script>

<style>
.dialog-admin {
   border-radius: 12px !important;
   width: 700px;
   max-width: 700px !important;
   background: #003169;
}
.bg-primary{
   background: #003169;
}

.avatar-dialog {
   position: absolute;
   top: 10px;
   right: 20px;
}
</style>
