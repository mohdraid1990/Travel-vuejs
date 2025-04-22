<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Our Location",
    details: "123 Travel Street, Moscow City, AC 12345",
  },
  {
    icon: "fas fa-phone",
    title: "Phone Number",
    details: "+7 (555) 123-4567",
  },
  {
    icon: "fas fa-envelope",
    title: "Email Address",
    details: "info@traveladventures.com",
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
});
</script>

<template>
  <div class="contact-page" :class="{ 'is-visible': isVisible }">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>Contact Us</h1>
        <p>Get in touch with our travel experts</p>
      </div>
    </section>

    <!-- Contact Content Section -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info Cards -->
          <div class="contact-info">
            <div
              v-for="(info, index) in contactInfo"
              :key="info.title"
              class="info-card"
              :style="{ '--delay': `${0.3 + index * 0.1}s` }"
            >
              <div class="icon-container">
                <i :class="info.icon"></i>
              </div>
              <h3>{{ info.title }}</h3>
              <p>{{ info.details }}</p>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form">
            <h2>Send us a Message</h2>
            <form @submit="handleSubmit">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  required
                  placeholder="Enter subject"
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  placeholder="Enter your message"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="submit-btn">
                Send Message
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="map-container">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577027.7891397858!2d37.31764671713884!3d55.755826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2sMoscow%2C%20Russia!5e0!3m2!1sen!2s!4v1698765432109!5m2!1sen!2s"
  width="600"
  height="250"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact-page {
  min-height: 100vh;
  background-color: #f8f9fa;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-section {
    position: relative;
    height: 40vh;
    min-height: 300px;
    overflow: hidden;
    background: linear-gradient(135deg, #020024 0%, #2576ab 100%);

    @media (max-width: 1024px) {
      height: 35vh;
      min-height: 250px;
    }

    @media (max-width: 768px) {
      height: 30vh;
      min-height: 200px;
    }

    @media (max-width: 480px) {
      height: 25vh;
      min-height: 150px;
    }

    .hero-content {
    background-image: url(/src/assets/images/121.avif);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
      position: relative;
      z-index: 2;
     
      margin: 0 auto;
      padding: 0 20px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: #fff;

      h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.2;
        background: linear-gradient(135deg, #080808 0%, #48358f 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: fadeInUp 1s ease-out;

        @media (max-width: 1024px) {
          font-size: 2.5rem;
        }

        @media (max-width: 768px) {
          font-size: 2rem;
        }

        @media (max-width: 480px) {
          font-size: 1.8rem;
        }
      }

      p {
        font-size: 1.1rem;
        max-width: 600px;
        margin: 0 auto;
        opacity: 0.9;
        animation: fadeInUp 1s ease-out 0.2s backwards;
        color: #1a5a8c;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  .contact-content {
    padding: 6rem 0;
    background: #f8f9fa;

    @media (max-width: 1024px) {
      padding: 4rem 0;
    }

    @media (max-width: 768px) {
      padding: 3rem 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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

    .contact-info {
      .info-card {
        background: #fff;
        border-radius: 15px;
        padding: 2rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
    align-items: center;
    justify-content: center;

        &:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        h3 {
          font-size: 1.5rem;
          color: #020024;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;

          i {
            color: #2576ab;
            font-size: 1.8rem;
          }
        }

        p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          .detail-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            color: #333;

            i {
              color: #2576ab;
              font-size: 1.2rem;
            }

            a {
              color: inherit;
              text-decoration: none;
              transition: color 0.3s ease;

              &:hover {
                color: #2576ab;
              }
            }
          }
        }
      }
    }

    .contact-form {
      background: #fff;
      border-radius: 15px;
      padding: 2rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

      h2 {
        font-size: 2rem;
        color: #020024;
        margin-bottom: 2rem;
        text-align: center;

        @media (max-width: 768px) {
          font-size: 1.8rem;
        }
      }

      .form-group {
        margin-bottom: 1.5rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #333;
          font-weight: 500;
        }

        input,
        textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;

          &:focus {
            outline: none;
            border-color: #2576ab;
            box-shadow: 0 0 0 2px rgba(37, 118, 171, 0.1);
          }
        }

        textarea {
          min-height: 150px;
          resize: vertical;
        }
      }

      .submit-btn {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 8px;
        background: #2576ab;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        &:hover {
          background: #1a5a8c;
          transform: translateY(-2px);
        }

        i {
          font-size: 1.2rem;
        }
      }
    }
  }

  .map-section {
    height: 400px;
    position: relative;

    @media (max-width: 768px) {
      height: 300px;
    }

    @media (max-width: 480px) {
      height: 250px;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: var(--delay);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }

  .icon-container {
    width: 70px;
    height: 70px;
    background: linear-gradient(45deg, #2563eb, #3b82f6);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 1.8rem;
    transition: all 0.3s ease;
  }

  &:hover .icon-container {
    transform: scale(1.1) rotate(5deg);
  }

  h3 {
    font-size: 1.5rem;
    color: #1f2937;
    margin-bottom: 10px;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
  }
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.6s;

  h2 {
    font-size: 2rem;
    color: #1f2937;
    margin-bottom: 30px;
    text-align: center;
    position: relative;
    padding-bottom: 15px;

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
}

.form-group {
  margin-bottom: 25px;

  label {
    display: block;
    margin-bottom: 10px;
    color: #4b5563;
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background-color: #f9fafb;

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      background-color: white;
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
}

.submit-btn {
  width: 100%;
  padding: 15px;
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

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

.map-section {
  margin-top: 80px;
}

.map-container {
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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

  .contact-form {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 40vh;

    .hero-content h1 {
      font-size: 2.5rem;
    }
  }
}
</style>
