<template>
  <Overlay>
    <div class="search-bar">
      <input type="text" placeholder="Search for posts..." />
    </div>
  </Overlay>
</template>
<script setup lang="ts">
import Overlay from "../Overlay/Overlay.vue";
</script>
<style>
.search-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-bg);
  margin: 1rem;
  padding: 1rem;
  border-radius: 12px;
}

input {
  all: unset;
}

input::placeholder {
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 400;
}
</style>
