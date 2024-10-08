<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/layouts/full/logo/Logo.vue';
const valid = ref(true);
const show1 = ref(false);
const email = ref('');
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);
</script>
<template>
    <v-form ref="form" v-model="valid" lazy-validation action="/dashboards/analytical" class="mt-6">
        <VTextField v-model="email" :rules="emailRules" required placeholder="Enter your email" ></VTextField>
        <v-btn size="large" color="primary" to="/auth/two-step2" block  submit flat>Back Login Page</v-btn>
    </v-form>
</template>
