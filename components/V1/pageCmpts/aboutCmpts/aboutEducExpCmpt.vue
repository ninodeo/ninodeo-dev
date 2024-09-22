<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section class="py-10">
    <div class="defaultContainer xl:px-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
      <h2
        class="defaultTitle">
        Education & Experience
      </h2>
      <div
        class="flex flex-col space-y-8">
        <div
          v-for="index in 5"
          class="flex flex-col space-y-2">
          <h6>
            20XX-20XX
          </h6>
          <h3 class="font-semibold defaultTitle">
            Degree Name / Designation / Position
          </h3>
          <p>
            School Name/ Company Name, Address
          </p>
        </div>
        
      </div>
    </div>
  </section>
</template>

<style scoped></style>
