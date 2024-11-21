<template>
   <q-dialog v-model="props.showModal" persistent transition-show="scale" transition-hide="scale">
      <q-card class="modal-bg text-white" style="width: 450px">
         <q-card-section>
         <div class="text-h6 text-center">¿Estas seguro?</div>
         </q-card-section>

         <q-card-section class="text-center q-pa-lg bg-white color-modal">
         Has seleccionado <b>{{ props.config.type }}</b> el {{ props.config.attribute }} del {{ props.config.user }}. <br><br>
         <strong>¿Desea Continuar?</strong>
         </q-card-section>

         <q-card-actions align="right" class="bg-white color-modal q-px-md q-pb-md q-pt-none">
         <q-btn flat label="Cancelar" @click="closeModal()" padding="8px 24px" rounded />
         <q-btn label="Continuar" @click="props.actionSubmit()" padding="8px 24px" rounded class="btn-bg text-white" unelevated />
         </q-card-actions>
      </q-card>
   </q-dialog>
</template>

<script setup>
import { defineComponent, inject } from "vue"

defineComponent({
   name: "ModalUpdateStateUser"
})

const props = defineProps({
   showModal: {
      type: Boolean,
      default: false
   },
   config: {
      type: Object,
      default: () => { }
   },
   actionSubmit: {
      type: Function,
      default: () => { }
   }
})

const showModalUpdateState = inject("showModalUpdateState")
const closeModal = ()=>{
   showModalUpdateState.value = false
   return
}
</script>

<style>
.modal-bg {
   background: #697685;
   border-radius: 8px !important;
}

.btn-bg {
   background: var(--primary);
}

.color-modal {
   color: var(--text-color);
}

.bkg-text-admin {
   background: white;
   color: #646BF2;
   border-radius: 5px;
   border: 1px solid #E3E3E3;
}

.modal-custom {
   padding: 5px 25px 20px 25px;
}

.modal-custom .q-dialog__title,
.modal-custom .q-dialog__message,
.modal-custom .q-card__actions {
   text-align: center;
   align-items: center;
   justify-content: center;
}

.sublabel-custom {
   margin-bottom: -10px;
}</style>
