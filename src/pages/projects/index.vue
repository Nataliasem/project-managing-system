<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/database/supabaseClient'
import type { Tables } from '../../../database.types'

const projects = ref<Tables<'projects'>[] | null>([])

;(async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.error(error)
  }
  projects.value = data

  console.log(projects)
})()
</script>

<template>
  <div>
    <h1>Projects Page</h1>
    <RouterLink to="/">Go to home</RouterLink>
    <ul>
      <li v-for="item in projects" :key="item.id">
        {{ item.name }}
        {{ item.slug }}
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
