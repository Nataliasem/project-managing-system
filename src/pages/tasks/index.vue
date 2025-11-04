<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/database/supabaseClient'
import type { Tables } from '../../../database.types'

const tasks = ref<Tables<'tasks'>[] | null>([])

;(async () => {
  const { data, error } = await supabase.from('tasks').select()
  if (error) {
    console.error(error)
  }
  tasks.value = data

  console.log(tasks)
})()
</script>

<template>
  <div>
    <h1>Tasks Page</h1>
    <RouterLink to="/">Go to home</RouterLink>
    <ul>
      <li v-for="item in tasks" :key="item.id">
        {{ item.name }}
        {{ item.slug }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
