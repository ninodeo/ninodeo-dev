<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section>
    <!-- start of defaultContainer -->
    <div class="defaultContainer py-10 flex flex-col gap-10">
      <!-- start of section head -->
      <div>
        <h2 class="defaultTitle font-semibold">
          {{ props.h2 }}
        </h2>
        
        <!-- end of section head -->
      </div>

      <!-- start of article list -->
      <div class="flex flex-col space-y-10">
        <!-- start of article section -->
        <NuxtLink
          v-for="article in props.articles"
          :key="article.postID"
          :to="'/whats-new/'+article.postType+'/'+article.slug"
          class="grid lg:grid-flow-col grid-cols-5 lg:grid-cols-12 lg:row-span-2 gap-y-3 gap-x-5 xl:gap-x-8 hover:opacity-50 p-5 border-b last:border-none">
          
          <div
            class="cols-span-1 lg:row-span-2 flex flex-col md:justify-center items-center p-5 rounded-md font-semibold order-2 lg:order-1">
            <h1 class="defaultTitle ">31</h1>
            <h6 class="uppercase">Month</h6>
            <h6 class="uppercase">20XX</h6>
          </div>

          <div class="col-span-4 lg:col-span-8 defaultTitle flex items-center order-3 lg:order-2">
            <h4 class="">{{ article.title }}</h4>
          </div>
          
            
          <p class="col-span-5 lg:order-3 order-4 lg:col-span-8 ">{{ article.excerpt }}</p>
          
          <img
            class="aspect-video lg:aspect-auto bg-slate-200 col-span-5 lg:col-span-3 md:row-span-2 order-1 lg:order-4"
            :src="article.featuredImg.src"
            :alt="article.featuredImg.alt"/>
        <!-- end of article section -->
        </NuxtLink>
        
        
      <!-- end of article list -->
      </div>
      <div class="flex justify-end">
        <NuxtLink to="/whats-new" class="link link-primary hover:underline p-5 font-semibold block py-3">See More Articles</NuxtLink>
      </div>
      <!-- end of defaultContainer -->
    </div>
  </section>
</template>

<style scoped></style>
