<template>
  <div class="min-h-screen bg-slate-200 flex">
    <div class="m-auto max-w-screen-sm w-full">
      <div
        v-if="flash.message"
        class="rounded border p-5 bg-sky-300 border-sky-400 text-sky-600 mb-5"
      >
        {{ flash.message }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

const flash = computed(() => usePage().props.flash)
</script>
