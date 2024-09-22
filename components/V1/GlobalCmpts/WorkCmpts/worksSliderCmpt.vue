<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section class="relative">
      <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :pagination="{
        type: 'progressbar'
      }"
      :loop="true"
      :effect="'creative'"
      :navigation="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }">
        <SwiperSlide v-for="work in props"
          :key="work.workId"
          class="even:bg-slate-200 odd:bg-slate-300 dark:even:bg-slate-700 dark:odd:bg-slate-800">
          
          <div class="defaultContainer xl:px-10 flex flex-col justify-center items-start min-h-[90vh] space-y-10">
            <div class="flex flex-col space-y-5">
              <h4>{{ work.company }}</h4>
              <h1 class="defaultTitle xl:max-w-4xl">{{ work.title }}</h1>
            </div>
            <ul class="flex flex-row flex-warp gap-3">
              <li v-for="(service, index) in work.services" :key="index" class="h6">{{ service }}</li>
            </ul>

            <NuxtLink :to="'/works/'+work.workId" class="btn btn-outline-primary">
              Learn More...
            </NuxtLink>
          </div>
        </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped></style>
