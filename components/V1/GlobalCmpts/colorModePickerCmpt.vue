<script setup lang="ts">
  const colorMode = useColorMode()

  let isDarkMode = ref(false)
  let currentColor = ref(colorMode.value)

  function changeColorMode(){
    isDarkMode = !isDarkMode
    colorMode.preference = (isDarkMode ? 'dark' : 'light')
  }
</script>

<template>
  <div>
    <button type="button" @click="changeColorMode">
      Color Mode
    </button>
  </div>

</template>

<style scoped></style>
