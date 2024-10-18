<template>
  <div>
    <q-stepper v-model="step" ref="stepper" alternative-labels color="primary" animated header-nav>
      <q-step :name="1" title="Identificación del Alumno" icon="las la-user-circle" :done="step > 1" class="flex column">
        <StudentStep></StudentStep>
      </q-step>

      <q-step :name="2" title="Antecedentes Familiares" caption="Optional"  icon="o_supervised_user_circle" :done="step > 2">
        <FamilyStep></FamilyStep>
      </q-step>

      <q-step :name="3" title="Antecedentes Apoderado/Tutor" icon="las la-user-tie" :done="step > 3">
        <GuardianStep></GuardianStep>
      </q-step>

      <q-step :name="4" title="Documentación" icon="add_comment">
        <AttachDocumentsStep></AttachDocumentsStep>
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation class="flex justify-end full-width">
          <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finalizar' : 'Continuar'" rounded  />
          <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Volver" class="q-ml-sm" rounded />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>


<script setup>
  import { defineComponent, ref } from "vue";
  import StudentStep from "./Steps/StudentStep.vue";
  import FamilyStep from './Steps/FamilyStep.vue'
  import GuardianStep from './Steps/GuardianStep.vue'
  import AttachDocumentsStep from './Steps/AttachDocumentsStep.vue'


  defineComponent({
    name:"NewEnrolment",
    components: ['StudentStep', 'FamilyStep', 'GuardianStep', 'AttachDocumentsStep']
  })
  const step = ref(1)

</script>


<style lang="scss" scoped>
  .text-overline{
    line-height: 1rem;
  }
</style>
