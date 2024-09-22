<script setup lang="ts"></script>

<template>
  <section class="py-10">
    <div class="defaultContainer xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <h2
        class="defaultTitle">
        Seminars and Certificate
      </h2>
      <div
        class="flex flex-col space-y-10">
        <div
          v-for="index in 5"
          class="flex flex-col space-y-2">
          <h3 class="font-semibold defaultTitle">Subject/Title/Topic of Certification and/or Seminar</h3>
          <p>Name of the Event/Location | Date of Certification</p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped></style>
