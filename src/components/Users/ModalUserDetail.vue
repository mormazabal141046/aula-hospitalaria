<template>
  <q-dialog v-model="props.showModal" persistent transition-show="scale" transition-hide="scale">
    <q-card class="my-card" style="width:550px">
      <!-- <q-img src="~assets/bkg_user.svg">
        <div class="absolute-bottom text-h5">
          <div class="text-caption text-indigo-1 sublabel-custom">
            Nombre Completo
          </div>
          {{detailUser.name + " " + detailUser.lastname}}
        </div>
        <span class="full-width flex justify-end items-center content-center">
          <q-btn icon="close" class="q-mr-md q-mt-md" color="white" size="0.9em" round outline dense @click="closeUserDetail"  />
        </span>
      </q-img> -->

      <q-card-section>
        <div class="flex column justify-center items-center content-center"  style="position:absolute; top: -85px; right: 30px;">
          <q-btn
            v-if="detailUser && detailUser.role"
            round
            color="deep-purple-9"
            :icon="setUserType(detailUser.role).icon"
            class=""
            size="35px"
          />
          <div v-if="detailUser && detailUser.role" class="text-grey text-caption no-wrap items-center q-mt-xs">
            {{ setUserType(detailUser.role).label }}
          </div>
        </div>

        <div class="row no-wrap justify-end items-center">
          <div class="col text-subtitle1 ellipsis">
            <div class="text-caption text-grey sublabel-custom">
              Email
            </div>
            {{detailUser.email}}
          </div>
        </div>

        <div class="flex justify-between items-stretch content-center">
          <div class="col-6 text-subtitle1 ellipsis text-capitalize">
            <div class="text-caption sublabel-custom text-grey text-capitalize">
              Miembro desde
            </div>
            {{ formatDate(detailUser.date_created) }}
          </div>

          <div class="col-6 text-subtitle1 ellipsis text-capitalize">
            <div class="flex justify-start items-center content-center q-mt-sm q-mr-md">
              <q-icon :name="setStateUser(detailUser.state).icon" :class="'text-'+setStateUser(detailUser.state).colorIcon" size="sm" />
              <span>
                {{ setStateUser(detailUser.state).tooltip }}
              </span>
            </div>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section class="q-pt-none">
        <div class="col text-subtitle1">
          <div class="text-caption text-grey">
            Módulos de Acceso
          </div>
          <q-chip v-for="(mod, i) in detailUser.modules" :key="i" square outline color="indigo-4" text-color="white" :icon="mod.icon">
            {{mod.label}}
          </q-chip>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
// import { customFormatDate } from "src/utils/functions";

import { defineComponent } from "vue"

defineComponent({
  name:"ModalUserDetail"
})

const props = defineProps({
  showModal: {
    type: Boolean,
    default: false
  },
  detailUser: {
    type: Object,
    default: () => {}
  },
  setStateUser: {
    type: Function,
    default: () => {}
  },
  setUserType: {
    type: Function,
    default: () => {}
  },
  closeUserDetail: {
    type: Function,
    default: () => {}
  }
})

const formatDate = (date) => {
// return customFormatDate(date, "DD MMMM YYYY")
}
</script>

<style>

</style>
