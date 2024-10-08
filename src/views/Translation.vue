<template>
  <div>
    <BaseBreadcrumb title="Translation" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  </div>
</template>

<script setup>
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import { ref } from 'vue';

const breadcrumbs = ref([
  {
    text: 'Dashboard',
    disabled: false,
    href: '#'
  },
  {
    text: 'Translation',
    disabled: true,
    href: '#'
  }
]);
</script>

<style scoped></style>
