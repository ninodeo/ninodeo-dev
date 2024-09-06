<script setup lang="ts">
defineProps({
  postType: String
})
</script>

<template>
  <div class="flex flex-col space-y-3">
    <div>
      
      <div class="flex justify-between" >
        <div class="flex flex-col items-start">
            <h4 class="defaultTitle border-b-2 border-[var(--custom-primary)] pb-2 capitalize">
              {{ postType }}
            </h4>
        </div>
        <nuxt-link to="/whats-new/blogs" class="link link-primary">View More</nuxt-link>
      </div>
      
    </div>
    <div class="flex flex-col">
      <NuxtLink to="/whats-new/articles/test_slug" v-for="index in 3" class="flex flex-col space-y-2 border-b last:border-none py-5">
        <h6 class="font-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, ea.</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut tenetur quidem dolorem iusto, nesciunt voluptatum ad necessitatibus, accusamus pariatur recusandae voluptas est quam placeat repellendus deleniti reiciendis unde, quaerat quo!</p>
        <p>-- 20 JULY 2024</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
