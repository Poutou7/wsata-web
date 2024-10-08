<template>
  <div>
    <BaseBreadcrumb title="Projects" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  </div>
 <!-- <footer>
    <Footer/>
  </footer>-->
</template>

<script setup>
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import { ref } from "vue";
import Footer from '@/components/footer.vue'; 

const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "Projects",
    disabled: true,
    href: "#",
  },
]);
</script>

<style scoped></style>
