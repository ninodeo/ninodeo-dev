<script setup lang="ts">
defineProps({
  props: Object
})
</script>

<template>
  <div
    id="inputContainer">
    <label
      class="text-lg"
      :for="props.name">
      {{ props.label }}
      </label>

    <textarea
      v-if="props.type === 'textarea'"
      rows="10"
      class="resize-none"
      :placeholder="props.placeholder"
      :required="props.required">
    </textarea>  

    <input
      v-else
      :type="props.type"
      :placeholder="props.placeholder"
      :name="props.name"
      :required="props.required">
  </div>
</template>

<style scoped>
  #inputContainer{
      @apply flex flex-col items-start w-full space-y-3 
  }
  input, textarea{
    @apply block w-full placeholder-gray-400/70 rounded-lg border-2 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300
  }
</style>
