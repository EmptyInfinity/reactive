<template>
  <ul id="header" :class="{ active: isFixed }">
    <li class="mr-4">
      main
      <span>main</span>
      <div></div>
    </li>
    <li class="mr-4">
      works
      <span>works</span>
      <div></div>
    </li>
    <li>
      <img src="../assets/logo.png" width="80px" />
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
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    isFixed: false,
    pageHeight: 0,
    scrollHeight: 0,
  }),
  mounted: function() {
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      window.addEventListener("scroll", () => {
        this.scrollHeight = (window.scrollY/(document.body.clientHeight-window.innerHeight)) * 100;
        this.isFixed = window.pageYOffset <= 0 ? false : true;
        this.$emit('scrolling', this.scrollHeight);
      });
    }
  },
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/global.scss";

ul {
  z-index: 2;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: auto;
  padding: 55px 10%;
  width: 100%;
  background: #fff;
  transition: all 0.4s ease;
  &.active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 15px 10%;
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
