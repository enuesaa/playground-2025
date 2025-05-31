<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
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
  <span v-if="isPending"></span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <ul v-else>
    <DataTable :value="data" tableStyle="min-width: 50rem">
      <Column field="title" header="Title"></Column>
      <Column field="date" header="Date"></Column>
      <Column field="author" header="Author"></Column>
    </DataTable>
  </ul>
</template>
