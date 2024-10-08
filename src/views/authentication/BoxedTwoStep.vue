<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
/*form component*/
import TwoStepForm from '@/components/auth/TwoStepForm.vue';
import { AuthCuroselData } from '@/_mockApis/components/pages/auth';
</script>
<template>
    <
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
                                    <h2 class="text-34 my-6">Verify your email ✉️<h6 class="text-16 text-medium-emphasis d-flex align-center mt-6">
                                        Account activation link sent to your email address: john.doe@email.com Please follow the link inside to continue.</h6></h2>
                                    <!--<h6 class="text-subtitle-1 mt-3 font-weight-bold">******1234</h6>-->
                                    <!---Form---->
                                    <TwoStepForm />
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
