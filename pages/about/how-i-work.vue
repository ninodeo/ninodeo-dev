<script setup lang="ts">
const pageData = {
  heroSection:{
    h6: "How I Work",
    h1:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, expedita.",
    h5: "Through my experience working with diverse clients and industries, I've honed a workflow that prioritizes clear communication, collaboration, and achieving defined goals.",
    cta:{
      text: "Get In Touch",
      link: "/contacts"
    },
    coverImage:{
      src: "1",
      alt: ""
    }

  }
}
</script>

<template>
  <main>
    <V1HeroCmptsHeroDefaultTempCmpt
      :category="pageData.heroSection.h6"
      :title="pageData.heroSection.h1" 
      :excerpt="pageData.heroSection.h5"
      :cta="pageData.heroSection.cta"
      :cover-image="pageData.heroSection.coverImage"/>
  </main>
</template>

<style scoped></style>
