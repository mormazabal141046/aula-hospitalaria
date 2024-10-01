<template>
    <q-page class="flex flex-center">
      LogoutPage
  </q-page>
</template>

<script setup>
  import { defineComponent, onMounted } from 'vue'
  import { useLoginStore } from '../stores/login'
  defineComponent({
    name:"LogoutPage"
  })

  const store = useLoginStore();
  onMounted(()=>{
    console.log("LogoutPage", store.currentUser)

  })

</script>

<style lang="scss" scoped>

</style>
