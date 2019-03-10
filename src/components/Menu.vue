<template>
  <nav id="header" :class="{ active: isHeaderFixed }">
    <ul :class="{opened: isMenuOpen }">
      <li class="d-mr-4">
        main
        <span>main</span>
        <div></div>
      </li>
      <li class="d-mr-4">
        works
        <span>works</span>
        <div></div>
      </li>
      <li class="d-none d-lg-block">
        <!-- <img src="../assets/logo.svg" width="80px"> -->
        <div class="logo">R</div>
      </li>
      <li>
        about us
        <span>about us</span>
        <div></div>
      </li>
      <li>
        contacts
        <span>contacts</span>
        <div></div>
      </li>
    </ul>
    <div class="d-flex d-lg-none justify-content-between align-items-center w-100">
      <img src="../assets/logo.svg" width="80px">
      <button
        class="hamburger hamburger--spring"
        @click="handleMenu"
        :class="{active: isMenuOpen }"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    isHeaderFixed: false,
    scrollHeight: 0,
    isMenuOpen: false
  }),
  mounted: function() {
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      window.addEventListener("scroll", () => {
        this.scrollHeight =
          (window.scrollY / (document.body.clientHeight - window.innerHeight)) *
          100;
        this.isHeaderFixed = window.pageYOffset <= 0 ? false : true;
        this.$emit("scrolling", this.scrollHeight);
      });
    },
    handleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  },
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/global.scss";
.logo {
  position: static;
  font-size: 50px;
  border-radius: 0 50px 0 50px;  
  padding: 4px 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display: table;
  text-shadow: 4px 4px 2px #bf545c;
  &::before {
    position: absolute;
    left: -5%;
    top: -5%;
    content: "";
    width: 110%;
    height: 110%;
    transform: rotate(45deg);
    // border: 4px solid #fff;
  }
}
nav {
  z-index: 3;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  transition: all 0.4s ease;
  background: #fff;
  &.active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .hamburger {
    margin-top: 10px;
    .active {
      &.hamburger-inner:before {
        background: #f2f2f2;
      }
    }
  }
  ul {
    display: none;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: auto;
    width: 100%;
    &.opened {
      background: rgba(31, 31, 31, 0.98);
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      width: 100vw;
      height: 100vh;
      left: 0;
      top: 0;
      li {
        font-size: 40px;
        font-weight: 300;
        span {
          color: #f2f2f2;
        }
      }
    }
    li {
      font-family: "Montserrat", sans-serif;
      font-weight: 800;
      font-size: 17px;
      cursor: pointer;
      position: relative;
      color: #fff;
      span {
        position: absolute;
        color: #000;
        top: 0;
        z-index: 1;
      }
      div {
        position: absolute;
        width: 0%;
        height: 10px;
        left: -2px;
        bottom: 3px;
        @include gradient();
      }
      &:hover div {
        transition: all 0.3s;
        width: 90%;
      }
    }
  }
}

.first {
  font-family: "circke-bold";
}

.second {
  font-family: "header-font", sans-serif;
}

.third {
  font-family: "Montserrat", sans-serif;
}
</style>
