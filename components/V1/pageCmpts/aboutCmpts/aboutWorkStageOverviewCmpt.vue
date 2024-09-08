<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <!-- Overview OF PROJECT BASED APPROACH -->
  <section>
    <!--Start of the defaultContainer-->
      <div class="defaultContainer xl:px-10 flex flex-col space-y-16">
        <h2
          class="defaultTitle xl:max-w-5xl">
          <!--Utilizing a project-based approach where the product undergoes this five stages: -->
          Here's a breakdown of my workflow phases:
        </h2>

        <ul
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-16">
          <li
            class="flex flex-row justify-start items-center gap-5"
            v-for="stage in props">
              <span
                class="aspect-square w-20 bg-slate-500">
                {{ stage.icon }}
              </span>
              <h4
                class="defaultTitle">
                {{ stage.name }}
              </h4>
          </li>
        </ul>
        <!--End of the defaultContainer-->
      </div>
    </section>
</template>

<style scoped></style>
