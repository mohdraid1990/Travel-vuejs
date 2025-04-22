<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const checkScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </transition>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: $primary-color;
  color: $white;
  border: none;
  box-shadow: $shadow-lg;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  transition: all $transition-normal;

  &:hover {
    transform: translateY(-5px);
    background-color: darken($primary-color, 10%);
    box-shadow: $shadow-xl;
  }

  i {
    font-size: 1.25rem;
  }

  @include responsive(md) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 20px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
