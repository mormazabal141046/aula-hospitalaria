<template>
    <q-layout>
      <q-page-container>
          <section class="layout-container flex row">
            <div class="bkg-layout col-7"></div>
            <div class="form-section col-5">
              <router-view />
            </div>
          </section>
      </q-page-container>
    </q-layout>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="css" scoped>
  .bkg-layout{
    background: red;
    height: 100vh;
    background-image: url('assets/bkg-login.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .form-section{
  }
</style>
