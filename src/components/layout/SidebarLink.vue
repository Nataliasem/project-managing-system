<script setup lang="ts">
interface LinkProps {
  title: string
  to: string
  icon: string
}

defineProps<{
  links: LinkProps[]
}>()
</script>

<template>
  <RouterLink
    v-for="item in links"
    :key="item.title"
    :to="item.to"
    exact-active-class="text-primary bg-muted"
    class="flex items-center gap-3 px-4 py-2 mx-2 transition-colors rounded-lg hover:text-primary justify-center lg:justify-normal text-muted-foreground"
  >
    <iconify-icon :icon="item.icon"></iconify-icon>
    <span class="hidden lg:block text-nowrap">{{ item.title }}</span>
  </RouterLink>
</template>
