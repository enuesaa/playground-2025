<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultLayout from './layouts/Default.vue'
import NoneLayout from './layouts/None.vue'

const route = useRoute()

const layout = computed(() => {
  const name = route.meta.layout || 'default'
  return {
    default: DefaultLayout,
    none: NoneLayout,
  }[name]
})
</script>
