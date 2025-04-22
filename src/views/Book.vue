<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const isVisible = ref(false);
const formData = ref({
  destination: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
  rooms: 1,
});

const route = useRoute();
const selectedLandmarks = ref([]);
const selectedDestination = ref(null);
import berlin from "../assets/images/berlin.avif";
import madrid from "../assets/images/madrid.avif";
import Amsterdam from "../assets/images/amsterdam.avif";
import Zurich from "../assets/images/Zurich.avif";
import Spa from "../assets/images/Spa access.jpeg";
import Adventure from "../assets/images/adventure.jpeg";
import Budget from "../assets/images/Budget Package.avif";
const destinations = [
  {
    id: 1,
    name: "berlin, germany",
    image: berlin,
  },
  {
    id: 2,
    name: "madrid, spain",
    image: madrid,
  },
  {
    id: 3,
    name: "Amsterdam, Netherlands",
    image: Amsterdam,
  },
  {
    id: 4,
    name: "Zurich, Switzerland",
    image: Zurich,
  },
];

const packages = [
  {
    id: 1,
    name: "Luxury Package",
    price: 2999,
    duration: "7 days",
    features: [
      "5-star accommodation",
      "Private transfers",
      "Guided tours",
      "Spa access",
    ],
    image: Spa,
  },
  {
    id: 2,
    name: "Adventure Package",
    price: 1999,
    duration: "5 days",
    features: [
      "4-star accommodation",
      "Group activities",
      "Equipment rental",
      "Local guide",
    ],
    image: Adventure,
  },
  {
    id: 3,
    name: "Budget Package",
    price: 999,
    duration: "3 days",
    features: [
      "3-star accommodation",
      "Public transfers",
      "Basic tours",
      "Free breakfast",
    ],
    image: Budget,
  },
];

const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form submission logic here
  console.log("Form submitted:", formData.value);
};

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);

  // Get destination data from route query
  if (route.query.destination) {
    selectedDestination.value = {
      name: route.query.destination,
      image:
        route.query.image ||
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34", // Default image if none provided
    };
  }

  if (route.query.landmarks) {
    try {
      selectedLandmarks.value = JSON.parse(route.query.landmarks);
    } catch (e) {
      console.error("Error parsing landmarks:", e);
    }
  }
});
</script>

