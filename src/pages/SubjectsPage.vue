<template>
  <div class="q-pa-md">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"     narrow-indicator
    >
    <template v-for="(item, i) in tabs" :key="i">
      <q-tab  :name="item.name" :label="item.label" />
    </template>
      <!-- <q-tab name="alarms" label="Alarms" />
      <q-tab name="movies" label="Movies" /> -->
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="new_subject">
        <div class="text-h6 q-pb-md">{{titleTab}}</div>
        <NewSubject></NewSubject>
      </q-tab-panel>

      <q-tab-panel name="list_subjects">
        <div class="text-h6 q-pb-md">{{titleTab}}</div>
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
        <ListSubjects></ListSubjects>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script setup>
import { defineComponent, ref, computed } from "vue";
import NewSubject from "src/components/Subjects/NewSubject.vue";
import ListSubjects from "src/components/Subjects/ListSubjects.vue";

defineComponent({
  name:"SubjectsPage",
  components: ['NewSubject', 'ListSubjects']
})
const tabs = ref([
  {
    name: "new_subject",
    label:"Nueva Asignatura",
    active: true,
  },
  {
    name: "list_subjects",
    label:"Lista Asignaturas",
    panel:""
  }
])
const tab = ref('new_subject')
const titleTab = computed(()=>{
  return tabs.value.find( item => item.name === tab.value ).label
})
</script>


<style lang="scss">

</style>
