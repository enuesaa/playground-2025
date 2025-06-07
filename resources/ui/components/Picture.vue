<script setup>
import { useGetPicture } from '../api/use'

const { isPending, isError, data, error } = useGetPicture()
console.log(data)
</script>

<template>
  <span v-if="isPending"></span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <div v-else>
    title: {{ data.data.title }}
    <img :src="data.data.url" />
  </div>
</template>
