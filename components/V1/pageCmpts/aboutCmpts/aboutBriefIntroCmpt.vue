<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section class="py-5 flex flex-col gap-10">
    <div class="defaultContainer xl:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
        <div class="px-10 col-span-2">
          <img
            class="aspect-square bg-slate-200"
            :src="props.image.src"
            :alt="props.image.alt">
        </div>
        <div class="col-span-3 flex flex-col items-start gap-10 px-5">
          <h3 class="[&>b]:defaultTitle" v-html="props.welcomeRemarks">
            
          </h3>
          <NuxtLink
            :to="props.cta.target"
            class="uppercase text-xl link link-primary hover:underline">
            {{ props.cta.text }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5">
        <div class="defaultContainer xl:px-10 flex justify-center">
          <h3 class="defaultTitle">
            {{ props.trustedBy.h3 }}
          </h3>
        </div>
        <ul class="flex flex-row justify-around pt-10">
          <li v-for="(brand, index) in props.trustedBy.list" :key="index" class="h6">BrandName</li>
        </ul>
    </div>
  </section>
</template>

<style scoped></style>
