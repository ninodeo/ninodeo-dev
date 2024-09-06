<script setup lang="ts">
defineProps({
  postType:String
})
</script>

<template>
  <section>
    start of default container
    <div class="defaultContainer xl:px-10 flex flex-col space-y-5">
      <div class="flex flex-col items-start">
          <h4 class="defaultTitle border-b-2 border-[var(--custom-primary)] pb-3 capitalize">
              Featured {{ postType }}
          </h4>   
      </div>
      <NuxtLink v-for="(fPost,index) in 6" key:index to="#">
        {{ index+1 }}
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
  
</style>
