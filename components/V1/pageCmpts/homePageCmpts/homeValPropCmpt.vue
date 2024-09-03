<script setup lang="ts">
  defineProps({
    props: Object
  })
</script>

<template>
  <section>
    <div class="defaultContainer flex flex-col gap-16 py-10 xl:px-10 ">
      <h2 class="defaultTitle md:text-center">{{ props.h1 }}</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
        <li v-for="(reason, index) in props.list" :key="index" class="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <span v-html="reason.icon" class="aspect-square w-32 bg-red-400"></span>
          <h4 class="text-center lg:text-start">{{ reason.info }}</h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped></style>