<template>
  <q-page class="q-pa-xl">
      <q-table :rows="store.users" :columns="columns" row-key="name" :filter="filter" class="table-admin"
          table-class="table-admin" :pagination="pagination" separator="none" rows-per-page-label="Resultados por Página"
          no-results-label="No hay Usuarios Registrados" no-data-label="No hay Datos Disponibles"
          :pagination-label="getPaginationLabel" :loading="loading" loading-label="Cargando Listado de Usuarios...">
          <template v-slot:top-right>
              <div class="flex full-width justify-between items-center content-center">
                  <q-btn class="btn-platform" padding="sm lg" unelevated label="Nuevo Usuario" icon="o_person_add_alt"
                      no-caps size="0.9em" @click="addUser()"></q-btn>
                  <q-input v-model="filter" filled dense debounce="300" clear-icon="o_backspace" clearable
                      color="indigo-6" placeholder="Buscar: Nombre, email, rol, etc.">
                    <template v-slot:prepend>
                      <q-icon name="person_search" color="" />
                    </template>
                  </q-input>
                  <q-btn class="refresh-data" padding="sm md" rounded round unelevated icon="r_refresh" no-caps
                      size="0.9em" @click="getUsers()">
                      <q-tooltip anchor="bottom middle" self="top middle" content-class="bg-indigo-5">
                          Actualizar Lista
                      </q-tooltip>
                  </q-btn>
              </div>
          </template>
          <template v-slot:body="props">
              <q-tr :props="props">
                  <q-td key="name" :props="props">
                      {{ props.row.name + " " + props.row.lastname }}
                  </q-td>
                  <q-td key="email" :props="props">
                      {{ props.row.email }}
                  </q-td>
                  <q-td key="profile" :props="props">
                      {{ props.row.profile }}
                  </q-td>
                  <q-td key="state" :props="props">
                      <q-toggle v-model="props.row.state" color="indigo-6" size="md" dense checked-icon="check"
                          unchecked-icon="not_interested" class="toggle-admin"
                          @update:model-value="updateState(props.row.state, props.row)" />
                  </q-td>
                  <q-td key="created_at" :props="props">
                      {{ formatDate(props.row.created_at) }}
                  </q-td>
                  <q-td key="options" :props="props">
                      <q-btn flat icon="edit_note" size="1.2em" class="btn-option" @click="editUser(props.row)">
                          <q-tooltip anchor="bottom middle" self="center middle">
                              Editar
                          </q-tooltip>
                      </q-btn>
                  </q-td>
              </q-tr>
          </template>
          <template v-slot:loading>
              <q-inner-loading showing color="indigo-6" />
          </template>
          <template v-slot:header-cell="props">
              <q-th :props="props">
                  <q-icon :name="props.col.icon" size="1.5em" class="color-admin" />
                  {{ props.col.label }}
              </q-th>
          </template>
      </q-table>

      <ModalUser
          v-if="showModal"
          :show-modal="showModal"
          :modal-mode="modalMode"
          :user-model="userModel"
          :action-submit="actionSubmit"
          :close-modal="closeModalNotify"
          :check-inputs="checkInputs"
          :set-state-user="setStateUser"
          :random-password="randomPassword"
      />
      <!-- <ModalUserDetail
          :show-modal="showDetail"
          :detail-user="detailUser"
          :set-state-user="setStateUser"
          :set-user-type="setUserType"
          :close-user-detail="closeUserDetail"
      /> -->
      <ModalConfirm
          v-if="showModalConfirm"
          :show-modal="showModalConfirm"
          :close-modal="closeModalConfirm"
          :config="configModal"
          :action-submit="updateByAttribute"
      />
  </q-page>
</template>

<script setup>
import ModalUser from "src/components/Users/ModalUser.vue";
import ModalUserDetail from "src/components/Users/ModalUserDetail.vue";
import ModalConfirm from "src/components/Users/ModalConfirm.vue";
import { QSpinnerGears, date, useQuasar } from 'quasar'
import { defineComponent, ref, onMounted } from "vue";
import { useUserStore } from '../stores/users'
const $q = useQuasar()

