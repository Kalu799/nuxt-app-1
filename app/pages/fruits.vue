<script setup>

const { data: fruits, refresh } = await useFetch('/api/fruits')

const fruitLabel = ref({ label: "" })

const addFruit = async () => {
  const newFruit = await $fetch('/api/fruits', {
    method: "POST",
    //      headers: {"Content-Type" : "application/json"}, // pas obligatoire car on les a mis dans la route index.post
    body: fruitLabel.value
  })
  //console.log(newFruit)
  await refresh()
}

const delFruit = async (id) => {
  if (confirm('Sùr ?')) {
    const newFruit = await $fetch(`/api/fruits/${id}`, {
      method: "DELETE",
    })
    //console.log(newFruit)
    await refresh()
  }
}

</script>


<template>

  <h1>Fruits</h1>

  <ul>
    <li v-for="(fruit, key) in fruits" :key=key>
      {{ fruit.label }}
      <button @click="delFruit(fruit.id)">X</button>
    </li>
  </ul>

  <form action="" @submit.prevent="addFruit">
    <input type="text" placeholder="nom du fruit" v-model="fruitLabel.label">
    <button>Ajouter le fruit</button>
  </form>

</template>