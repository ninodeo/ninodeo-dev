<script setup lang="ts">
defineProps({
  thumbnail: Object,
  overview: Object
})
</script>

<template>
  <section>
    <div class="defaultContainer xl:px-10 flex flex-col space-y-10">
      <img class="aspect-square md:aspect-video rounded-md object-cover w-full bg-slate-200" :src="thumbnail.source" :alt="thumbnail.alt">
      <div class="border-b-2 py-5 flex flex-col space-y-3">
          <h6 v-for="desc in overview">{{ desc }}</h6>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
