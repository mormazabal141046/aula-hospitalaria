<template>
    <q-dialog v-model="showModal" transition-show="scale" transition-hide="scale" persistent>
        <q-card class="text-white dialog-admin">
        <q-card-section class="q-px-xl q-pt-xl">
            <div class="flex justify-end avatar-dialog">
                <q-avatar icon="lock_reset" style="background: #0b123e;" text-color="white" size="5em" />
            </div>
            <div>
                <div class="text-h6">Cambiar Contraseña</div>
                Puedes modificar tu contraseña actual por una nueva aqui.
            </div>
        </q-card-section>
        <q-card-section class="q-pa-md q-px-xl bg-white text-indigo-6">
            <div class="text-subtitle2">Tu nueva contraseña debe contener al menos 6 caracteres.</div>
            <q-input v-model="newPassword" :type="isPwd ? 'password' : 'text'"  color="indigo-6" filled class="q-mt-lg" label="Nueva Contraseña" dense>
                <template v-slot:prepend>
                <q-icon name="o_vpn_key" />
                </template>
                <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
            </q-input>
            <q-input v-model="repeatPassword" :type="isPwd ? 'password' : 'text'"  color="indigo-6" filled class="q-mt-lg" label="Confirma Contraseña" dense>
                <template v-slot:prepend>
                <q-icon name="o_vpn_key" />
                </template>
                <template v-slot:append>
                <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                </template>
            </q-input>
        </q-card-section>
        <q-card-actions align="right" class="q-pa-md q-px-lg bg-white text-indigo-8">
            <q-btn padding="sm lg" flat label="Cancelar" @click="closeModal" />
            <q-btn color="primary" :disable="disableControl" padding="sm lg" unelevated label="Actualizar" @click="changePassword(newPassword)" />
        </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script setup>
import { defineComponent, ref, computed } from "vue";

defineComponent({
  name: 'ChangePassword'
})

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  },
  changePassword: {
    type: Function,
    default: () => {}
  },
  closeModal: {
    type: Function,
    default: () => {}
  }
})

const isPwd = ref(true)
const newPassword = ref("")
const repeatPassword = ref("")

const disableControl = computed(()=>{
  return newPassword.value.length >= 6 && (newPassword.value === repeatPassword.value ) ? false : true
})


</script>

<style lang="scss" scoped>
    .dialog-admin{
        border-radius: 12px !important;
        width: 500px;
        background: #1c2559;
    }
    .avatar-dialog{
        position: absolute;
        top: 10px;
        right: 20px;
    }
    :deep(.q-field--dense.q-field--float .q-field__label){
        color: #323232;
        font-weight: 700;
        font-size: 16px;
    }
</style>
