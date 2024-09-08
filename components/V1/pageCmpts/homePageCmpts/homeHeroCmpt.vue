<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section>
    <!--start of defaulContainer-->
    <div class="defaultContainer min-h-[90vh] grid grid-cols-1 gap-5 lg:grid-cols-2 py-10">
      <!--start of first panel-->
      <div class="flex flex-col gap-10 md:justify-around xl:justify-around">

        <!--start of greeting-->
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-1">
            <h1 class="font-semibold">{{ props.greeting }}</h1>
            <h1 class="defaultTitle">{{ props.name }}</h1>
          </div>
          

          <!--start of specialization -->
          <ul
            class="flex flex-row gap-3 font-bold h5 uppercase">
            <li
              v-for="(coverage, index) in props.coverage"
              :key="index">
              {{ coverage }}
            </li>
            <!--end of specialization -->
          </ul>  
          <!--end of greeting-->
        </div>

        

        <!-- start brief intro -->
        <div class="flex flex-col gap-1">
          <h5
            class="font-bold defaultTitle">
              Brief Intro
          </h5>
          <!--render brief intro-->
          <div
            class="flex flex-col space-y-1 lg:max-w-xl">
            <h5
              v-for="(brief, idx) in props.intro"
              :key="idx">
              {{ brief }}
            </h5>
          </div>
          <!-- end brief intro -->
        </div>

        <!--start of contact Section-->
        <div class="flex flex-col gap-1">
          <h5
            class="defaultTitle">
              Contact Information
          </h5>
          <!--base of operation-->
          <h5
            class="">
              {{ props.contactInfo.base }}
          </h5>

          <!--cta of contact-->
          <a
            :href="props.contactInfo.cta.link"
            class="h5 link link-dark dark:link-light">
            {{ props.contactInfo.cta.text }}
          </a>

          <!--socials-->
          <div
            class="flex flex-row flex-wrap gap-5 mt-10">
            <a
              class="link link-dark dark:link-light h6"
              v-for="social in props.contactInfo.socialMedia"
              :key="social.id"
              :href="social.link"
              >

              {{ social.social }}
            </a>
          </div>

          <!--end of contact Section-->
        </div>

        <!--end of first panel-->
      </div>

      <!--start of second panel-->
      <div class="flex flex-col gap-5 justify-around">
        <ul class="flex flex-row gap-3 xl:gap-10 xl:justify-end">
          <li
            v-for="(other, index) in props.otherInfo"
            class="flex flex-row items-center gap-2">
            <h1
              class="font-bold defaultTitle">
              {{ other.value }}
            </h1> 
            <h5
              class="">
              {{ other.key }}
            </h5>
            
          </li>
        </ul>
        <img 
            :src="props.img.src" 
            :alt="props.img.alt"
            class="bg-slate-200 aspect-square hidden xl:block">
        <!--end of second panel-->
      </div>
      <!--end of defaulContainer-->
    </div>
  </section>
</template>

<style scoped></style>
