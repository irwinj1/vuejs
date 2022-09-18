<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Gifs Router </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink
              active-class="bg-info text-white fw-bold"
              class="nav-link"
              to="/"
              >Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              active-class="bg-success text-white fw-bold"
              class="nav-link"
              to="/gifs"
              >Gifs
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              active-class="bg-warning text-white fw-bold"
              class="nav-link"
              to="/stickers"
              >Sticker</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>

<style>
</style>