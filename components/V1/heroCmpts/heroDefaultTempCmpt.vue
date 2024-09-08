<script setup lang="ts">
const props = defineProps({
  category: String,
  title: String,
  excerpt:String,
  cta: Object,
  coverImage:Object
})
</script>

<template>
  <section>
    <div class="defaultContainer xl:px-10">
      <div class="flex flex-col space-y-5 items-start pt-20 pb-5">
          <div class="flex flex-col gap-2">
            <h5 class="uppercase font-semibold text-sm">
            {{ category }}
            </h5>
            <h1 class="font-bold defaultTitle xl:max-w-4xl capitalize">
              {{ title }}
            </h1>
          </div>
          <h6 v-if="excerpt" class="xl:max-w-3xl">
            {{ excerpt }}
          </h6>
          <NuxtLink v-if="cta" :to="cta.link" class="" :class="cta.isButton ? 'btn btn-outline-primary' : 'link link-dark dark:link-light h3 font-bold hover:underline underline-offset-8'">
                {{ cta.text }}
          </NuxtLink>
          <img 
            v-if="coverImage"
            class="aspect-video w-full bg-slate-200"
            :src="coverImage.src" 
            :alt="coverImage.alt"/>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
