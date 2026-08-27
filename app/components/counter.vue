<script setup>

  const counter = ref(0)

  const UpdateCounter = () => {
    counter.value++
  }

</script>


<template>

  <button @click="UpdateCounter">{{ counter }}</button>

</template>