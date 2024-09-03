<script setup lang="ts">
  defineProps({
    props: Object
  })
</script>

<template>
  <section>
    <!-- start of defaultContainer -->
    <div class="defaultContainer grid grid-cols-1 lg:grid-cols-2 gap-10 xl:px-10 py-10">
      <!-- start of left panel -->
      <div class="bg-primary aspect-video lg:aspect-square flex justify-center items-center p-5 py-10 xl:px-10 order-1 xl:order-2 rounded-md">
        <h1 class="font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center xl:text-start text-light dark:text-dark">
          {{ props.statement }}
        </h1>
        <!-- end of left panel -->
      </div>

      <!-- start of right panel -->
      <div class="flex flex-col space-y-6 justify-center items-start order-1 xl:order-2">

        <h6 class="uppercase font-semibold text-sm">{{ props.title.h5 }}</h6>
        <h2 class="defaultTitle">{{ props.title.h2 }}</h2>
        <h6 v-for="(desc, index) in props.overview" :key="index" v-html="desc"></h6>
        <NuxtLink class="btn btn-outline-primary font-semibold" :to="props.cta.target">{{ props.cta.text }}</NuxtLink>

        <!-- end of leftpanel -->
      </div>
        <!-- end of defaultContainer -->
    </div>
  </section>
</template>

<style scoped></style>
