<template>
  <div class="logo">
    <RouterLink to="/">
      <Logoimg :width="width" :height="height" />
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Logoimg from '@/assets/images/logos/Logo.vue';

defineProps({
  width: {
    type: String,
    default: "76"
  },
  height: {
    type: String,
    default: "66"
  },
})
</script>
