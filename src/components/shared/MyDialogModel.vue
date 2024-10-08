<template>
  <v-dialog class="w-100 w-md-75 w-xl-66" :class="{ cairo: $i18n.locale == 'ro' }" @afterLeave="emit('close')">
    <v-card class="mx-auto">
      <v-card-title v-if="title" class="d-flex align-center justify-space-between">
        <span class="d-block pa-2">{{ title }}</span>
        <!-- <button @click="emit('close')">
          <Icon icon="solar:close-circle-bold-duotone" width="28" height="28" />
        </button> -->
      </v-card-title>
      <v-card-text class="body">
        <slot></slot>
      </v-card-text>
      <v-card-actions v-if="isActions" class="mt-4">
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

defineProps({
  title: {
    type: String
  },
  isActions: {
    type: Boolean,
    default: true
  }
});
const emit = defineEmits(['close']);
</script>

<style scoped>
.body {
  border-top: 1px solid #E0E6EB;
}
.v-card-actions {
  min-height: auto;
  padding: 0;
  margin: auto;
}
@media (max-width: 575px) {
  .body {
    padding: 15px !important;
  }
}
</style>
