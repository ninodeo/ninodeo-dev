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
          <V1PageCmptsPageCmptsWhatsNewCmptsWhatsNewLatestPostCmpt/>
          
          <!-- post spotlights -->
          <V1PageCmptsPageCmptsWhatsNewCmptsWhatsNewSpotlightPostCmpt/>
          
          <!-- start of two column post list (posts, blogs) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- articles -->
            <V1PageCmptsPageCmptsWhatsNewCmptsWhatsNewPostListCmpt post-type="articles"/>
            <!-- blogs -->
            <V1PageCmptsPageCmptsWhatsNewCmptsWhatsNewPostListCmpt post-type="blogs"/>
            <!-- end of two column post list (posts, blogs) -->
          </div>
        </div>

        <!-- start of what new aside component -->
        <aside class="hidden xl:col-span-3 xl:flex flex-col space-y-10">
          <!-- post search -->
          <V1PageCmptsPageCmptsWhatsNewCmptsAsideCmptsAsidePostSearchCmpt/>
          
          <!-- featured posts -->
          <V1PageCmptsPageCmptsWhatsNewCmptsAsideCmptsAsideFeaturedPostCmpt/>
          
          <V1PageCmptsAdsCmptsAsideAdsDefaultCTA/>
          <V1PageCmptsAdsCmptsAsideAdsDefaultAds/>
          <!-- end of what new aside component -->
        </aside>
        <!-- end of two column grid -->
      </div>
      <!-- end of main body -->
    </section>
    <V1PageCmptsAdsCmptsFooterAdsCmpt/>
  </main>
</template>

<style scoped></style>
