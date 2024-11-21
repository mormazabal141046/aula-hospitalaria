<template>
   <router-view />
</template>

<script setup>
import { defineComponent, provide } from 'vue';
import { QSpinnerGears, useQuasar } from 'quasar'
import "quasar/src/css/flex-addon.sass";

defineComponent({
   name: 'App'
});

const $q = useQuasar()
const showNotify = (title) =>{
   return $q.dialog({
      class:'modal-custom',
      stackButtons: true,
      color: 'indigo-6',
      title: title,
      message: 'Procesando...',
      progress: {
         spinner: QSpinnerGears,
         color: 'indigo-8'
      },
      persistent: true,
      ok: false,
      html: true
   })
}

const setMessageModal = (code) =>{
   let response = {}
   if(code == 200){
      response.title = "Éxito!"
      response.message = `Usuario Actualizado Correctamente!`
   }
   if(code == 201){
      response.title = "Éxito!"
      response.message = `Usuario Registrado Correctamente!`
   }
   if(code == 202){
      response.title = "Ups!"
      response.message = `El Email ingresado ya existe!. Por favor intente con otro!`
   }
   if(code == 400){
      response.title = "Ups!"
      response.message = `Ha ocurrido un problema. Por favor intente nuevamente!`
   }
   response.progress= false
   response.ok = {
      label: "Listo",
      unelevated: true,
      padding: 'xs lg',
      color:'indigo-6',
      dense: true,
   }
   return response
}
provide("showNotify", showNotify)
provide("setMessageModal", setMessageModal)

</script>
