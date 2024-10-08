<template>
  <div class="menu">
    <v-select :items="items" :label="label"></v-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
defineProps(['items', 'label']);
// const items = ref([{ title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me' }, { title: 'Click Me 2' }]);
const location = ref('');
</script>

<style>
.menu .v-input__details {
  display: none;
}
</style>
