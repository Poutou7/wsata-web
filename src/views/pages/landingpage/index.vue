<script setup lang="ts">
import { ref, onMounted } from 'vue';
import BoxedLoginForm from '@/views/authentication/BoxedLogin.vue';
import 'aos/dist/aos.css';
import AOS from 'aos';

onMounted(() => {
    AOS.init();
});

</script>

<template>
   <BoxedLoginForm />

   
       
    
</template>
