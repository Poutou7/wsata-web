<script setup lang="ts">
import BoxedLoginForm from '@/components/auth/BoxedNewPasswordForm.vue';
import Logo from '@/layouts/full/logo/Logo.vue';
import { ref } from 'vue';

import { AuthCuroselData } from '@/_mockApis/components/pages/auth';

/* Login form */
</script>
<template>
    <div class="authentication auth-bg">
        <v-container class="pa-3 auth-login">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="6" class="d-flex align-center ">
                    <v-card rounded="md" elevation="10" class="mx-auto">
                        <div class="pa-3 auth-card-bg">
                            <v-row>
                                <v-col cols="12" md="12" class="px-md-12 px-6 py-md-12 py-6">
                                    <div class="logo-container">
                                        <Logo />
                                    </div>
                                    <h2 class="text-34 my-6">Reset Password 🔒<h6 class="text-16 text-medium-emphasis d-flex align-center mt-6">
                                        Your new password must be different from previously used passwords</h6></h2>
                                    
                                   
                                    <BoxedLoginForm />
                                    <v-btn size="large" color="surface" to="/auth/login" block class="mt-5 text-primary" flat
                                        >Back to Login</v-btn
                                    >
                                </v-col>
                               
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
