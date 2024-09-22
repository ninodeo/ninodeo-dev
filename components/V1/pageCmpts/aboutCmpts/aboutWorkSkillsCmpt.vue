<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <section>
    
    <div class="defaultContainer xl:px-10 flex flex-col gap-5">
      <h5 class="uppercase">
        {{ props.h2 }}
      </h5>
      
      <div class="flex flex-col gap-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 py-10 border-b last:border-none"
          v-for="(skill, index) in props.skills"
          :key="index">
          <div class="xl:col-span-2">
            <h2 class="defaultTitle">
              {{ skill.category }}
            </h2>
          </div>
          <ul class="lg:col-span-2 xl:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
            <li
              v-for="skillItm in skill.list"
              class="aspect-video px-5 flex flex-col items-center gap-3 py-5">
              <div class="bg-slate-200 w-full aspect-video">
                {{ skillItm.icon }}
              </div>
              <h5 class="text-center">{{ skillItm.name }}</h5>
            </li>
          </ul>
          
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped></style>
