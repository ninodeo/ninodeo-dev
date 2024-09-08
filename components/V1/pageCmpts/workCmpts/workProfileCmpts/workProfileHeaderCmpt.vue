<script setup lang="ts">
defineProps({
  name: String,
  client: String,
  links: Object,
  team: Object,
  services: Object,
  date: String,
})
</script>

<template>
  <section>
    <div class="defaultContainer xl:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div class="flex flex-col space-y-5">
            <h1
            class="font-bold defaultTitle xl:max-w-6xl">
            {{ name }}
            </h1>
            <ul class="flex flex-row gap-5">
                <li v-for="index in 4">Social #{{ index }}</li>
            </ul>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div >
                <h6 class="defaultTitle">Client</h6>
                <p>{{ client }}</p>
            </div>
            <div>
                <h6 class="defaultTitle">Team</h6>
                <p v-for="mem in team">{{ mem.name }} - {{ mem.role }}</p>
            </div>
            <div>
                <h6 class="defaultTitle">Services</h6>
                <div class="grid grid-cols-2 gap-1 w-full">
                    <hp v-for="service in services">{{ service }}</hp>
                </div>
            </div>
            <div >
                <h6 class="defaultTitle">Date</h6>
                <p>{{ date }}</p>
            </div>
        </div>
    </div>
    </div>
  </section>
</template>

<style scoped></style>
