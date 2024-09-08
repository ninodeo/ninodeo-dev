<script setup lang="ts">
defineProps({
  solutions: Object
})
</script>

<template>
  <section>
    <div class="defaultContainer xl:px-10  flex flex-col space-y-5">
      <h2 class="defaultTitle">Solution</h2>
      <div class="flex flex-col space-y-3">
          <h6 v-for="(solDesc, index) in solutions" :key="index">
            {{ solDesc }}
          </h6>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
