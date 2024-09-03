<script setup lang="ts"></script>

<template>
  <div class="flex flex-col space-y-5">
    <div class="flex flex-col items-start">
      <h3 class="defaultTitle border-b-2 border-[var(--custom-primary)] pb-2">
          What's New?
      </h3>
      
  </div>

    <div class="flex flex-col">
      <NuxtLink to="/whats-new/articles/text_slug" v-for="index in 3" class="grid lg:grid-flow-col md:grid-cols-5 lg:grid-cols-12 items-center gap-2 xl:gap-5 border-b last:border-none py-5">
        
        <div class="md:col-span-1 flex flex-col md:justify-center md:items-center">
          <h1 class="defaultTitle">23</h1>
          <h6 class="uppercase font-semibold text-sm">month</h6>
          <h6 class="uppercase font-semibold text-sm">20xx</h6>
        </div>

        <div class="md:col-span-4 lg:col-span-8 flex flex-col space-y-2">
          <h6 class="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dignissimos.</h6>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur maiores aliquid voluptates tempora architecto exercitationem dolorem asperiores tenetur tempore ut necessitatibus consectetur temporibus natus, perferendis nisi, rem quibusdam iste rerum.</p>
        </div>

        <img class="aspect-video md:col-span-5 lg:col-span-3 bg-slate-200" src="" alt="">
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
