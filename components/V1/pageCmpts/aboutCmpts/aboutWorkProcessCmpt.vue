<script setup lang="ts">
defineProps({
  props:Object
})
</script>

<template>
   <!-- DETAILS OF EACH APPROACH -->
   <section class="py-10">
          <div class="defaultContainer flex flex-col space-y-5 xl:space-y-20 xl:px-10">
              <div
              class="grid grid-cols-1 xl:grid-cols-2 gap-16">
                  <div
                  class="flex flex-col space-y-3">
                      <h2
                      class="defaultTitle">
                          {{ props.name }}
                      </h2>
                      <p
                      class="pe-5"
                      v-for="desc in props.overview">
                          {{ desc }}
                      </p>
                  </div>
                  <div
                  class="flex flex-col space-y-5">
                      <h4
                      class="uppercase defaultTitle">
                          Questions to answer:
                      </h4>
                      <ul
                      class="flex flex-col space-y-3 list-disc list-inside">
                          <li
                          v-for="question in props.qta"
                          class="h5">
                              {{ question }}
                          </li>
                      </ul>
                  </div>
              </div>

              <div
              class="grid grid-cols-1 xl:grid-cols-2 gap-16">
                  <h4
                  class="font-semibold uppercase defaultTitle">
                      Here are the steps needed to get the answers:
                  </h4>
                  <ul
                  class="flex flex-col space-y-10">
                      <li
                      v-for="(step, index) in props.steps">
                          <span
                          class="h1 defaultTitle">{{ index+1 }}</span>
                          <h4
                          class="font-semibold">
                              {{ step }}
                          </h4>
                      </li> 
                  </ul>
                  
              </div>

              <div
              class="flex flex-col space-y-3">
                  <h4
                  class="font-semibold uppercase defaultTitle">
                      As a result, the client gets:
                  </h4>
                  <ul
                  class="xl:px-10">
                      <li 
                      v-for="result in props.outputs"
                      class="grid grid-cols-1 md:grid-cols-2 space-y-5 gap-x-10 [&:nth-child(even)>h5]:order-2 [&:nth-child(even)>img]:order-1">
                          <h5
                          class="font-semibold flex justify-start items-center">
                              {{ result.output }}
                          </h5>
                          <img 
                          src="" 
                          alt=""
                          class="aspect-video bg-slate-200">
                      </li>
                  </ul>

              </div>

          </div>
    </section>
</template>

<style scoped></style>
