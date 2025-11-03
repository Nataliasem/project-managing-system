<script setup lang="ts">
import { supabase } from '@/database/supabaseClient'
console.log(supabase)
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
