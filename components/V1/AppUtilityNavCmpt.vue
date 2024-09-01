<script setup lang="ts">
  const colorMode = useColorMode()
  const colorModeOpt = ['light', 'dark']
  const utilityItems = [
    {
      name: "FAQ's",
      link: "/",
      icon:""
    },
    {
      name: "Contact Me",
      link: "/",
      icon:""
    },
  ]
</script>

<template>
  <nav class="bg-primary md:bg-primary fixed bottom-0 w-full md:static">
    <div class="defaultContainer flex justify-center items-center md:justify-between py-2 text-base">
      <NuxtLink class="font-semibold hidden md:block" to="/">ninodeo.com</NuxtLink>
      <div class="flex flex-row gap-5">
        <NuxtLink v-for="(utility, index) in utilityItems" :key="index" :to="utility.link" class="link link-dark">{{ utility.name }}</NuxtLink>
        <select v-model="colorMode.preference" class="capitalize bg-primary">
          <option v-for="(mode, index) in colorModeOpt" :key="index" :value="mode" >{{ mode }}</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
