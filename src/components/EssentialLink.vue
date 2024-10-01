<template>
  <q-item
    clickable
    tag="a"
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label caption>{{ caption }}</q-item-label>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

    <q-item-section side>
          <q-icon name="las la-angle-right"  />
        </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss">
  .q-item {
    padding-left: 2rem;
  }
  .q-item__section--avatar{
    min-width:initial;
  }
  .q-item__section{


  }
  .q-item__label + .q-item__label{
    margin-top: 2px;

  }

</style>
