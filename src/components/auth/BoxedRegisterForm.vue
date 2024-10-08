<script setup lang="ts">
import { ref } from 'vue';
import Logo from '@/layouts/full/logo/Logo.vue';
/*Social icons*/
import google from '@/assets/images/svgs/google-icon.svg';
import facebook from '@/assets/images/svgs/facebook-icon.svg';

const checkbox = ref(false);
const valid = ref(true);
const show1 = ref(false);
const password = ref('');
const email = ref('');
const passwordRules = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);
const fname = ref('');
const fnameRules = ref([
    (v: string) => !!v || 'Name is required',
    (v: string) => (v && v.length <= 10) || 'Name must be less than 10 characters'
]);
</script>
<template>
 
  
    <v-form ref="form" v-model="valid" lazy-validation action="/pages/boxedlogin" class="mt-5">
        <VTextField v-model="email" :rules="emailRules" required
        placeholder="Email"
        class="pb-2"
        ></VTextField>
        <VTextField
            v-model="password"
            :counter="10"
            :rules="passwordRules"
            required
            variant="outlined"
            type="password"
            color="primary"
            placeholder="Password"
        ></VTextField>
        
        <div class="d-flex justify-space-between pb-2">
        <div class="d-flex flex-wrap align-center my-3 ml-n2">
            <v-checkbox
                class="pe-2"
                v-model="checkbox"
                :rules="[(v: any) => !!v || 'You must agree to continue!']"
                required
                hide-details
                color="primary"
            >
                <template v-slot:label class="font-weight-medium">I agree to </template>
            </v-checkbox>
            <RouterLink to="/PrivacyAndPolicy" class="text-primary text-decoration-none font-weight-medium">privacy policy & terms</RouterLink>
        </div>
        
        </div>
        <v-btn size="large" class="mt-2" color="primary" block submit flat>Sign Up</v-btn>
    </v-form>
</template>
