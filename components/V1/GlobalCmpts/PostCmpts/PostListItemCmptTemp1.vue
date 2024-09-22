<script setup lang="ts">
defineProps({
  postType: String,
  slug: String,
  title: String,
  excerpt: String,
  img: Object
})
</script>

<template>
  <NuxtLink
      :to="'/whats-new/'+postType+'/'+slug"
      class="grid lg:grid-flow-col grid-cols-5 lg:grid-cols-12 lg:row-span-2 gap-y-3 gap-x-5 xl:gap-x-8 hover:opacity-50 p-5 border-b last:border-none">
      
      <div
        class="cols-span-1 lg:row-span-2 flex flex-col md:justify-center items-center p-5 rounded-md font-semibold order-2 lg:order-1">
        <h1 class="defaultTitle ">31</h1>
        <h6 class="uppercase">Month</h6>
        <h6 class="uppercase">20XX</h6>
      </div>

      <div class="col-span-4 lg:col-span-8 defaultTitle flex items-center order-3 lg:order-2">
        <h4 class="">{{ title }}</h4>
      </div>
      
        
      <p class="col-span-5 lg:order-3 order-4 lg:col-span-8 ">{{ excerpt }}</p>
      
      <img
        class="aspect-video lg:aspect-auto bg-slate-200 col-span-5 lg:col-span-3 md:row-span-2 order-1 lg:order-4"
        :src="img.src"
        :alt="img.alt"/>
    <!-- end of article section -->
    </NuxtLink>
</template>

<style scoped></style>
