<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
/* Reset form */
import ResetPassword from '@/components/auth/ResetForm.vue';
import { AuthCuroselData } from '@/_mockApis/components/pages/auth';
</script>

<template>
    <div class="authentication auth-bg">
        <v-container class="pa-3 auth-login">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="6" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="mx-auto">
                        <div class="pa-3">
                            <v-row>
                                <v-col cols="12" md="12" class="border-e px-md-12 px-6 py-md-12 py-6">
                                    <div class="logo-container">
                                        <Logo />
                                    </div>
                                    <h2 class="text-34 my-3">Forgot Password 🔒<h6 class="text-16 text-medium-emphasis d-flex align-center mt-6">
                                        Enter your email and we'll send you instructions to reset your password</h6></h2>
                                    <ResetPassword />
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
