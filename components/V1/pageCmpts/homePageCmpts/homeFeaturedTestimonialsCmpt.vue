<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section>
    <!-- start of defaultContainer -->
    <div class="defaultContainer flex flex-col gap-10 py-10">
      <!-- start of section head -->
      <div class="xl:max-w-4xl mx-auto text-center flex flex-col gap-5">
        <h2 class="defaultTitle font-semibold">{{ props.h1 }}</h2>  
        <h6 class="">{{ props.h3 }}</h6>
        <!-- end of section head -->
      </div>

      <!-- start of section body -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- start of card proper -->
        <blockquote class="card aspect-video lg:aspect-square p-5 py-8 lg:p-10 flex flex-col gap-5 justify-around" v-for="review in props.testimonials" :key="review.reviewID">
          <!-- start of review proper -->
          <div class="flex flex-col gap-5">
            
            <!-- start star icon container -->
            <div class="flex gap-0.5 text-secondary">
              <svg
              v-for="(star,index) in review.rating" :key="index"
              class="h-10 aspect-square"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <!-- end star icon container -->
            </div>
            
            <h3 class="font-bold text-primary">{{ review.title }}</h3>
            
            <p class="mt-4 leading-relaxed">
                {{ review.review }}
            </p>
            
            <!-- end of review proper -->

          </div>

          <!-- start of reviewer data div -->
          <div class="mt-4 text-sm font-medium sm:mt-6 capitalize flex gap-3 items-center">
            <img :src="review.client.img.src" :alt="review.client.img.alt" class="rounded-full w-12 aspect-square object-center bg-slate-200">
            <div>
              <p class="font-semibold h6 text-primary">{{ review.client.name }}</p>
              <p>{{ review.client.designation }} / {{ review.client.company }}</p>
              <!-- end of reviewer data div -->
            </div>

          </div>
          <!-- end of card proper -->
        </blockquote>
        <!-- end of section body -->
      </div>
      

      
      <!-- end of defaultContainer -->
    </div>
  </section>
</template>

<style scoped></style>
