<script setup lang="ts"></script>

<template>
  <div class="flex flex-col space-y-3">
    <!-- <h3 class="defaultTitle">Spotlights</h3> -->
    <div class="flex flex-col items-start">
        <h3 class="defaultTitle border-b-2 border-[var(--custom-primary)] pb-2">
            Spotlights
        </h3>
        
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:min-h-[60vh] gap-1">

      <NuxtLink 
        v-for="post in 4"
        to="/whats-new/blog/text_slug" 
        class="col-span-2 [&:nth-child(3)]:md:col-span-1 [&:nth-child(4)]:md:col-span-1 [&:first-child]:md:row-span-2 md:row-span-1 w-full bg-slate-200 flex flex-col justify-end [&:first-child]:p-5 p-3 [&:first-child>h4]:h4 [&>h4]:h5">
        <h4 class="defaultTitle">
          Lorem ipsum dolor sit amet.
        </h4>
        <h6>Post Category | Dec 25, 2023</h6>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
