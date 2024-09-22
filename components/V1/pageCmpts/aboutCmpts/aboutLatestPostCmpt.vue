<script setup lang="ts">
const cmptData ={
    h2: "Latest News & Updates",
    articles: [
      {
        postID: 1,
        title: "Dolor ea invidunt dolor accusam sea aliquip dolor voluptua et kasd diam et ea diam.",
        excerpt:"Feugiat sea ipsum invidunt et clita est. Vel lorem ut commodo sed elitr euismod at duis elitr sadipscing accusam clita. Dolore nonummy stet accusam. Vero voluptua quis at nonumy. Clita et iusto sea magna ex. Vel facilisi sit aliquyam et ullamcorper dolores accusam commodo ea ipsum aliquam. Rebum eu tempor voluptua takimata eos sit commodo magna diam duo. Ea magna aliquyam gubergren sanctus dolores lorem vero duis. Et dolor dolor ullamcorper accusam lorem mazim facer. Amet est molestie dolore rebum erat eum sit ut dolores dolores et dolor sed blandit accumsan invidunt accusam aliquyam.",
        slug:"sample-slug-here",
        postType: "articles",
        tags: [],
        content:[],        
        publishDate: "",
        author: "Sample Author",
        featuredImg:{
          src:"",
          alt:""
        }
      },
      {
        postID: 2,
        title: "Dolor ea invidunt dolor accusam sea aliquip dolor voluptua et kasd diam et ea diam.",
        excerpt:"Feugiat sea ipsum invidunt et clita est. Vel lorem ut commodo sed elitr euismod at duis elitr sadipscing accusam clita. Dolore nonummy stet accusam. Vero voluptua quis at nonumy. Clita et iusto sea magna ex. Vel facilisi sit aliquyam et ullamcorper dolores accusam commodo ea ipsum aliquam. Rebum eu tempor voluptua takimata eos sit commodo magna diam duo. Ea magna aliquyam gubergren sanctus dolores lorem vero duis. Et dolor dolor ullamcorper accusam lorem mazim facer. Amet est molestie dolore rebum erat eum sit ut dolores dolores et dolor sed blandit accumsan invidunt accusam aliquyam.",
        slug:"sample-slug-here",
        postType: "blogs",
        tags: [],
        content:[],        
        publishDate: "",
        author: "Sample Author",
        featuredImg:{
          src:"",
          alt:""
        }
      },
      {
        postID: 3,
        title: "Dolor ea invidunt dolor accusam sea aliquip dolor voluptua et kasd diam et ea diam.",
        excerpt:"Feugiat sea ipsum invidunt et clita est. Vel lorem ut commodo sed elitr euismod at duis elitr sadipscing accusam clita. Dolore nonummy stet accusam. Vero voluptua quis at nonumy. Clita et iusto sea magna ex. Vel facilisi sit aliquyam et ullamcorper dolores accusam commodo ea ipsum aliquam. Rebum eu tempor voluptua takimata eos sit commodo magna diam duo. Ea magna aliquyam gubergren sanctus dolores lorem vero duis. Et dolor dolor ullamcorper accusam lorem mazim facer. Amet est molestie dolore rebum erat eum sit ut dolores dolores et dolor sed blandit accumsan invidunt accusam aliquyam.",
        slug:"sample-slug-here",
        postType: "articles",
        tags: [],
        content:[],        
        publishDate: "",
        author: "Sample Author",
        featuredImg:{
          src:"",
          alt:""
        }
      }
    ]
}
</script>

<template>
  <section>
    <!-- start of defaultContainer -->
    <div class="defaultContainer py-10 flex flex-col gap-10">
      <!-- start of section head -->
      <div>
        <h2 class="defaultTitle font-semibold">
          {{ cmptData.h2 }}
        </h2>
        
        <!-- end of section head -->
      </div>

      <!-- start of article list -->
      <div class="flex flex-col space-y-10">
        <!-- start of article section -->

        <V1GlobalCmptsPostCmptsPostListItemCmptTemp1
          v-for="article in cmptData.articles"
          :key="article.postID"
          :postType="article.postType"
          :slug="article.slug"
          :title="article.title"
          :excerpt="article.excerpt"
          :img="article.featuredImg"
          />
        
      <!-- end of article list -->
      </div>
      <div class="flex justify-end">
        <NuxtLink to="/whats-new" class="link link-primary hover:underline p-5 font-semibold block py-3">See More Articles</NuxtLink>
      </div>
      <!-- end of defaultContainer -->
    </div>
  </section>
</template>

<style scoped></style>
