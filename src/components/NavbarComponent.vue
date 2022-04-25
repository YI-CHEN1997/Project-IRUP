<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="uppercase">
      <div class="logo">
        <router-link :to="{ name: 'home' }">irup</router-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li class="listitem">
          <router-link :to="{ name: 'about' }"
            >about<i class="fas fa-caret-down"></i
          ></router-link>
          <ul class="dropdown about-dropdown">
            <li>
              <router-link :to="{ name: 'operationalstructure' }"
                >operational structure</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'executiveboard' }"
                >executive board</router-link
              >
            </li>
          </ul>
        </li>
        <li class="listitem">
          <router-link :to="{ name: 'news' }"
            >news<i class="fas fa-caret-down"></i
          ></router-link>
          <ul class="dropdown news-dropdown">
            <li><router-link :to="{ name: 'videos' }">videos</router-link></li>
            <li>
              <router-link :to="{ name: 'publication' }"
                >publication</router-link
              >
            </li>
          </ul>
        </li>
        <li class="listitem">
          <router-link :to="{ name: 'casestudies' }">case studies</router-link>
        </li>
        <li class="authority">
          <router-link to=""><i class="fas fa-user-lock"></i></router-link>
        </li>
      </ul>

      <div
        class="burger"
        @click="toggleMobileNav"
        v-show="mobile"
        :class="{ 'icon-active': mobileNav }"
      >
        <i class="fa-solid fa-bars"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="slide-nav">
          <div class="logo">
            <router-link :to="{ name: 'home' }">irup</router-link>
          </div>
          <li class="listitem">
            <router-link :to="{ name: 'about' }">about</router-link
            ><i class="fas fa-caret-down"></i>
            <span>
              <ul class="mobile-dropdown">
                <li>
                  <router-link :to="{ name: 'operationalstructure' }"
                    >operational structure</router-link
                  >
                </li>
                <li>
                  <router-link :to="{ name: 'executiveboard' }"
                    >executive board</router-link
                  >
                </li>
              </ul>
            </span>
          </li>
          <li class="listitem">
            <router-link :to="{ name: 'news' }">news</router-link
            ><i class="fas fa-caret-down"></i>
            <span>
              <ul class="mobile-dropdown">
                <li>
                  <router-link :to="{ name: 'videos' }">videos</router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'publication' }"
                    >publication</router-link
                  >
                </li>
              </ul>
            </span>
          </li>
          <li class="listitem">
            <router-link :to="{ name: 'casestudies' }"
              >case studies</router-link
            >
          </li>
          <li class="authority"><i class="fas fa-user-lock"></i></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },

  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },

  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },

  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 99;
  color: #333;
  transition: 0.5s ease all;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
  }

  li {
    list-style: none;
  }

  .logo {
    margin-right: auto;
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: 0.12em;

    a {
      text-decoration: none;
      color: #66bb6a;
    }
  }

  .navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin: 0 1rem;

    .listitem {
      font-weight: 500;
      font-size: 1rem;
      color: #333;
      position: relative;
      padding: 1rem 0.5rem;

      a {
        text-decoration: none;
        color: #333;
      }

      .fa-caret-down {
        color: #66bb6a;
        margin-left: 5px;
      }

      &:hover ul {
        opacity: 1;
        visibility: visible;
      }

      .about-dropdown {
        width: 16rem;
      }

      .news-dropdown {
        width: 10rem;
      }

      .dropdown {
        position: absolute;
        top: 3.2rem;
        right: -1rem;
        border: 1px solid #66bb6a;
        text-align: end;
        font-size: 0.9rem;
        background: white;
        border-radius: 5px;
        padding: 0.5rem;
        gap: 0.2rem;
        opacity: 0;
        visibility: hidden;
        transition: opacity 200ms ease-in-out;

        li {
          padding: 0.5rem 1rem;
          transition: background-color 0.2s ease-in-out;

          a {
            border-bottom: 2px solid transparent;
          }

          &:hover a {
            border-bottom: 2px solid #66bb6a;
          }
        }
      }
    }

    .authority a {
      color: #66bb6a;
      margin-left: 3rem;
    }
  }

  .burger {
    display: flex;
    position: absolute;
    top: 0;
    right: 1rem;
    height: 100%;
    align-items: center;
    color: #333;
    cursor: pointer;
    transition: 0.8s ease all;

    .icon-active {
      transform: rotate(45deg);
    }
  }

  .slide-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 300px;
    height: 100%;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    padding-right: 2rem;

    .logo {
      margin: 2rem 5px;
    }

    li {
      margin-left: 0;
    }

    .authority {
      color: #66bb6a;
      margin-top: 2rem;
      margin-left: 5px;
    }

    .listitem {
      font-weight: 500;
      font-size: 1rem;
      position: relative;
      padding: 1rem 0.5rem;

      a {
        text-decoration: none;
        color: #333;
      }

      .fa-caret-down {
        color: #66bb6a;
        margin-left: 5px;
      }

      span {
        display: none;
        margin-top: 0.5rem;
      }

      &:hover span {
        display: block;
      }

      .mobile-dropdown {
        background: #66bb6a;
        border-radius: 5px;
        font-size: 0.9rem;
        gap: 0.2rem;
        padding: 0.5rem 0.5rem;

        li {
          padding: 0.5rem 0;

          a {
            color: #eee;
            border-bottom: 2px solid transparent;
          }

          &:hover a {
            border-bottom: 2px solid #eee;
          }
        }
      }
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-300px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }
}

.scrolled-nav {
  nav {
    padding: 8px 0;
  }
}
</style>