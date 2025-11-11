<script setup lang="ts">
import { supabase } from '@/database/supabaseClient'
import type { Tables } from '../../../database/types'
import type { ColumnDef } from '@tanstack/vue-table'

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.log(error)

  tasks.value = data
})()

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status')
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due Date')
  },
  {
    accessorKey: 'project_id',
    header: () => h('div', { class: 'text-left' }, 'Project')
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators')
  }
]
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks">
    <template #cell-name="{ cell }">
      <RouterLink :to="`/tasks/${cell.row.original.id}`">
        {{ cell.getValue() }}
      </RouterLink>
    </template>
  </DataTable>
</template>
