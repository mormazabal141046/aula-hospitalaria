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
               <q-td key="names" :props="props">
                  {{ props.row.names }}
               </q-td>
               <q-td key="lastname" :props="props">
                  {{ props.row.lastname }}
               </q-td>
               <q-td key="surname" :props="props">
                  {{ props.row.surname }}
               </q-td>
               <q-td key="email" :props="props">
                  {{ props.row.email }}
               </q-td>
               <q-td key="headquarters" :props="props" class="text-capitalize">
                  {{ props.row.headquarters[0] }}
               </q-td>
               <q-td key="role" :props="props">
                  {{ props.row.role }}
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

      <ModalManageUser
         v-if="manageUserModal"
         :show-modal="manageUserModal"
         :modal-mode="modalMode"
      ></ModalManageUser>
      <!-- <ModalUserDetail
            :show-modal="showDetail"
            :detail-user="detailUser"
            :set-state-user="setStateUser"
            :set-user-type="setUserType"
            :close-user-detail="closeUserDetail"
      /> -->
      <ModalUpdateStateUser
         v-if="showModalUpdateState"
         :show-modal="showModalUpdateState"
         :config="configModal"
         :action-submit="updateByAttribute"
      />
   </q-page>
</template>

<script setup>

import ModalUserDetail from "src/components/Users/ModalUserDetail.vue";
import ModalUpdateStateUser from "src/components/Users/ModalUpdateStateUser.vue";
import ModalManageUser from "src/components/Users/ModalManageUser.vue";

import { date } from 'quasar'
import { defineComponent, ref, onMounted, provide, inject } from "vue";
import { useUserStore } from '../stores/users'

defineComponent({
   name: "AdminUsers",
   components: { ModalUserDetail, ModalUpdateStateUser, ModalManageUser }
});

/* Inject*/
const showNotify = inject("showNotify")
const setMessageModal = inject("setMessageModal")

/* Variables */
const store = useUserStore();
const manageUserModal = ref(false)
const showModalUpdateState = ref(false)
const loading = ref(true)
const filter = ref("")
const modalMode = ref('create')
const configModal = ref({})
const dataEditUser = ref({})
const updateData = ref({})
const columns = ref([
   {
      name: "names",
      icon: "person_outline",
      align: "center",
      label: "Nombres",
      field: "names",
      sortable: true,
   },
   {
      name: "lastname",
      icon: "person_outline",
      align: "center",
      label: "Apellido Paterno",
      field: "lastname",
      sortable: true,
   },
   {
      name: "surname",
      icon: "person_outline",
      align: "center",
      label: "Apellido Materno",
      field: "surname",
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
      name: "headquarters",
      icon: "o_account_balance",
      align: "center",
      label: "Sede",
      field: "headquarters",
      sortable: true,
   },
   {
      name: "role",
      icon: "o_person_pin",
      align: "center",
      label: "Rol",
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
const pagination = ref({
   sortBy: "desc",
   descending: false,
   page: 1,
   rowsPerPage: 10,
})

onMounted(async () => {
   await getUsers();
});

const getUsers = async () => {
   loading.value = true;
   await store.FETCH_USERS();
   loading.value = false;
}
const addUser = () =>{
   modalMode.value = "create";
   manageUserModal.value = !manageUserModal.value
}
const editUser = (data) =>{
   modalMode.value = "edit";
   manageUserModal.value = !manageUserModal.value
   dataEditUser.value = data
}
const getPaginationLabel = (firstRowIndex, endRowIndex, totalRowsNumber) => {
   return `${firstRowIndex}-${endRowIndex}`;
}
const updateState = (state, user) => {
   configModal.value.attribute = 'Estado para "Iniciar Sesión"'
   configModal.value.user = `usuario ${user.names} ${user.lastname} ${user.surname}`
   configModal.value.type = state ? "Habilitar" :  "Deshabilitar"

   updateData.value = {
      id: user.id,
      title:"Estado",
      update: { "state": state }
   }
   showModalUpdateState.value = true
}
const updateByAttribute = async () => {
   showModalUpdateState.value  = false

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
const formatDate = (date_at) =>{
   return date.formatDate(date_at, "DD - MMM - YYYY")
}


/* Provide */
provide("manageUserModal", manageUserModal)
provide("showModalUpdateState", showModalUpdateState)
provide("getUsers", getUsers)
provide("dataEditUser", dataEditUser)

</script>

<style lang="scss" scoped>
.btn-platform {
   background: #384561;
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
   background: #242e45;
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
