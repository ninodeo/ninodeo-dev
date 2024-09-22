<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section class="py-5">
    <div class="defaultContainer xl:px-10 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start justify-start ">
        <div class="col-span-2 flex flex-col items-start gap-5">
          <div class="flex flex-col gap-3 ">
            <h6 class="uppercase text-normal">{{ props.h6 }}</h6>
            <h2 class="defaultTitle">{{ props.h2 }}</h2>
          </div>
          <p v-html="props.overview"></p>
          <NuxtLink
            class="btn btn-outline-primary"
            :to="props.cta.target">
              {{ props.cta.text }}
          </NuxtLink>
        </div>
        <div class="col-span-3">
          <div class="flex flex-col px-5 gap-10">
            <div v-for="(expertise, index) in props.expertise" :key="index">
              <h3 class="font-semibold defaultTitle">{{ expertise.h3 }}</h3>
              <p class="py-5" v-html="expertise.p"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
