<template>
  <q-page>
    <q-table :rows="rows" :columns="columns" row-key="name" class="table-admin" table-class="table-admin" :pagination="pagination" separator="none" rows-per-page-label="Resultados por Página"
      no-results-label="No hay Usuarios Registrados" no-data-label="No hay Datos Disponibles"
      :pagination-label="getPaginationLabel" :loading="loading" loading-label="Cargando Listado de Usuarios..."
    >
    <template v-slot:top-right>
      <!-- <div class="flex full-width justify-start items-center content-center  q-col-gutter-sm"> -->


      <div class="flex justify-start q-col-gutter-sm items-stretch row full-width">
        <div class="flex column q-ml-none q-mt-xs col">
          <div class="text-overline q-pl-sm q-pb-sm" style="color:white;">Filtros</div>
          <div class="flex row" style="gap:16px">
            <q-select v-model="model" :options="communes" label="Sede" label-color="grey-1" dropdown-icon="expand_more"  class="custom-select col" dense rounded outlined>
              <template v-slot:prepend>
                <q-icon name="o_foundation" />
              </template>
            </q-select>
            <q-select v-model="model" :options="communes" label="Curso" label-color="grey-1" dropdown-icon="expand_more" class="custom-select col" dense rounded outlined>
              <template v-slot:prepend>
                <q-icon name="o_upgrade" />
              </template>
            </q-select>
          </div>
        </div>
        <div class="flex row q-ml-none q-mt-xs col items-end justify-end" style="gap:16px">

          <q-input v-model="filter" filled dense debounce="300" clear-icon="o_backspace" clearable
              color="indigo-6" placeholder="Buscar: Nombre, apellido, etc.">
            <template v-slot:prepend>
              <q-icon name="person_search" color="" />
            </template>
          </q-input>
          <q-btn class="refresh-data q-mb-xs" padding="sm md" rounded round unelevated icon="r_refresh" no-caps
              size="0.9em" @click="getUsers()">
              <q-tooltip anchor="bottom middle" self="top middle" content-class="bg-indigo-5">
                  Actualizar Lista
              </q-tooltip>
          </q-btn>
        </div>
      </div>
    </template>
  </q-table>
  </q-page>
</template>

<script setup>
import { defineComponent, ref, onMounted} from "vue";

defineComponent({
  name:"ListEnrolments"
})

const columns = ref([
{
        name: "name",
        icon: "fa-solid fa-grip-lines",
        align: "center",
        label: "Nombres",
        field: "name",
        sortable: true,
    },
    {
        name: "lastname",
        icon: "r_alternate_email",
        align: "center",
        label: "Apellido Paterno",
        field: "lastname",
        sortable: true,
    },
    {
        name: "course",
        icon: "o_switch_account",
        align: "center",
        label: "Curso",
        field: "course",
        sortable: true,
    },
    {
        name: "headquarters",
        icon: "o_switch_account",
        align: "center",
        label: "Sede",
        field: "headquarters",
        sortable: true,
    },
    {
        name: "created_at",
        icon: "event_available",
        align: "center",
        label: "Fecha Matricula",
        field: "created_at",
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
        name: "options",
        icon: "o_settings",
        align: "center",
        label: "Opciones",
        field: "options",
        sortable: false,
    }
])
const rows = ref([])
const communes = ref(['Arica', 'Iquique', 'Antofagasta', 'Copiapó', 'La Serena', 'Coquimbo', 'Ovalle'])
const model = ref(null)
const options = ref([
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ])
onMounted(async () => {
//   console.log("onMounted ListEnrolments")
});

//Methods
const getPaginationLabel = (firstRowIndex, endRowIndex, totalRowsNumber) => {
    return `${firstRowIndex}-${endRowIndex}`;
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

.custom-select{
  color: white;
}
.custom-select :deep(.q-field__control) {
  background: rgba(255, 255, 255, 0.0509803922);
}
.custom-select :deep(.q-field__control::before) {
  border-color: white !important;
}
.custom-select :deep(.q-field__label){
  // color:white;
  font-weight: 300;
  top: 12px;

}

.custom-select :deep(.q-field__control-container .q-field__native  span){
  color: white;
}
.custom-select :deep(.q-field__append i){
  color: white;
}
:deep(.q-field--outlined.q-field--highlighted .q-field__control:after){
  border-color: white;
}
</style>
