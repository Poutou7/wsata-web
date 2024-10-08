<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
<template>
    <v-card elevation="10" class="bg-primary-gt position-relative profit-card overflow-hidden">
        <v-card-item>
            <v-row>
                <v-col>
                    <div class="d-flex rounded-sm gap-2 align-center badge-custom-dark text-white">
                        <Icon icon="solar:check-circle-outline" height="18" />
                        This month <strong>+15% Profit</strong>
                    </div>
                    <div class="pt-6 mt-12">
                        <h3 class="text-h3 text-white mb-2">Hey,11 David McMichael</h3>
                        <p class="opacity-80 mb-1 text-white text-subtitle-1">Aenean vel libero id metus sollicitudin
                        </p>
                    </div>
                </v-col>
                <v-col md="5" class="pb-0 text-md-end  text-center">
                    <img src="@/assets/images/backgrounds/welcome-bg.png" alt="Our Theme-img" class="welcome-img " />
                </v-col>
            </v-row>
        </v-card-item>
    </v-card>
</template>
