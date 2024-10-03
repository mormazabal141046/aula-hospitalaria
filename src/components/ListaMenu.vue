<template>
  <q-item clickable tag="a" :to="item.link">
    <q-item-section v-if="item.icon" avatar>
      <q-icon :name="item.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label caption>{{ item.caption }}</q-item-label>
      <q-item-label>{{ item.title }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-icon name="las la-angle-right"  />
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineComponent, defineProps } from 'vue'

defineComponent({
  name: 'ListaMenu',
})

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss">
  .q-item {
    padding-left: 1rem;
  }
  .q-item__section--avatar{
    min-width:initial;
  }
  .q-item__label + .q-item__label{
    margin-top: 2px;
  }
</style>