defineComponent({
  name: "AdminUsers",
  components: { ModalUser, ModalUserDetail, ModalConfirm }
});

/* Variables */
const store = useUserStore();

const loading = ref(true)
const data = ref([])
const filter = ref("")
const modalMode = ref('create')
const configModal = ref({})
const showModal = ref(false)
const showDetail = ref(false)
const showModalConfirm = ref(false)
const columns = ref([
    {
        name: "name",
        icon: "fa-solid fa-grip-lines",
        align: "center",
        label: "Nombre",
        field: "name",
        sortable: true,
    },
    {
        name: "email",
        icon: "r_alternate_email",
        align: "center",
        label: "Email",
        field: "email",
        sortable: true,
    },
    {
        name: "profile",
        icon: "o_switch_account",
        align: "center",
        label: "Perfil",
        field: "root",
        sortable: true,
    },
    {
        name: "state",
        icon: "las la-user-lock",
        align: "center",
        label: "Estado",
        field: "state",
        sortable: true,
    },
    {
        name: "created_at",
        icon: "event_available",
        align: "center",
        label: "Creado",
        field: "created_at",
        sortable: true,
    },
    {
        name: "options",
        icon: "o_settings",
        align: "center",
        label: "Opciones",
        field: "options",
        sortable: false,
    },
])
const userModel = ref({
    name: "",
    lastname:"",
    email:"",
    profile:"",
    state:true,
    root:false,
    modules:[
        {
            name: "analyst",
            label: "Analista",
            state: true,
            permissions:["read", "write"]
        }
    ],
    password:""
})
const checkInputs = ref({
    name:false,
    lastname: false,
    email:false,
    profile: false,
    // modules:false,
    // root:false,
    // state:false,
})
const updateData = ref({})
const pagination = ref({
    sortBy: "desc",
    descending: false,
    page: 1,
    rowsPerPage: 10,
})

// const kiu = computed (()=> {
//   console.log("store.users", store.users)
//   return store.users  && store.users.length > 0 ? structuredClone(store.users) : []
// })

onMounted(async () => {
  console.log("asdasdasdsdasd")
  await getUsers();
});

