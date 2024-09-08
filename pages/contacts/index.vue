<script setup lang="ts">
const pageData = {
  heroSection:{
    h6: "Contact Us",
    h1:"Interested? Let's talk!",
    h5: "Just fill this form in and will contact you promptly to discuss your project. Hate forms? Drop me a line at",
    cta:{
      isButton: false,
      text: "hello@ninodeo.com",
      link: "mailto:hello@ninodeo.com"
    },
  }
}
</script>

<template>
  <main>
    <V1HeroCmptsHeroDefaultTempCmpt
      :category="pageData.heroSection.h6"
      :title="pageData.heroSection.h1"
      :excerpt="pageData.heroSection.h5"
      :cta="pageData.heroSection.cta"/>

      <V1PageCmptsContactCmptsContactFormCmpt/>

     <V1PageCmptsAdsCmptsFooterAdsCmpt/> 
  </main>
</template>

<style scoped></style>
