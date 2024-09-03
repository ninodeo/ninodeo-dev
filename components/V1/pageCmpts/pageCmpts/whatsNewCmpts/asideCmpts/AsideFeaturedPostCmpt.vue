<script setup lang="ts"></script>

<template>
  <div class="flex flex-col space-y-3">
    <div class="flex flex-col items-start">
        <h5 class="defaultTitle border-b-2 border-[var(--custom-primary)] pb-3">
            Featured Posts
        </h5>
        
    </div>
    <div class="flex flex-col space-y-1">
      <NuxtLink class="border-b last:border-none py-5" v-for="trend in 5" to="/whats-new/blogs/featured_post_slug">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non?</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
