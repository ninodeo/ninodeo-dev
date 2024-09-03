<script setup lang="ts">
  const colorMode = useColorMode()
  const colorModeOpt = ['light', 'dark']
  const utilityItems = [
    {
      name: "FAQ's",
      link: "/about/faqs",
      icon:""
    },
    {
      name: "Contact Me",
      link: "/contacts",
      icon:""
    },
  ]
</script>

<template>
  <nav class="fixed bottom-0 w-full md:static bg-default">
    <!-- start of defaultContainer -->
    <div class="defaultContainer flex justify-center items-center md:justify-between py-2 text-base">
      <!-- brand -->
      <NuxtLink class="font-semibold hidden md:block" to="/">ninodeo.com</NuxtLink>
      <!-- start of utility list -->
      <div class="flex flex-row gap-5">
        <!-- loop of utilities -->
        <NuxtLink v-for="(utility, index) in utilityItems" :key="index" :to="utility.link" class="link link-dark dark:link-light">{{ utility.name }}</NuxtLink>
        <!-- color mode selector -->
        <select v-model="colorMode.preference" class="capitalize">
          <option v-for="(mode, index) in colorModeOpt" :key="index" :value="mode" >{{ mode }}</option>
        </select>
        <!-- end of utility list -->
      </div>
      <!-- end of defaultContainer -->
    </div>
  </nav>
</template>

<style scoped></style>
