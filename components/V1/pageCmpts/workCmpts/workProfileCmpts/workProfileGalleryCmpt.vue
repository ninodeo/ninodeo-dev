<script setup lang="ts">
defineProps({
  gallery: Object
})
</script>

<template>
  <section>
    <div class="defaultContainer xl:px-10  flex flex-col space-y-5">
      <h2 class="defaultTitle">Gallery</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="img in gallery" :key="img.id" class="[&>img]:even:bg-slate-300 border-2">
          <img
            :src="img.source"
            :alt="img.alt"
            class="aspect-square bg-slate-200">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
