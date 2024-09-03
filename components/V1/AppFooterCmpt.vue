<script setup lang="ts">
const socialMedia = [
    {
      name: "FB",
      icon: "",
      link: ""
    },
    {
      name: "GH",
      icon: "",
      link: ""
    },
    {
      name: "G",
      icon: "",
      link: ""
    },
    {
      name: "INS",
      icon: "",
      link: ""
    },
    {
      name: "LI",
      icon: "",
      link: ""
    },
    {
      name: "YT",
      icon: "",
      link: ""
    },
]
</script>

<template>
  <footer class="py-5 grid grid-cols-1 gap-10">
    <div class="defaultContainer flex flex-col space-y-5">
      <hr/>
      <div class="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <NuxtLink to="/" class="font-semibold text-primary">© 2024 ninodeo.com - IT Professional</NuxtLink>
          <p>All rights reserved.</p>
        </div>
        <ul
          class="flex flex-row gap-5">
          <li v-for="(social, index) in socialMedia" :key="index"> {{ social.name }} </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<style scoped></style>
