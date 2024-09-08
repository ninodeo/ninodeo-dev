<script setup lang="ts">
defineProps({
  props:Object
})
</script>

<template>
  <section class="relative">
    
    <div class="flex flex-row overflow-x-auto relative">
        <div
          v-for="work in props"
          :key="work.workId"
          class="min-h-[90vh] min-w-[100vw] relative even:bg-slate-200 odd:bg-slate-300 dark:even:bg-slate-700 dark:odd:bg-slate-800">
          
          <div class="defaultContainer flex flex-col justify-center items-start h-full space-y-10">
            
            <div class="flex flex-col space-y-5">
              <h4>{{ work.company }}</h4>
              <h1 class="defaultTitle xl:max-w-4xl">{{ work.title }}</h1>
            </div>
            <ul class="flex flex-row flex-warp gap-3">
              <li v-for="(service, index) in work.services" :key="index" class="h6">{{ service }}</li>
            </ul>

            <NuxtLink to="#" class="btn btn-outline-primary">
              Learn More...
            </NuxtLink>
          </div>

        </div>
    </div>
  </section>
</template>

<style scoped></style>
