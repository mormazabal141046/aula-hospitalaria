<template>
   <q-layout>
   <q-page-container>
         <section class="layout-container flex row">
         <div class="bkg-layout col-6 col-md-12">
            <div class="form-section col">
               <router-view />
            </div>
         </div>
         </section>
   </q-page-container>
   </q-layout>
</template>

<script setup>

</script>

<style lang="css" scoped>
   .bkg-layout{
      height: 100vh;
      width: 100%;
      position: relative;
   }
   .bkg-layout::before{
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url('assets/bkg-login-3.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
      box-shadow: 31px 45px 300px black inset;
   }
</style>
