<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Column {
  key: string
  label: string
  sortable: boolean
}

const props = defineProps<{
  title: string
  rows: Record<string, unknown>[]
  loading?: boolean
}>()

const columns: Column[] = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'active', label: 'Active', sortable: false },
]

const query = ref('')
const showInactive = ref(false)

const visibleRows = computed(() =>
  props.rows.filter((row) => showInactive.value || row.active === true),
)

function isEmpty(): boolean {
  return visibleRows.value.length === 0
}

watch(query, (next, prev) => {
  console.log(`query changed from "${prev}" to "${next}"`)
})
</script>

<template>
  <section class="table" :aria-busy="loading">
    <header class="table__head">
      <h2>{{ title }}</h2>
      <input
        v-model="query"
        type="search"
        placeholder="Filter rows…"
        aria-label="Filter rows"
      />
      <label>
        <input type="checkbox" v-model="showInactive" />
        Show inactive
      </label>
    </header>

    <p v-if="isEmpty()" class="empty">No rows match your filter right now.</p>

    <table v-else>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key" :data-sortable="col.sortable">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in visibleRows" :key="row.id as string">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.active === true ? 'yes' : 'no' }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.table {
  border: 1px solid var(--border);
  border-radius: 6px;
}
.table__head {
  display: flex;
  gap: 0.5rem;
}
.empty {
  color: #8a8a8a;
  font-style: italic;
}
</style>
