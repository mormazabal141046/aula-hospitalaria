<template>
    <q-page class="flex flex-center">
      LogoutPage
  </q-page>
</template>

<script setup>
  import { defineComponent, onMounted } from 'vue'
  import { useUserStore } from '../stores/users'
  defineComponent({
    name:"LogoutPage"
  })

  const store = useUserStore();
  onMounted(()=>{
   //  console.log("LogoutPage", store.currentUser)

  })

</script>

<style lang="scss" scoped>

</style>
