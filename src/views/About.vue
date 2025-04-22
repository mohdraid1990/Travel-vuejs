<script setup>
import { ref, onMounted } from "vue";

const stats = ref([
  { number: "15+", label: "Years Experience" },
  { number: "1000+", label: "Happy Travelers" },
  { number: "50+", label: "Destinations" },
  { number: "24/7", label: "Support" },
]);

const team = ref([
  {
    name: "Sarah Johnson",
    role: "Travel Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    delay: 0,
  },
  {
    name: "Michael Chen",
    role: "Destination Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    delay: 0.2,
  },
  {
    name: "Emma Davis",
    role: "Customer Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    delay: 0.4,
  },
]);

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Our Story</h1>
        <p>Discover the journey that brought us here</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-content">
          <div class="section-header">
            <span class="subtitle">Our Mission</span>
            <h2>Creating Unforgettable Travel Experiences</h2>
          </div>
          <p class="mission-text">
            We believe that travel has the power to transform lives. Our mission
            is to create meaningful travel experiences that inspire, educate,
            and connect people with different cultures around the world.
          </p>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">15+</span>
              <span class="stat-label">Years Experience</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">50K+</span>
              <span class="stat-label">Happy Travelers</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100+</span>
              <span class="stat-label">Destinations</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">98%</span>
              <span class="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Our Values</span>
          <h2>What We Stand For</h2>
        </div>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Passion</h3>
            <p>
              We're passionate about travel and dedicated to sharing that
              passion with our customers.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Trust</h3>
            <p>
              Building lasting relationships through transparency and
              reliability.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <i class="fas fa-globe"></i>
            </div>
            <h3>Sustainability</h3>
            <p>
              Committed to responsible tourism and environmental conservation.
            </p>
          </div>
          <div class="value-card">
            <div class="value-icon">
              <i class="fas fa-star"></i>
            </div>
            <h3>Excellence</h3>
            <p>Striving for excellence in every aspect of our service.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <span class="subtitle">Our Team</span>
          <h2>Meet the People Behind Our Success</h2>
        </div>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-image">
              <img
                src="../assets/images/John Smith.avif"
                alt="Team Member"
              />
            </div>
            <div class="member-info">
              <h3>John Smith</h3>
              <span class="position">Founder & CEO</span>
              <p>With over 20 years of experience in the travel industry.</p>
            </div>
          </div>
          <div class="team-member">
            <div class="member-image">
              <img
                src="../assets/images/Maria.avif"
                alt="Team Member"
              />
            </div>
            <div class="member-info">
              <h3> Maria Garcia</h3>
              <span class="position">Head of Operations</span>
              <p>Expert in creating seamless travel experiences.</p>
            </div>
          </div>
          <div class="team-member">
            <div class="member-image">
              <img
                src="../assets/images/Michael.avif"
                alt="Team Member"
              />
            </div>
            <div class="member-info">
              <h3>Michael Chen</h3>
              <span class="position">Creative Director</span>
              <p>Bringing innovation to travel experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>
            Join thousands of satisfied travelers who have experienced the world
            with us.
          </p>
          <button class="cta-button">Explore Destinations</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-page {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.hero-section {
  height: 60vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: url("../assets/images/Contact.avif")
    center/cover;
  margin-bottom: 80px;
  overflow: hidden;

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 0 20px;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1.2s ease-out forwards;

    h1 {
      font-size: 4rem;
      font-weight: 800;
      margin-bottom: 20px;
      color: white;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      letter-spacing: -1px;
    }

    p {
      font-size: 1.5rem;
      opacity: 0.9;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
      margin-bottom: 30px;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;

  .subtitle {
    color: #2563eb;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
    margin-bottom: 15px;
    display: block;
  }

  h2 {
    font-size: 2.5rem;
    color: #1f2937;
    font-weight: 700;
    margin-bottom: 20px;
  }
}

.mission-section {
  padding: 100px 0;
  background: white;

  .mission-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .mission-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #4b5563;
    margin-bottom: 50px;
  }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 50px;

  .stat-item {
    text-align: center;
    padding: 30px;
    background: #f8f9fa;
    border-radius: 15px;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: #2563eb;
      margin-bottom: 10px;
    }

    .stat-label {
      color: #6b7280;
      font-size: 1rem;
    }
  }
}

.values-section {
  padding: 100px 0;
  background: #f8f9fa;

  .values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .value-card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .value-icon {
      width: 70px;
      height: 70px;
      background: linear-gradient(45deg, #2563eb, #3b82f6);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px;
      color: white;
      font-size: 1.8rem;
    }

    h3 {
      font-size: 1.5rem;
      color: #1f2937;
      margin-bottom: 15px;
    }

    p {
      color: #6b7280;
      line-height: 1.6;
    }
  }
}

.team-section {
  padding: 100px 0;
  background: white;

  .team-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .team-member {
    text-align: center;

    .member-image {
      width: 200px;
      height: 200px;
      margin: 0 auto 25px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }

      &:hover img {
        transform: scale(1.1);
      }
    }

    .member-info {
      h3 {
        font-size: 1.5rem;
        color: #1f2937;
        margin-bottom: 5px;
      }

      .position {
        color: #2563eb;
        font-weight: 600;
        display: block;
        margin-bottom: 10px;
      }

      p {
        color: #6b7280;
        line-height: 1.6;
      }
    }
  }
}

.cta-section {
  padding: 100px 0;
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  text-align: center;

  .cta-content {
    max-width: 800px;
    margin: 0 auto;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1.2rem;
      opacity: 0.9;
      margin-bottom: 30px;
    }
  }

  .cta-button {
    background: white;
    color: #2563eb;
    border: none;
    padding: 15px 40px;
    border-radius: 30px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
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

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

    .values-grid {
        grid-template-columns: repeat(2, 1fr) !important;
    }
  .team-grid {
    grid-template-columns: 1fr !important;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
      .values-grid {
        grid-template-columns: repeat(1, 1fr) !important;
    }
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .hero-section {
    height: 40vh;

    .hero-content h1 {
      font-size: 2.5rem;
    }
  }
}
</style>
