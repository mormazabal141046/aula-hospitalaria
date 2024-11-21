<template>
  <div class="q-pa-md">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
    <template v-for="(item, i) in tabs" :key="i">
      <q-tab  :name="item.name" :label="item.label" />
    </template>
      <!-- <q-tab name="alarms" label="Alarms" />
      <q-tab name="movies" label="Movies" /> -->
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="new_enrolment">
        <div class="text-h6 q-pb-md">{{titleTab}}</div>
        <NewEnrolment></NewEnrolment>
      </q-tab-panel>

      <q-tab-panel name="list_enrolments">
        <div class="text-h6 q-pb-md">{{titleTab}}</div>
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
        <ListEnrolments></ListEnrolments>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import { defineComponent, ref, computed } from "vue";
import NewEnrolment from "src/components/Enrolments/NewEnrolment.vue";
import ListEnrolments from "src/components/Enrolments/ListEnrolments.vue";

defineComponent({
  name:"AcademicPage",
  components: [NewEnrolment]
})
const tabs = ref([
  {
    name: "new_enrolment",
    label:"Nueva Matricula",
    active: true,
  },
  {
    name: "list_enrolments",
    label:"Consultar Matriculas",
    panel:""
  }
])
const tab = ref('list_enrolments')
const titleTab = computed(()=>{
  return tabs.value.find( item => item.name === tab.value ).label
})
</script>


<style lang="scss">

</style>
