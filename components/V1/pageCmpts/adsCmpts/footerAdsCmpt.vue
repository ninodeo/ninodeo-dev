<script setup lang="ts">
  const cmptData= {
    h4:[
      "Let's collaborate on your idea and turn it into something great.",
      "Feel free to get in touch with me to discuss your ideas."
    ],
    link:{
      text: "Let's talk!",
      target: "/contacts"
    },
    email: "hello@ninodeo.com"
  }
</script>
  
<template>
  <section>
    <!-- start of defaultContainer -->
    <div class="defaultContainer flex flex-col space-y-5 py-5 items-start">
      
      <div class="h4 flex flex-col space-y-3">
         <h4 v-for="(h4,index) in cmptData.h4" ::key="index">{{ h4 }}</h4>
      </div>

     <NuxtLink class="h1 font-bold py-3 px-2 rounded-lg link link-primary hover:underline" :to="cmptData.link.target">{{ cmptData.link.text }}</NuxtLink>

      <a class="font-semibold h4 hover:underline link" :href="'emailto:'+cmptData.email">
        {{ cmptData.email }}
      </a>

      <!-- end of defaultContainer -->
    </div>
  </section>
</template>

<style scoped></style>
