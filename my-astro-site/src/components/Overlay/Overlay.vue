<template>
  <div v-if="isOpened" class="overlay" @click.self="closeOverlay">
    <div class="overlay__close">
      <button class="close-button" @click="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

interface Props {
  isOpened: boolean;
}

const props = defineProps<Props>();

const isOpened = ref(props.isOpened);

const closeOverlay = () => {
  isOpened.value = true;
};

watch(
  () => isOpened.value,
  (value) => {
    if (value) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);
</script>
<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(20px);
  z-index: 100;
}

.overlay__close {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
}

button {
  all: unset;
  scale: 1;
  transition: all 0.3s ease-in-out;
}

button:hover {
  scale: 1.1;
  /* Animate scale hover */
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.close-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #4f4f4f;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
