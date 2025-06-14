<script setup>
import { useRoute } from 'vue-router'

import DefaultLayout from './layouts/Default.vue'
import NoneLayout from './layouts/None.vue'

const route = useRoute()
const name = route.meta.layout || 'default'

const layouts = {
  default: DefaultLayout,
  none: NoneLayout,
}
const layout = layouts[name]
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
