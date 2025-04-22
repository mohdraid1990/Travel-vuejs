<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-waves">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
    </div>

    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <div class="brand-logo">
            <h2>Wanderlust</h2>
            <div class="logo-glow"></div>
          </div>
          <p>Your journey of a thousand miles begins with us.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
              <span class="social-tooltip">Facebook</span>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
              <span class="social-tooltip">Twitter</span>
            </a>
            <a href="#" class="social-link" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
              <span class="social-tooltip">Instagram</span>
            </a>
            <a href="#" class="social-link" aria-label="Pinterest">
              <i class="fab fa-pinterest-p"></i>
              <span class="social-tooltip">Pinterest</span>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-links-section">
            <h3>
              <i class="fas fa-compass"></i>
              Discover
            </h3>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Destinations</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-compass"></i>
                  <span>Tours</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-star"></i>
                  <span>Experiences</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-mountain"></i>
                  <span>Adventure Travel</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-links-section">
            <h3>
              <i class="fas fa-building"></i>
              Company
            </h3>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-building"></i>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-briefcase"></i>
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-blog"></i>
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-newspaper"></i>
                  <span>Press</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-links-section">
            <h3>
              <i class="fas fa-headset"></i>
              Support
            </h3>
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-envelope"></i>
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-question-circle"></i>
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-shield-alt"></i>
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-file-contract"></i>
                  <span>Terms of Service</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="footer-bottom-left">
            <div class="copyright">
              <i class="far fa-copyright"></i>
              <span>© {{ currentYear }} Travel Adventures</span>
            </div>
            <div class="rights">
              <span>All rights reserved</span>
            </div>
          </div>
          <div class="footer-bottom-right">
            <div class="designer-info">
              <div class="designer-badge">
                <i class="fas fa-code"></i>
                <span>Designed by <strong>Mohd</strong></span>
              </div>
              <a href="tel:+79962662350" class="phone-number">
                <i class="fas fa-phone"></i>
                <span>+79962662350</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(135deg, #1a1f25 0%, #2c3e50 100%);
  color: #fff;
  padding: 100px 0 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
}

.footer-waves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;

  .wave {
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
    background-size: 1440px 100px;
    animation: wave 10s linear infinite;
  }

  .wave2 {
    animation-delay: -5s;
    opacity: 0.5;
  }

  .wave3 {
    animation-delay: -2s;
    opacity: 0.2;
  }
}

@keyframes wave {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1440px;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.footer-brand {
  .brand-logo {
    position: relative;
    display: inline-block;
    margin-bottom: 20px;

    h2 {
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(45deg, #fff, #a8c0ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: 1px;
      position: relative;
      z-index: 1;
    }

    .logo-glow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      height: 120%;
      background: radial-gradient(
        circle,
        rgba(168, 192, 255, 0.2) 0%,
        rgba(168, 192, 255, 0) 70%
      );
      filter: blur(20px);
      z-index: 0;
      animation: pulse 3s ease-in-out infinite;
    }
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }
}

@keyframes pulse {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1);
  }
}

.social-links {
  display: flex;
  gap: 15px;

  .social-link {
    position: relative;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #3b82f6, #a8c0ff);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    i {
      font-size: 1.2rem;
      color: #fff;
      position: relative;
      z-index: 1;
      transition: transform 0.3s ease;
    }

    .social-tooltip {
      position: absolute;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.8rem;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

      &::before {
        opacity: 1;
      }

      i {
        transform: scale(1.2);
      }

      .social-tooltip {
        bottom: -30px;
        opacity: 1;
        visibility: visible;
      }
    }
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  justify-items: center;



  .footer-links-section {
    h3 {
      color: #fff;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 25px;
      display: flex;
      align-items: center;
      gap: 10px;
      position: relative;
      padding-bottom: 12px;

      i {
        color: #3b82f6;
        font-size: 1.1rem;
        background: rgba(59, 130, 246, 0.1);
        padding: 8px;
        border-radius: 8px;
        transition: all 0.3s ease;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, #3b82f6, transparent);
        transition: width 0.3s ease;
      }

      &:hover {
        i {
          transform: scale(1.1);
          background: rgba(59, 130, 246, 0.2);
        }

        &::after {
          width: 60px;
        }
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 12px;

        a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          position: relative;
          overflow: hidden;

          i {
            font-size: 0.9rem;
            width: 20px;
            text-align: center;
            color: #3b82f6;
            transition: transform 0.3s ease;
          }

          span {
            position: relative;

            &::after {
              content: "";
              position: absolute;
              bottom: -2px;
              left: 0;
              width: 0;
              height: 1px;
              background: #3b82f6;
              transition: width 0.3s ease;
            }
          }

          &:hover {
            color: #fff;
            transform: translateX(5px);

            i {
              transform: scale(1.2);
            }

            span::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.2);
  padding: 25px 0;
  margin-top: 60px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  .footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 0 20px;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
      gap: 20px;
    }
  }

  .footer-bottom-left {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .copyright {
      display: flex;
      align-items: center;
      gap: 8px;
      color: rgba(255, 255, 255, 0.9);
      font-size: 0.95rem;

      i {
        color: #3b82f6;
        font-size: 1rem;
      }
    }

    .rights {
      color: rgba(255, 255, 255, 0.6);
      font-size: 0.85rem;
    }
  }

  .footer-bottom-right {
    .designer-info {
      display: flex;
      align-items: center;
      gap: 25px;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
      }

      .designer-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(59, 130, 246, 0.1);
        padding: 10px 20px;
        border-radius: 25px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
        transition: all 0.3s ease;
        border: 1px solid rgba(59, 130, 246, 0.2);

        i {
          color: #3b82f6;

          &.fa-heart {
            color: #ef4444;
            margin: 0 4px;
            font-size: 0.9rem;
            animation: heartbeat 1.5s ease-in-out infinite;
          }
        }

        strong {
          color: #3b82f6;
          font-weight: 600;
          margin-left: 4px;
        }

        &:hover {
          background: rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);
        }
      }

      .phone-number {
        display: flex;
        align-items: center;
        gap: 10px;
        color: rgba(255, 255, 255, 0.9);
        text-decoration: none;
        transition: all 0.3s ease;
        padding: 10px 20px;
        border-radius: 25px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);

        i {
          color: #3b82f6;
          font-size: 1rem;
        }

        span {
          font-size: 0.95rem;
        }

        &:hover {
          color: #3b82f6;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}
@media (max-width: 1024px) {
  .footer-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .footer-content {
    grid-template-columns: auto;
  }
}

@media (max-width: 500px) {
  .footer-links {
  grid-template-columns: repeat(2, 1fr);
}
  .footer-brand p {

    font-size: 0.7rem;
  }
}
</style>
