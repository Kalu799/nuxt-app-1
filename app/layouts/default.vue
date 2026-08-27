<template>

  <header>
    <h1>First app Nuxt</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      |
      <NuxtLink to="/apropos">A propos</NuxtLink>
      |
      <NuxtLink to="/fruits">Fruits</NuxtLink>
      |
      <NuxtLink to="/activites">Activitées</NuxtLink>
      |
      <NuxtLink to="/motos">Motos</NuxtLink>
    </nav>
  </header>

  <main>
    <slot />
  </main>

</template>