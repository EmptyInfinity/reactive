<template>
  <div id="app" :class="{nightMode: isNight}">
    <div class="scroll-bar">
      <div :style="{'height': `${progress}%`}"></div>
    </div>
    <Menu @scrolling="handleScroling" msg="Reactive"/>
    <section>
      <div class="rocks">
        <h1 id="heading">
          <span id="demo"></span>
        </h1>
      </div>
    </section>
    <section class="second">
      <h2>
        Design
        <span>Create for you</span>
      </h2>
      <div class="page-mode" :class="{reverse: isNight}">
        <button @click="handleMode"></button>
        <button @click="handleMode"></button>
      </div>
      <div class="devices">
        <div class="tablet">
          <img src="./assets/ipad.png" alt>
        </div>
        <div class="phone">
          <img src="./assets/iphone.png" alt>
        </div>
        <div class="laptop">
          <img src="./assets/laptop-half.png" alt>
        </div>
      </div>
    </section>
    <section>
      <h2>
        Development
        <span>Build for you</span>
      </h2>
    </section>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";
import "./assets/css/font.scss";

export default {
  name: "app",
  data: () => ({
    progress: 0,
    isNight: false
  }),
  methods: {
    handleScroling(value) {
      this.progress = value;
    },
    handleMode() {
      this.isNight = !this.isNight;
    }
  },
  components: {
    Menu
  }
};
</script>

<style lang="scss">
@import "./assets/css/global.scss";

* {
  margin: 0;
  padding: 0;
  user-select: none;
  -webkit-appearance: none !important;
}
button:focus {
  outline: 0;
}
#app {
  counter-reset: num;
  &.nightMode {
    background: rgba(31, 31, 31, 0.99);
  }
}
::-webkit-scrollbar {
  display: none;
}
.scroll-bar {
  position: fixed;
  right: 0;
  height: 100%;
  width: 10px;
  z-index: 4;
  div {
    background: linear-gradient(#f8870ed4, #e75b66e8);
  }
}
section {
  min-height: 100vh;
}
h1 {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  text-align: center;
  padding: 70px 0 0 0;
  font-size: 65px;
  line-height: 80px;
  span {
    @include gradient();
    padding: 0 0 0 8px;
    box-shadow: inset -40px 0px #fff, inset 0 25px #fff;
  }
}
.rocks {
  background: url("./assets/Roks.png") no-repeat top;
  background-size: cover;
  width: 100%;
  min-height: 140vh;
}

h2 {
  position: sticky;
  z-index: 2;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  // font-size: 55px;
  font-size: 10vw;
  font-style: italic;
  // margin-left: 55px;
  margin-left: 1.3em;
  top: 22vh;
  color: #000;
  display: inline-block;
  margin-bottom: 80px;

  span {
    padding: 0 0 0 8px;
    position: absolute;
    color: gray;
    font-weight: 300;
    font-style: normal;
    // font-size: 40px;
    font-size: 0.75em;
    top: 90%;
    left: 50px;
    white-space: nowrap;
  }
  &::before {
    counter-increment: num;
    content: "0" counter(num);
    position: absolute;
    // top: -30px;
    // left: -45px;
    // font-size: 40px;
    font-size: 0.75em;
    top: -0.6em;
    left: -1.3em;

    font-style: normal;
    font-weight: 500;
  }
  &:after {
    content: " ";
    top: 30%;
    left: -1.2%;
    z-index: -1;
    position: absolute;
    @include gradient();
    width: 99%;
    height: 70%;
    display: inline-block;
  }
}
.page-mode {
  transform: scale(0.7);
  margin: 0;
  background: rgba(31, 31, 31, 0.96);
  display: flex;
  justify-content: space-between;
  width: 190px;
  height: 120px;
  padding: 10px;
  border-radius: 100px;
  box-shadow: -2px 2px 10px 0px rgba(31, 31, 31, 0.96),
    2px -2px 10px 0px rgba(31, 31, 31, 0.96);
  position: relative;
  &.reverse {
    button {
      &:first-child {
        right: 80px;
        opacity: 0.5;
        transform: scale(0.8);
      }
      &:last-child {
        left: 80px;
        opacity: 1;
        transform: scale(1);
        z-index: 1;
      }
    }
  }
  button {
    border: none;
    cursor: pointer;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    box-shadow: -1px 1px 15px 5px rgba(31, 31, 31, 0.96);
    transition: all 0.4s ease;
    position: absolute;
    &:first-child {
      background: url("./assets/sun.png") no-repeat center;
      background-size: contain;
      right: 10px;
      z-index: 1;
    }
    &:last-child {
      background: url("./assets/moon2.png") no-repeat center;
      background-size: contain;
      box-shadow: -1px 1px 15px 5px rgba(31, 31, 31, 0.96),
        inset 2px 0px 0px 0px rgb(40, 80, 92);
      left: 10px;
      opacity: 0.5;
      transform: scale(0.8);
    }
  }
}
section.second {
  position: relative;
  .devices {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 140px;
    display: flex;
    justify-content: space-between;
    // padding: 0 10px;
    img {
      width: 100%;
    }
    .laptop {
      width: 40%;
    }
    .phone {
      width: 19%;
      margin-top: 100px;
    }
    .tablet {
      width: 30%;
      margin-top: 165px;
    }
  }
}
</style>
