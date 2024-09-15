<script setup lang="ts">
const pageData ={
  heroSection: {
    h6: "About Me",
    h1: "Niño Deo Dimaangay",
    h5: "Hellow, I'm Niño  a self-taught & award-winning Web Designer & Developer with over fifteen years of work experience. I started in my children's room and got pro at renowned Ran Tech Agencies",
    cta:{
      text: "Let's Talk",
      target: "/contact"
    },
    coverImage: {
      src: "",
      atl:""
    }
  }
}
</script>

<template>
  <main>

    <V1PageCmptsAboutCmptsAboutHeroCmpt :props="pageData.heroSection"/>
    <V1PageCmptsAboutCmptsAboutBriefIntroCmpt/>
    <V1PageCmptsAboutCmptsAboutExpertiseCmpt/>
    <V1PageCmptsAboutCmptsAboutWorkSkillsCmpt/>
    <V1PageCmptsAboutCmptsAboutEducExpCmpt/>
    <V1PageCmptsAboutCmptsAboutCertificationCmpt/>
    <!--Download Resume BTN-->
    <V1PageCmptsAboutCmptsAboutLatestProjectCmpt/>
    <V1PageCmptsAboutCmptsAboutLatestPostCmpt/>
    <V1PageCmptsAdsCmptsFooterAdsCmpt/>
  </main>
</template>

<style scoped></style>
