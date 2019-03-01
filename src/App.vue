<template>
  <div id="app">
    <div class="scroll-bar"><div :style="{'height': `${progress}%`}"></div></div>
    <Menu @scrolling="handleScroling" msg="Reactive"/>
    <section>
      <div class="rocks">
        <h1 id="heading">
          <span id="demo"></span>
        </h1>
      </div>
    </section>
    <section>
      <h2>
        Design
        <span>Create for you</span>
      </h2>
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
    progress: 0
  }),
  methods: {
    handleScroling (value) {
      this.progress = value;
      console.log(this.progress);
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
}
#app {
  counter-reset: num;
}
::-webkit-scrollbar { 
  display: none;
}
.scroll-bar{
  position: fixed;
  right: 0;
  height: 100%;
  width: 10px;
  background: #ffffff;
  z-index: 3;
  div{
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
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 55px;
  font-style: italic;
  margin-left: 55px;
  top: 18vh;
  color: #000;
  display: inline-block;
  margin-bottom: 80px;
  
  span {
    padding: 0 0 0 8px;
    position: absolute;
    color: gray;
    font-weight: 300;
    font-style: normal;
    font-size: 40px;
    top: 90%;
    left: 50px;
    white-space: nowrap;
  }
  &::before {
    counter-increment: num;
    content: "0"counter(num);
    position: absolute;
    top: -30px;
    left: -45px;
    font-size: 40px;
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

</style>
