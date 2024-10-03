<template>
  <q-page class="flex flex-center q-px-lg">
    <q-form class="q-gutter-y-md full-width shadow-10">

      <div class="flex column items-center justify-center q-px-md q-px-none">
        <img src="logo_aula.svg" alt="" class="full-width q-mb-xl">
        <h6 class="q-my-none">Iniciar Sesión</h6>
        <div class="caption text-center">Bienvenido al Aula Virtual</div>
      </div>

      <div class="q-gutter-y-lg q-mt-lg">

        <q-input rounded outlined  v-model="email" label="Email" >
          <template v-slot:prepend>
            <q-icon name="las la-at" />
          </template>
        </q-input>

        <q-input rounded outlined  v-model="password" label="Contraseña" :type="show_password ? 'text' : 'password'">
          <template v-slot:prepend>
            <q-icon name="key" />
          </template>
          <template v-slot:append>
            <q-icon  :name="iconInput" @click="show_password = !show_password" class="cursor-pointer" />
          </template>
        </q-input>
        <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
        <div class="flex items-center justify-center">
          <q-btn :loading="isLoading" :disable="email == ''" label="Iniciar Sesión" color="primary"  padding="10px 32px"  rounded  @click="signIn" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
  import { computed, defineComponent, onMounted, ref, onBeforeUnmount  } from 'vue'
  import { useQuasar, QSpinnerGrid } from 'quasar'
  import { useUserStore } from '../stores/users'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const store = useUserStore();
  const $q = useQuasar()

  const email = ref("a@a.cl");
  const password = ref("asdasd");
  const show_password = ref(false)
  const isLoading = ref(false)
  const timer = ref(null)
  // const accept = ref(true);

  defineComponent({
    name:"LoginPage"
  })
  onMounted(()=>{
    console.log("LoginPage", store.currentUser)
  })
  onBeforeUnmount( () => {
    if (timer.value !== void 0) {
    clearTimeout(timer.value)
      $q.loading.hide()
    }
  })
  const iconInput = computed(()=>{
    return show_password.value ?  'las la-eye' : 'las la-low-vision'
  })

  const signIn = async () =>{
    console.log("Login Boton");
    console.log("email", email.value);
    console.log("password", password.value);

    isLoading.value = true;
    let resp = await store.SIGN_IN(email.value, password.value);
    if(resp){
      isLoading.value = false;
        timer.value = setTimeout(() => {
            $q.loading.show({
                message: `
                  <div class="loading-app">
                      <b>Iniciando Sesión...</b>
                      <span>Bienvenid@ <b>${store.currentUser.name} ${store.currentUser.lastname}</b></span>
                  </div>`,
                spinner: QSpinnerGrid,
                html: true
            })

            timer.value = setTimeout(() => {
                $q.loading.hide()
                timer.value = void 0
                router.push({name: "app" });
            }, 2000)
        }, 100)
    }
    isLoading.value = false;
  }
  const forgot = async() =>{
      await store.FORGOT_PASSWORD({email: this.email})
  }

</script>

<style lang="scss" scoped>
  .q-form{
    max-width: 450px;
    background: #ffffff;
    padding: 48px 32px;
    border-radius: 40px;
  }
  .container-login{
    height: 100vh;
    width: 100%;
  }
  .bkg-login{
    background-image: url(~assets/bkg-login.jpg);
    background-size: cover;
  }
  .form-login{
    // background: red;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