<template>
  <div class="book-page" :class="{ 'is-visible': isVisible }">
    <!-- Hero Section -->
    <section
      class="hero-section"
      :style="
        selectedDestination
          ? { backgroundImage: `url(${selectedDestination.image})` }
          : {}
      "
    >
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>
          {{
            selectedDestination
              ? selectedDestination.name
              : "Book Your Adventure"
          }}
        </h1>
        <p>Start planning your dream vacation today</p>
      </div>
    </section>

    <!-- Booking Form Section -->
    <section class="booking-section">
      <div class="container">
        <div class="booking-grid">
          <!-- Booking Form -->
          <div class="booking-form">
            <h2>Plan Your Trip</h2>
            <form @submit="handleSubmit">
              <div class="form-group">
                <label for="destination">Destination</label>
                <select
                  id="destination"
                  v-model="formData.destination"
                  required
                >
                  <option value="">Select a destination</option>
                  <option
                    v-for="dest in destinations"
                    :key="dest.id"
                    :value="dest.name"
                  >
                    {{ dest.name }}
                  </option>
                </select>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="checkIn">Check In</label>
                  <input
                    type="date"
                    id="checkIn"
                    v-model="formData.checkIn"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="checkOut">Check Out</label>
                  <input
                    type="date"
                    id="checkOut"
                    v-model="formData.checkOut"
                    required
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="guests">Guests</label>
                  <input
                    type="number"
                    id="guests"
                    v-model="formData.guests"
                    min="1"
                    max="10"
                    required
                  />
                </div>

                <div class="form-group">
                  <label for="rooms">Rooms</label>
                  <input
                    type="number"
                    id="rooms"
                    v-model="formData.rooms"
                    min="1"
                    max="5"
                    required
                  />
                </div>
              </div>

              <button type="submit" class="submit-btn">
                Search Availability
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>

          <!-- Featured Destinations -->
          <div class="featured-destinations">
            <h2>Popular Destinations</h2>
            <div class="destinations-grid">
              <div
                v-for="dest in destinations"
                :key="dest.id"
                class="destination-card"
                :style="{ '--delay': `${0.3 + dest.id * 0.1}s` }"
              >
                <div class="destination-image">
                  <img :src="dest.image" :alt="dest.name" />
                  <div class="destination-overlay">
                    <h3>{{ dest.name }}</h3>
                    <button class="explore-btn">
                      Explore
                      <i class="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Travel Packages Section -->
    <section class="packages-section">
      <div class="container">
        <h2>Travel Packages</h2>
        <div class="packages-grid">
          <div
            v-for="pkg in packages"
            :key="pkg.id"
            class="package-card"
            :style="{ '--delay': `${0.3 + pkg.id * 0.1}s` }"
          >
            <div class="package-image">
              <img :src="pkg.image" :alt="pkg.name" />
              <div class="package-price">
                <span class="amount">${{ pkg.price }}</span>
                <span class="duration">{{ pkg.duration }}</span>
              </div>
            </div>
            <div class="package-content">
              <h3>{{ pkg.name }}</h3>
              <ul class="package-features">
                <li v-for="(feature, index) in pkg.features" :key="index">
                  <i class="fas fa-check"></i>
                  {{ feature }}
                </li>
              </ul>
              <button class="book-btn">
                Book Now
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="selectedLandmarks.length > 0" class="landmarks-section">
      <h2>Popular Landmarks in {{ route.query.destination }}</h2>
      <div class="landmarks-grid">
        <div
          v-for="landmark in selectedLandmarks"
          :key="landmark.name"
          class="landmark-card"
        >
          <img :src="landmark.image" :alt="landmark.name" />
          <h3>{{ landmark.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.book-page {
  min-height: 100vh;
  background-color: #f8f9fa;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  font-family: "Poppins", sans-serif;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-section {
    position: relative;
    height: 80vh;
    overflow: hidden;
    background: linear-gradient(135deg, #020024 0%, #2576ab 100%);
    background-size: cover;
    background-position: center;
    @media (max-width: 1024px) {
      height: 45vh;
      min-height: 350px;
    }

    @media (max-width: 768px) {
      height: 40vh;
      min-height: 300px;
    }

    @media (max-width: 480px) {
      height: 35vh;
      min-height: 250px;
    }

    .hero-content {
      background-image: url(/src/assets/images/book.avif);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;



 
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;

      h1 {
        font-family: "Playfair Display", serif;
        font-size: 4rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        letter-spacing: -1px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        color: #35373a;

        animation: fadeInUp 1s ease-out;

        @media (max-width: 1024px) {
          font-size: 3.5rem;
        }

        @media (max-width: 768px) {
          font-size: 3rem;
        }

        @media (max-width: 480px) {
          font-size: 2.5rem;
        }
      }

      p {
        font-size: 1.7rem;
        font-weight: 500;
        max-width: 600px;
        margin: 0 auto;
        opacity: 0.95;
        color: #684eaf;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        animation: fadeInUp 1s ease-out 0.2s backwards;

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }
  }

  .booking-section {
    padding: 80px 0;
    background: #fff;
    position: relative;
    z-index: 1;
  }

  .booking-grid {
    display: grid;
    grid-template-columns:  1fr;
    gap: 3rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1024px) {
      max-width: 900px;
      gap: 2rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  .booking-form {
    background: #fff;
    border-radius: 20px;
    padding: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    }

    h2 {
      font-family: "Playfair Display", serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      padding-bottom: 15px;
      letter-spacing: -0.5px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #3b82f6);
        border-radius: 3px;
      }
    }

    .form-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        color: #374151;
        font-weight: 600;
        font-size: 1.1rem;
      }

      input,
      select {
        width: 100%;
        padding: 14px 16px;
        border: 2px solid #e5e7eb;
        border-radius: 12px;
        font-size: 1.1rem;
        font-weight: 500;
        color: #1f2937;
        transition: all 0.3s ease;
        background: #f9fafb;

        &:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
          background: #fff;
        }
      }
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 480px) {
        grid-template-columns: 1fr;
      }
    }

    .submit-btn {
      width: 100%;
      padding: 16px;
      border: none;
      border-radius: 12px;
      background: linear-gradient(45deg, #2563eb, #3b82f6);
      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      letter-spacing: 0.5px;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
      }

      i {
        font-size: 1.2rem;
        transition: transform 0.3s ease;
      }

      &:hover i {
        transform: translateX(5px);
      }
    }
  }

  .featured-destinations {
    h2 {
      font-family: "Playfair Display", serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 2rem;
      text-align: center;
      position: relative;
      padding-bottom: 15px;
      letter-spacing: -0.5px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #3b82f6);
        border-radius: 3px;
      }
    }

    .destinations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;

      .destination-card {
        background: #fff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

        &:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

          .destination-image img {
            transform: scale(1.1);
          }

          .destination-overlay {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .destination-image {
          position: relative;
          height: 300px;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
            filter: brightness(0.9) contrast(1.1);
          }

          .destination-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8),
              transparent
            );
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 2rem;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;

            h3 {
              font-family: "Playfair Display", serif;
              font-size: 2rem;
              font-weight: 700;
              color: #fff;
              margin-bottom: 1rem;
              text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
              letter-spacing: -0.5px;
            }

            .explore-btn {
              background: transparent;
              border: 2px solid #fff;
              color: #fff;
              padding: 0.8rem 1.5rem;
              border-radius: 50px;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              gap: 0.5rem;
              width: fit-content;
              backdrop-filter: blur(5px);

              &:hover {
                background: #fff;
                color: #1f2937;
                transform: translateX(5px);
              }

              i {
                transition: transform 0.3s ease;
              }

              &:hover i {
                transform: translateX(5px);
              }
            }
          }
        }
      }
    }
  }

  .packages-section {
    padding: 80px 0;
    background: #f8f9fa;

    h2 {
      font-family: "Playfair Display", serif;
      font-size: 2.8rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 50px;
      text-align: center;
      position: relative;
      padding-bottom: 15px;
      letter-spacing: -0.5px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #3b82f6);
        border-radius: 3px;
      }
    }
  }

  .packages-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .package-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: var(--delay);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);

      .package-image img {
        transform: scale(1.1);
      }
    }

    .package-image {
      position: relative;
      height: 300px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        filter: brightness(0.9) contrast(1.1);
      }

      .package-price {
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        padding: 15px 25px;
        border-radius: 25px;
        text-align: center;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        transform: translateY(0);
        transition: transform 0.3s ease;

        &:hover {
          transform: translateY(-5px);
        }

        .amount {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #2563eb;
          line-height: 1;
        }

        .duration {
          font-size: 0.9rem;
          color: #6b7280;
          margin-top: 5px;
        }
      }
    }

    .package-content {
      padding: 30px;

      h3 {
        font-family: "Playfair Display", serif;
        font-size: 1.8rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 20px;
        letter-spacing: -0.5px;
      }

      .package-features {
        list-style: none;
        padding: 0;
        margin-bottom: 25px;

        li {
          font-size: 1.1rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 12px;
        }
      }
    }
  }

  .book-btn {
    width: 100%;
    padding: 14px;
    background: linear-gradient(45deg, #2563eb, #3b82f6);
    color: white;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 1.1rem;

    i {
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);

      i {
        transform: translateX(5px);
      }
    }
  }

  .landmarks-section {
    margin-top: 4rem;
    padding: 2rem;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);

    h2 {
      font-family: "Playfair Display", serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: #1f2937;
      text-align: center;
      margin-bottom: 2rem;
      letter-spacing: -0.5px;
    }
  }

  .landmarks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .landmark-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);

      img {
        transform: scale(1.1);
      }
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      filter: brightness(0.9) contrast(1.1);
    }

    h3 {
      font-family: "Playfair Display", serif;
      font-size: 1.4rem;
      font-weight: 700;
      padding: 1.5rem;
      margin: 0;
      color: #1f2937;
      text-align: center;
      letter-spacing: -0.5px;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media (max-width: 768px) {
  .hero-section {
    height: 50vh;

    .hero-content h1 {
      font-size: 3rem;
    }

    .hero-content p {
      font-size: 1.2rem;
    }
  }

  .booking-form {
    padding: 30px 20px;
  }

  .destinations-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 40vh;

    .hero-content h1 {
      font-size: 2.5rem;
    }
  }

  .form-row {
    grid-template-columns: 1fr;
  }
  .book-page .booking-form .submit-btn , i{
    font-size: 0.9rem !important;
  }

}
</style>
