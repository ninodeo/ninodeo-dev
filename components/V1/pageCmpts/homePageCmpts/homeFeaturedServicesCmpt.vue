<script setup lang="ts">
  defineProps({
    props: Object
  })
</script>

<template>
  <section class="flex flex-col space-y-10">
    <!-- start of defaultContainer and loop -->
    <div v-for="category in props" :key="category.id" class="defaultContainer grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16 py-10">
      
      <!-- start of left panel -->
      <div>
        <h5>{{ category.id }}</h5>  
        <h1 class="defaultTitle font-semibold">{{ category.category }}</h1>  
        <!-- end of left panel -->
      </div>
      
      <!-- start of right panel -->
      <div class="lg:col-span-2 flex flex-col space-y-10 pt-10 items-start">
        
        <!-- start of panel header -->
        <div class="flex flex-col gap-4 items-start">
          <h5>{{ category.briefIntro }}</h5>
          <NuxtLink :to="category.cta.target" class="btn btn-outline-primary">{{ category.cta.text }}</NuxtLink>
          <!-- end of panel header -->
        </div>

        <!-- start of service lists -->
         <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

            <NuxtLink v-for="(service, index) in category.list" to="/" class="relative group rounded-md border-2 focus:outline-none card">
              <img :src="service.cover.src" :alt="service.cover.alt" class="z-0 bg-slate-200 opacity-0 group-hover:opacity-100 object-cover absolute w-full top-0 h-full transition-all ease-in-out duration-300 delay-300">
              <div class="aspect-video group-hover:aspect-square flex flex-col gap-5 justify-center group-hover:justify-end p-5">
                <h4 class="defaultTitle z-10">{{ service.name }}</h4>
                <p class="z-10">{{ service.desc }}</p>
              </div>
            </NuxtLink>

           <!-- end of service lists -->
         </div>

        <!-- start of right panel -->
      </div>

      <!-- end of defaultContainer and loop -->
    </div>
  </section>
</template>

<style scoped></style>
