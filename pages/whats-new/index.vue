<script setup lang="ts">
const pageData = {
  heroSection: {
    h6: "What's New",
    h1: "Discover the Latest Insights and Idea"
  },
}
</script>

<template>
  <main>
    <!-- start hero section -->
    <V1HeroCmptsHeroDefaultTempCmpt :category="pageData.heroSection.h6" :title="pageData.heroSection.h1"/>
    <!-- end hero section -->

    <!-- start of main body -->
    <section>
      <!-- start of two column grid -->
      <div class="defaultContainer grid xl:grid-flow-col xl:grid-cols-12 justify-start gap-5 lg:gap-10 xl:px-10">
        <div class="xl:col-span-9 flex flex-col space-y-10">
          <!-- latest post  -->
          <V1PageCmptsWhatsNewPageCmptsWhatsNewLatestPostCmpt/>
          
          <!-- post spotlights -->
          <V1PageCmptsWhatsNewPageCmptsWhatsNewSpotlightPostCmpt/>
          
          <!-- start of two column post list (posts, blogs) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- articles -->
            <V1PageCmptsWhatsNewPageCmptsWhatsNewPostListCmpt post-type="articles"/>
            <!-- blogs -->
            <V1PageCmptsWhatsNewPageCmptsWhatsNewPostListCmpt post-type="blogs"/>
            <!-- end of two column post list (posts, blogs) -->
          </div>
        </div>

        <!-- start of what new aside component -->
        <V1PageCmptsWhatsNewPageCmptsAsideCmptsAsideDefaultCmpt class="hidden xl:col-span-3 xl:flex flex-col space-y-10"/>
        <!-- end of two column grid -->
      </div>
      <!-- end of main body -->
    </section>
    <V1PageCmptsAdsCmptsFooterAdsCmpt/>
  </main>
</template>

<style scoped></style>
