<template>

  <header>
    <h1>First app Nuxt</h1>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      |
      <NuxtLink to="/apropos">A propos</NuxtLink>
    </nav>
  </header>

  <main>
    <slot />
  </main>

</template>