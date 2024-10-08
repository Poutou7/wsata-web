<template>
  <MyDialogModel :title="title" @close="closeCategory"> </MyDialogModel>
</template>

<script setup>
import MyDialogModel from '@/components/shared/MyDialogModel.vue';

defineProps(['title']);

function closeCategory() {
  console.log('Close');
}
</script>

<style scoped></style>
