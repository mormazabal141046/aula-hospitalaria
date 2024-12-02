<template>
   <q-dialog v-model="props.showModal" persistent transition-show="scale" transition-hide="scale">
      <q-card class="modal-bg text-white" style="width: 450px">
         <q-card-section>
         <div class="text-h6 text-center">¿Estas seguro?</div>
         </q-card-section>

         <q-card-section class="text-center q-pa-lg bg-white color-modal">
         ¿Desea finalizar la clase de la asignatura de <b>"Inglés" 1° Básico</b> para Jorge Andrade?<br><br>
         <q-select v-model="motivo" :options="motivos" :rules="[requiredField]" label="Glosa de Cierre"  class="q-mt-xs col" dense rounded outlined>
            <template v-slot:prepend>
               <q-icon name="o_person_pin_circle" />
            </template>
         </q-select>
         </q-card-section>
         <q-card-actions align="center" class="bg-white color-modal q-px-md q-pb-md q-pt-none">
            <q-btn flat label="Cancelar" @click="closeModal" padding="8px 24px" rounded />
            <q-btn label="Finalizar" @click="actionSubmit" padding="8px 24px" rounded class="btn-bg text-white" unelevated :disabled="motivo == ''" />
         </q-card-actions>
      </q-card>
   </q-dialog>
</template>

<script setup>
import { defineComponent, inject, ref } from "vue"

defineComponent({
   name: "ModalCloseSubject"
})

const props = defineProps({
   showModal: {
      type: Boolean,
      default: false
   }
})
const motivo = ref("")
const motivos = ref([
   {
      id: 1,
      label: "Clase normal"
   },
   {
      id: 2,
      label: "Alumno en mal estado de salud"
   },
   {
      id: 3,
      label: "Alumno asuente en domicilio"
   },
   {
      id: 4,
      label: "Emergencia docente"
   },
   {
      id: 5,
      label: "Otros"
   },
])
const modal = inject("modal")
const subjects_progress = inject("subjects_progress")
const subjects_finished = inject("subjects_finished")

const closeModal = ()=>{
   modal.value = false
}
const actionSubmit = ()=>{
   subjects_finished.value = subjects_progress.value
   subjects_progress.value = []
   modal.value = false
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
