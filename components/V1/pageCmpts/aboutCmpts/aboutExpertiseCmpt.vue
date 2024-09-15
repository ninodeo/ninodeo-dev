<script setup lang="ts"></script>

<template>
  <section class="py-5">
    <div class="defaultContainer xl:px-10">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div class="col-span-2 flex flex-col items-start gap-5 aspect-square">
          <div class="flex flex-col gap-3">
            <h6 class="uppercase text-normal">My Expertise</h6>
            <h2 class="defaultTitle">Solution We Provide</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur id reiciendis in at molestiae molestias porro, debitis quas similique vel? Architecto voluptates veritatis provident blanditiis. Aut cumque molestiae officiis quae!</p>
          <NuxtLink
            class="btn btn-outline-primary"
            to="/contact">
              Contact Me
          </NuxtLink>
        </div>
        <div class="col-span-3">
          <div class="flex flex-col px-5">
          <details
            v-for="(faq, index) in 3" 
              :key="index" 
              class="flex flex-col space-x-2 rounded-lg [&_summary::-webkit-details-marker]:hidden group">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5">
                <h6 class="font-semibold py-3">Expert-{{ index }}</h6>
                
                <span class="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>
              <p id="answer" class="mt-4 leading-relaxed  rounded-md p-3 py-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tempore iusto ab dolore? Hic molestiae nostrum facilis laborum, suscipit quis sed quod adipisci repellendus repellat alias reiciendis distinctio nihil molestias.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