/* Methods */
const setStateUser = (state) => {
    return state ? { icon: 'verified_user', colorIcon: 'teal-13', colorBkg: 'teal-14', tooltip: 'Habilitado' } : { icon: 'remove_moderator', colorIcon: 'indigo-2', colorBkg: 'indigo-4', tooltip: 'Deshabilitado' }
}
const setIconSelector = () => {
    let icon_drop = document.querySelector(
        ".q-table__bottom i.q-select__dropdown-icon"
    );
    icon_drop.innerHTML = "expand_more";
}
const getPaginationLabel = (firstRowIndex, endRowIndex, totalRowsNumber) => {
    return `${firstRowIndex}-${endRowIndex}`;
}
const getUsers = async () => {
  console.log("getUsers")
    loading.value = true;
    await store.FETCH_USERS();
    loading.value = false;
}
const resetForm = () => {
    userModel.value = {
      name: "",
      lastname:"",
      email:"",
      profile:"",
      state:true,
      root:false,
      modules:[
        {
          name: "analyst",
          label: "Analista",
          state: true,
          permissions:["read", "write"]
        }
      ],
      password:""
    }

    Object.keys(checkInputs.value).forEach(key => {
        checkInputs.value[key] = false
    })
}
const addUser = () => {
    modalMode.value = 'create'

    console.log("addUser", modalMode.value)
    resetForm();
    showModal.value = !showModal.value
}
const updateState = (state, user) => {
  console.log("updateState state", state);
  console.log("updateState user", user);
    configModal.value.attribute = 'Estado para "Iniciar Sesión"'
    configModal.value.user = `usuario ${user.name} ${user.lastname}`
    if(state){
        configModal.value.type = "Habilitar"
    }else{
        configModal.value.type = "Deshabilitar"
    }
    updateData.value = {
        id: user.id,
        title:"Estado",
        update: {
          "state": state
        }
    }
    showModalConfirm.value = true
}
const updateByAttribute = async () => {
    showModalConfirm.value  = false

    const dialog = showNotify(`Actualizando ${updateData.value.title} del Usuario`)
    let result = await store.UPDATE_USER_BY_ATTRIBUTE(updateData.value)
    let response = await setMessageModal(result.code)

    setTimeout(() => {
        dialog.update(response).onOk(async () => {
        if(result.code == 200){
            await getUsers()
        }
        })
    },1500)
}
const actionSubmit = async () => {
    if(modalMode.value == 'create'){
        await createUser()
    }else{
        await updateUser()
    }
}
const createUser = async () =>{


  console.log(userModel);
    // let cloneUserModel = structuredClone(userModel)
    let user = {
        email: userModel.value.email,
        password: userModel.value.password,
    }

    delete userModel.value.password
    user.data = userModel.value

    const dialog = showNotify("Registrando Nuevo Usuario")
    let result =  await store.CREATE_USER(user)
    let response = await setMessageModal(result.code)

    setTimeout(() => {
        dialog.update(response)
        .onOk(async () => {
        if(result.code == 201){
            await getUsers()
        }
        })
        showModal.value = result.code == 201 ? false : true
    },1500)
}
const updateUser = async () =>{
    // this.setModulesUser(this.userModel.userprofile)
    // let user = {
    //     id: this.idEditUser,
    //     userprofile: this.userModel.userprofile,
    //     permission: this.userModel.permission
    // }

    // const dialog = this.showNotify("Actualizando Perfil del Usuario")
    // let result = await this.UPDATE_USER(user)
    // let response = await this.setMessageModal(result.code)

    // setTimeout(() => {
    //     dialog.update(response).onOk(async () => {
    //     if(result.code == 200){
    //         await this.fetchDataUsers()
    //     }
    //     })
    //     this.showModal = result.code == 200 ? false : true
    // },1500)
}
const closeModalConfirm = () =>{
    showModalConfirm.value = false
    return
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
const closeModalNotify = () =>{
    $q.dialog({
        class:'modal-custom',
        color: 'indigo-6',
        title: "¿Estas Seguro?",
        message: "Estas a punto de cerrar el formulario.<br> ¿Desea continuar en él?",
        persistent: true,
        ok: {
          label: "Continuar",
          unelevated: true,
          padding: 'xs lg',
          color:'indigo-6',
          dense: true,
          stretch:true
        },
        cancel: {
          label: "Cerrar",
          flat:true,
          unelevated: true,
          padding: 'xs lg',
          color:'indigo-6',
          dense: true,
          stretch:true
        },
        html: true,
    }).onCancel(()=>{
        showModal.value = false
    })
}
const randomPassword = () =>{
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = 12;
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    userModel.value.password = password
    return password
}
const copyPassword = () =>{
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
}
const formatDate = (date_at) =>{
    return date.formatDate(date_at, "DD - MMM - YYYY")
}
</script>

<style lang="scss" scoped>
.btn-platform {
    background: var(--primary);
    border-radius: 35px;
    color: white;
    font-weight: 400;
}

.color-admin {
    color: #001d3f;
}

.toggle-admin :deep(.q-toggle__thumb) {
    color: #3ccd97;
}

.toggle-admin :deep(.q-toggle__track) {
    color: #323ffa33;
}

.tag-module.disabled {
    color: rgb(143, 139, 139);
}

.tag-module {
    color: #001d3f;
    background: white;
    border: 0.5px solid #00000029;
    font-size: 12px;
    padding: 0px 6px;
    margin-right: 12px;
    border-radius: 6px;
    min-width: 55px;
    line-height: initial !important;
}

.tag-module:hover {
    background: #646bf2;
    color: white;
}

.tag-module:last-child {
    margin-right: 0px;
}

:deep(.tag-module i.q-icon) {
    margin-right: 2px;
    font-size: 18px;
}

:deep(.q-table__bottom--nodata) {
    justify-content: center !important;
    color: #1c2559 !important;
    background: #f0f6fe;
}

:deep(.q-table__top .q-table__control) {
    width: 100%;
}

:deep(.q-field__prepend) {
    color: #ffffff;
    margin-right: 10px;
}

:deep(.q-placeholder) {
    color: #ffffff;
    font-size: 13px;
}

.table-admin :deep(.q-table__top) {
    padding: 20px 30px;
    box-shadow: 0px 3px 6px #00000029;
    // background: #272c56;
    background: #4764ac;
}

.table-admin {
    border-radius: 20px;
    box-shadow: 0px 5px 9px #f5f5f5;
}

.table-admin table thead th:first-child {
    border-left: 0px;
}

.table-admin :deep(.q-table__sort-icon) {
    opacity: 1;
}

.table-admin table thead th {
    color: #001d3f;
    font-size: 13px;
    border-right: 0px;
    font-weight: 400;
}

.table-admin table tbody tr {
    color: #001d3f;
}

.table-admin table tbody tr:nth-child(odd) {
    background-color: #f7f7f7 !important;
    color: #001d3f;
}

:deep(.q-field--filled .q-field__control:before) {
    border-bottom: 0px;
    background: #4757b31f;
    //   background: #636EFA33;
}

:deep(.q-field--filled .q-field__control) {
    background: #f0f6fe;
    border: 1px solid #e3e3e3;
    border-radius: 35px;
    min-width: 270px;
}

.refresh-data {
    border-radius: 50px;
    padding: 0px 0px !important;
    border: none;
    //   box-shadow: 0px 3px 6px #00000029;
}

.refresh-data  {
// .refresh-data :deep(.q-btn__wrapper) {
    padding: 5px 5px 3px 5px !important;
    // background: #4757b3;
    color: white;
    font-weight: 400;
}

:deep(.q-table__bottom) {
    border-top: 1px solid #f8f8f8;
    color: #1c2559;
}

:deep(.q-table__bottom) .q-field__native {
    color: #001d3f;
}

:deep(.q-table__bottom) i.q-select__dropdown-icon {
    color: #001d3f;
}

:deep(.btn-option .q-btn__wrapper) {
    padding: 0px;
    min-height: auto;
}

:deep(.btn-filter .q-btn__wrapper) {
    background: none !important;
    padding: 0px;
    min-height: auto;
}

:deep(.btn-filter .q-focus-helper) {
    opacity: 0 !important;
}

.btn-filter:hover {
    background: none !important;
}

.item-checklist.disabled {
    color: rgb(98, 98, 98);
}

.item-checklist.disabled:hover {
    background: #d3d4d4;
}

.item-checklist {
    padding: 0px 0px 0px 5px !important;
    font-family: "Barlow Medium";
}

:deep(.item-checklist .q-checkbox__inner) {
    color: #646bf2 !important;
}

.check-item-filter {
    font-size: 12px;
    min-height: initial;
}

.check-item-filter:hover {
    background: #636efa33;
}

:deep(.check-item-filter .q-focus-helper) {
    opacity: 0 !important;
}

.active-tag-module {
    background: #646bf2;
    color: white;
}

:deep(.tag-module .q-focus-helper) {
    opacity: 0 !important;
}

:deep(.q-field--filled .q-field__control) {
    transform: none !important;
    outline: none !important;
    border-radius: 35px !important;
    background: #ffffff0d;
}

:deep(.q-field--filled.q-field--highlighted .q-field__control:after) {
    transform: none !important;
    border-bottom: none !important;
    outline: none !important;
    height: 0px;
    border-radius: 35px !important;
}

:deep(.q-field__focusable-action) {
    color: #d0d2ff;
}

</style>
