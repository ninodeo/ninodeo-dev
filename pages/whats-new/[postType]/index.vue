<script setup lang="ts">
  var route = useRoute()
  var postType = route.params['postType']
  const pageData = {
    heroSection:{
      h1: postType,
      h6: "Discover What's New"
    }
  }
</script>

<template>
  <main>
    <!-- start hero section -->
    <V1HeroCmptsHeroDefaultTempCmpt :category="pageData.heroSection.h6" :title="pageData.heroSection.h1"/>
    <!-- end hero section -->
    
    <!-- start of featured posts -->
    <V1PageCmptsWhatsNewPageCmptsWhatsNewFeaturedPostsCmpt :postType="postType"/>
    <!-- end of featured posts -->


    <div class="defaultContainer grid xl:grid-flow-col xl:grid-cols-12 justify-start gap-5 lg:gap-10 xl:px-10">
      <!-- start of posts posts -->
      <V1PageCmptsWhatsNewPageCmptsWhatsNewPostsCmpt class="xl:col-span-9 flex flex-col space-y-10" :postType="postType"/>
      <!-- end of featured posts -->  

      <!-- start of what new aside component -->
      <V1PageCmptsWhatsNewPageCmptsAsideCmptsAsideDefaultCmpt class="hidden xl:col-span-3 xl:flex flex-col space-y-10"/>
      <!-- end of two column grid -->
    </div>
  
  </main>
</template>

<style scoped></style>
