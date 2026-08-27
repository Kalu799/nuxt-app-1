<script setup>

const { data: activities, refresh } = await useFetch('/api/activities')

const newAct = ref({ title: "", duration: "" })

const addAct = async () => {
  const addedAct = await $fetch('/api/activities', {
    method: "POST",
    //      headers: {"Content-Type" : "application/json"}, // pas obligatoire car on les a mis dans la route index.post
    body: newAct.value
  })
  //console.log(newFruit)
  await refresh()
}

const delAct = async (id) => {
  if (confirm('Sùr ?')) {
    const deletedAct = await $fetch(`/api/activities/${id}`, {
      method: "DELETE",
    })
    await refresh()
  }
}

</script>


<template>

  <h1>Activitées</h1>

  <ul>
    <li v-for="(activite, key) in activities" :key=key>
      {{ activite.title }}, {{ activite.duration }}
      <button @click="delAct(activite.id)">X</button>
    </li>
  </ul>

  <form action="" @submit.prevent="addAct">
    <input type="text" placeholder="nom de l'activité" v-model="newAct.title">
    <input type="text" placeholder="durée de l'activité" v-model="newAct.duration">
    <button>Ajouter l'activité</button>
  </form>

</template>