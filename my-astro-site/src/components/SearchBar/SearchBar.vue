<template>
  <button @click="openOverlay()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      style="fill: rgb(225, 255, 255, 1); --darkreader-inline-fill: #ffffff"
      data-darkreader-inline-fill=""
    >
      <path
        d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
      ></path>
      <path
        d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"
      ></path>
    </svg>
  </button>
  <Overlay :is-opened="isOpened">
    <div class="search-bar">
      <input type="text" placeholder="Search for posts..." />
    </div>
  </Overlay>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Overlay from "../Overlay/Overlay.vue";

const isOpened = ref(false);

const openOverlay = () => {
  isOpened.value = true;
};
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
