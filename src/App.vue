<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { gsap } from "gsap";

const router = useRouter();
const isScrolled = ref(false);
const isPageLoading = ref(true);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Initialize scroll animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  // Wait for DOM to be ready
  setTimeout(() => {
    document
      .querySelectorAll(".fade-in, .slide-in-left, .slide-in-right, .scale-in")
      .forEach((element) => {
        observer.observe(element);
      });
    isPageLoading.value = false;
  }, 100);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Simple page transition functions
const beforeEnter = (el) => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
};

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
    onComplete: done,
  });
};

const leave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    y: -30,
    duration: 0.5,
    ease: "power2.in",
    onComplete: done,
  });
};
</script>

<template>
  <div class="app">
    <Navbar :is-scrolled="isScrolled" />

    <main>
      <router-view v-slot="{ Component }">
        <transition
          name="page"
          mode="out-in"
          @before-enter="beforeEnter"
          @enter="enter"
          @leave="leave"
        >
          <keep-alive>
            <suspense>
              <template #default>
                <div class="page-wrapper">
                  <component :is="Component" />
                </div>
              </template>
              <template #fallback>
                <div class="loading-state">
                  <div class="spinner"></div>
                  <p>Loading page...</p>
                </div>
              </template>
            </suspense>
          </keep-alive>
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  color: #2b2d42;
  background-color: #f8f9fa;
}

.app {
  min-height: 100vh;
  overflow-x: hidden;
}

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
  text-align: center;

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #e9ecef;
    border-top: 4px solid #4361ee;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }

  p {
    color: #6c757d;
    font-size: 1.1rem;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #4361ee, #3a0ca3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #3a0ca3, #4361ee);
}

/* Selection color */
::selection {
  background: rgba(67, 97, 238, 0.2);
  color: #4361ee;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles */
:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.3);
}

/* Loading animation */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.loading {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
}
</style>
