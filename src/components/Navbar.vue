<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const menuItems = [
  { name: "Home", path: "/", icon: "fas fa-home" },
  {
    name: "Destinations",
    path: "/destinations",
    icon: "fas fa-map-marked-alt",
  },
  { name: "About", path: "/about", icon: "fas fa-info-circle" },
  { name: "Contact", path: "/contact", icon: "fas fa-envelope" },
  { name: "Book Now", path: "/book", icon: "fas fa-calendar-check" },
];

const isCurrentRoute = (path) => {
  return route.path === path;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand" @click="closeMenu">
        <div class="logo-container">
          <div class="logo-image">
            <h1>Wanderlust</h1>
          </div>
        </div>
      </router-link>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen"
      >
        <span class="menu-icon"></span>
      </button>

      <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="navbar-item"
          :class="{ 'is-active': isCurrentRoute(item.path) }"
          @click="closeMenu"
        >
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(
    135deg,
    rgb(52 48 119 / 76%),
    rgba(37, 118, 171, 0.95)
  );
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.5rem 0;

  * {
    &:focus {
      outline: none !important;
      box-shadow: none !important;
    }
  }

  &.navbar-scrolled {
    background: linear-gradient(
      135deg,
      rgba(2, 0, 36, 0.98),
      rgba(37, 118, 171, 0.98)
    );
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.35);
    padding: 0.3rem 0;
  }

  .navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-brand {
    text-decoration: none;
    transition: all 0.3s ease;
    outline: none;
    -webkit-tap-highlight-color: transparent;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    .logo-container {
      position: relative;
      padding: 10px 0;
      transition: all 0.3s ease;

      h1 {
        font-size: 2.2rem;
        font-weight: 800;
        color: #fff;
        margin: 0;
        background: linear-gradient(135deg, #fff 0%, #a8c0ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        letter-spacing: 1px;
        position: relative;
        z-index: 2;
        transition: all 0.3s ease;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        outline: none;

        &:focus {
          outline: none;
          box-shadow: none;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #a8c0ff, transparent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
      }

      &:hover {
        h1 {
          transform: translateY(-2px);

          &::after {
            transform: scaleX(1);
          }
        }
      }

      @media (max-width: 1025px) {
        h1 {
          font-size: 2rem;
        }
      }

      @media (max-width: 768px) {
        h1 {
          font-size: 1.8rem;
        }
      }
    }
  }

  .navbar-menu {
    display: flex;
    gap: 1rem;
    align-items: center;

    @media (max-width: 1025px) {
      gap: 0.8rem;
    }

    @media (max-width: 1025px) {
      position: fixed;
      top: 100%;
      left: 0;
      right: 0;
      background: linear-gradient(
        135deg,
        rgba(2, 0, 36, 0.98),
        rgba(37, 118, 171, 0.98)
      );
      padding: 1.5rem;
      flex-direction: column;
      gap: 1rem;
      transform: translateY(-100%);
      opacity: 0;
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);

      &.is-active {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  .navbar-item {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    border-radius: 12px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    align-items: center;
    gap: 0.8rem;
    position: relative;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transform-origin: center;
    width: 160px;
    height: 50px;
    justify-content: center;

    @media (max-width: 1025px) {
      width: 140px;
      height: 45px;
      font-size: 0.9rem;
    }

    @media (max-width: 1025px) {
      width: 100%;
      height: 50px;
      font-size: 1rem;
    }

    i {
      font-size: 1.2rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      color: #f3f5f7;
      transform-origin: center;

      @media (max-width: 1025px) {
        font-size: 1.1rem;
      }
    }

    span {
      position: relative;
      z-index: 1;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-origin: center;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(37, 118, 171, 0.15),
        rgba(2, 0, 36, 0.15)
      );
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform: scale(0.8);
    }

    &:hover {
      color: #fff;
      transform: translateY(-2px) scale(1.02);
      border-color: rgba(37, 118, 171, 0.4);
      background: rgba(37, 118, 171, 0.15);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(37, 118, 171, 0.2), 0 0 20px rgba(37, 118, 171, 0.15);

      &::before {
        opacity: 1;
        transform: scale(1);
      }

      i {
        transform: scale(1.2) rotate(5deg);
        color: #fff;
      }

      span {
        transform: scale(1.05);
      }
    }

    &.is-active {
      color: #fff;
      font-weight: 600;
      background: rgba(37, 118, 171, 0.2);
      border-color: rgba(37, 118, 171, 0.5);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2),
        0 0 0 1px rgba(37, 118, 171, 0.3), 0 0 20px rgba(37, 118, 171, 0.2);
      transform: translateY(-1px);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      i {
        animation: iconPulse 2s ease-in-out infinite;
      }

      span {
        transform: scale(1.02);
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(
          90deg,
          transparent 0%,
          #2576ab 20%,
          #4fa1d8 50%,
          #2576ab 80%,
          transparent 100%
        );
        animation: slideIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        box-shadow: 0 0 10px rgba(37, 118, 171, 0.5);
      }
    }
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    position: relative;
    z-index: 1001;

    @media (max-width: 1025px) {
      display: block;
    }

    .menu-icon {
      display: block;
      width: 24px;
      height: 2px;
      background: #fff;
      position: relative;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 24px;
        height: 2px;
        background: #fff;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      &::before {
        top: -6px;
      }

      &::after {
        bottom: -6px;
      }
    }

    &[aria-expanded="true"] {
      .menu-icon {
        background: transparent;

        &::before {
          transform: rotate(45deg);
          top: 0;
        }

        &::after {
          transform: rotate(-45deg);
          bottom: 0;
        }
      }
    }
  }
}

@keyframes continuousRotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes counterRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -5px);
  }
}

@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 15px rgba(37, 118, 171, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(37, 118, 171, 0.8);
  }
}

@keyframes arrowPulse {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-30%) translateY(0);
  }
}

@keyframes slideIn {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  50% {
    transform: scaleX(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes iconPulse {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
  }
}

@media (max-width: 768px) {
  .navbar .navbar-container {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .navbar .navbar-container {
    padding: 0 15px;
  }
}
</style>
