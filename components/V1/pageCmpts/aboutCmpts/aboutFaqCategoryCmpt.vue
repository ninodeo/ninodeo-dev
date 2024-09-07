<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <div :id="props.slug" class="flex flex-col space-y-3 scroll-mt-36" >
    <div class="flex flex-col items-start">
      <h3 class="defaultTitle border-b-2 border-[var(--custom-primary)] pb-3">
        {{ props.topic }} {{ props.id }}
      </h3>
    </div>

    <div class="flex flex-col space-y-5 px-5">
      <details
        v-for="(faq, index) in props.faqs" 
        :key="index" 
        class="flex flex-col space-x-2 rounded-lg [&_summary::-webkit-details-marker]:hidden group">
        <summary class="flex cursor-pointer items-center justify-between gap-1.5">
          <h6 class="font-semibold py-3">{{ faq.question }}</h6>
          
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
        <p id="answer" class="mt-4 leading-relaxed text-gray-700 bg-gray-100 p-3 py-5" v-html="faq.answer"></p>
      </details>
    </div>
  </div>
</template>

<style scoped></style>
