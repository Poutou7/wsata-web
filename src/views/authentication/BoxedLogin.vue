<script setup lang="ts">
import BoxedLoginForm from '@/components/auth/BoxedLoginForm.vue';
import Logo from '@/layouts/full/logo/Logo.vue';
import { ref } from 'vue';
import LanguageDD from '@/layouts/full/vertical-header/LanguageDD.vue';

import { AuthCuroselData } from '@/_mockApis/components/pages/auth';

/* Login form */
</script>
<template>
    <div class="authentication auth-bg">
    <div class="mt-2 ml-2 mx-2"><LanguageDD /></div>
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
                                    <h2 class="text-34 my-6">Welcome to Wsata ! 👋🏻<h6 class="text-16 text-medium-emphasis d-flex align-center mt-6">
                                        Please sign-in to your account and start the adventure</h6></h2>
                                    
                                   
                                    <BoxedLoginForm />
                                    <h6 class="text-16 text-medium-emphasis d-flex align-center mt-6">
                                        New on our platform?
                                        <v-btn
                                            class="pl-0 text-primary text-16 opacity-1 pl-2"
                                            height="auto"
                                            to="/auth/register2"
                                            variant="plain"
                                            >Create an account</v-btn
                                        >
                                    </h6>
                                </v-col>
                               
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
