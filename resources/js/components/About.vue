<script setup>
import { useQuery } from '@tanstack/vue-query'

const queryFn = async () => {
  const res = await fetch('https://httpbin.org/json')
  return await res.json()
}

const { isPending, isError, data, error } = useQuery({
  queryKey: ['todos'],
  queryFn,
})
</script>

<template>
  <h2 class="block bg-orange-800">This is the About Page</h2>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <ul v-else>
    <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
  </ul>
</template>
