<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';

/*Social icons*/
import google from '@/assets/images/svgs/google-icon.svg';
import facebook from '@/assets/images/svgs/facebook-icon.svg';

const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
const password = ref('admin123');
const username = ref('info@ourtheme.com');
const passwordRules = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

function validate(values: any, { setErrors }: any) {
    const authStore = useAuthStore();
    return authStore.login(username.value, password.value).catch((error) => setErrors({ apiError: error }));
}
</script>

<template>
    <Form @submit="validate" v-slot="{ errors, isSubmitting }" class="mt-5">
        <VTextField v-model="username" :rules="emailRules" class="mb-8" required hide-details="auto"
        placeholder="Email"></VTextField>
       

        <VTextField v-model="password" :rules="passwordRules" required hide-details="auto" type="password" class="pwdInput"
        placeholder="Password"></VTextField>
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
                <template v-slot:label class="font-weight-medium">Remember Me</template>
            </v-checkbox>
            <RouterLink to="/auth/forgot-password2" class="text-primary text-decoration-none font-weight-medium" style="padding-left: 180px;">Forgot Password ?</RouterLink>
        </div>
        
        </div>
        <v-btn size="large" :loading="isSubmitting" color="primary" :disabled="valid" block type="submit" flat>Login</v-btn>
        <div v-if="errors.apiError" class="mt-2">
            <v-alert color="error">{{ errors.apiError }}</v-alert>
        </div>
    </Form>
</template>
