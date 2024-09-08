<script setup lang="ts">
  const pageData= {
    heroSection:{
      h6: "Diverse Portfolio, Endless Possibilities",
      h1:"Experience my versatility in action.",
      h5:"Explore my work across various industries and how I adapt my skills to fit different needs.",
    }
  }
</script>

<template>
  <main>
    <V1HeroCmptsHeroDefaultTempCmpt
      :category="pageData.heroSection.h6"
      :title="pageData.heroSection.h1"
      :excerpt="pageData.heroSection.h5"/>
  </main>
</template>

<style scoped></style>
