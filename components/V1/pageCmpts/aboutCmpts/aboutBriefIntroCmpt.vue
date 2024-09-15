<script setup lang="ts"></script>

<template>
  <section class="py-5 flex flex-col gap-10">
    <div class="defaultContainer xl:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 items-center">
        <div class="px-10 col-span-2">
          <img
            class="aspect-square bg-slate-200"
            src=""
            alt="">
        </div>
        <div class="col-span-3 flex flex-col items-start gap-10 px-5">
          <h3 class="[&>b]:defaultTitle">
            Hello, I'm <b>Jessica</b> a self-taught & award-winning <b>Web Designer & Developer</b> with over fifteen years of work experience. I started in y children's room and got pro at renowned Rant Tech Agencies.
          </h3>
          <NuxtLink to="#" class="uppercase text-xl link link-primary hover:underline">
            Explore my Works
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-5">
        <div class="defaultContainer xl:px-10 flex justify-center">
          <h3 class="defaultTitle">Trusted by World Leading Brands</h3>
        </div>
        <ul class="flex flex-row justify-around pt-10">
          <li v-for="brand in 4" class="h6">BrandName</li>
        </ul>
    </div>
  </section>
</template>

<style scoped></style>
