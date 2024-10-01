<template>
  <q-page class="flex flex-center q-px-lg">
    <q-form
    class="q-gutter-md full-width"
    >
      <div class="flex column items-center justify-center">
        <h6 class="q-my-none">Iniciar Sesión</h6>
        <div class="caption">asdasdasd</div>
      </div>
      <q-input
        filled
        v-model="email"
        label="Email"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Contraseña"
        lazy-rules
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn :disable="email == ''" label="Iniciar Sesión" color="primary" @click="login" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
  import { defineComponent, onMounted, ref } from 'vue'
  import { useLoginStore } from '../stores/login'

  defineComponent({
    name:"LoginPage"
  })

  const store = useLoginStore();

  const email = ref("");
  const password = ref("");
  const accept = ref(true);

  onMounted(()=>{
    console.log("LoginPage", store.currentUser)
  })

  const login = () =>{
    console.log("Login Boton");
    console.log("email", email.value);
    console.log("password", password.value);

    store.SIGN_IN(email.value, password.value);
  }

</script>

<style lang="scss" scoped>

</style>
