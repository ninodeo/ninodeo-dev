<script setup lang="ts">
defineProps({
  challenges: Object
})
</script>

<template>
  <section>
    <div class="defaultContainer xl:px-10 flex flex-col space-y-5">
        <h2 class="defaultTitle">Challenges</h2>
        <div class="flex flex-col space-y-3">
            <h6
              v-for="(chalDesc, index) in challenges.desc"
              :key="index">
              {{ chalDesc }}
            </h6>
        </div>
        <ul
          class="flex flex-col space-y-3 py-5 list-disc list-inside">
            <li
              v-for="(chalItm, idx) in challenges.list"
              class="h6"
              :key="idx">
              {{ chalItm }}
            </li>
        </ul>
    </div>
  </section>
</template>

<style scoped></style>
