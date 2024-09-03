<script setup lang="ts">
defineProps({
  props:Object
})
</script>

<template>
  <section>
    <div v-for="work in props.featuredWorks" :key="work.workId" class="min-h-svh relative even:bg-slate-500 odd:bg-slate-700 py-10">
      <div class="defaultContainer relative">
        <!-- start of section head -->
        <div class="xl:max-w-4xl flex flex-col gap-3">
          <h6 class="uppercase font-semibold text-sm">{{ props.h6 }}</h6>
          <h2 class="defaultTitle font-semibold">{{ props.h1 }}</h2>  
          <h6>{{ props.h3 }}</h6>
        </div>
        <!-- end of section head -->

        {{ work }}
      </div>
    </div>
  </section>
</template>

<style scoped></style>
