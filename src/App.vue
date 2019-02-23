<template>
  <div id="app">
    <section>
      <Menu msg="Reactive" />
      <div class="rocks">
        <h1 id="heading"><span id="demo"></span></h1>
      </div>
    </section>
    <section>
      <h2><span>Development</span></h2>
    </section>
  </div>
</template>

<script>
import Menu from "./components/Menu.vue";

export default {
  name: "app",
  components: {
    Menu
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
section{
  min-height: 100vh;
  margin-bottom: 20vh;
}
h1{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-align:center;
  padding: 70px 0 0 0;
  font-size: 65px;
  span{
    background: #37e9ca;
    padding: 0 0 0 8px;
    box-shadow: inset -40px 0px #fff, inset 0 25px #fff;
  }
}
.rocks{
  background: url('./assets/Roks.png') no-repeat top;
  background-size: cover;
  width: 100%;
  min-height: 140vh;
}
h2{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-align:center;
  font-size: 55px;
  span{
    padding: 10px 20px;
    background: #37e9ca;
    text-shadow: 3px 3px 4px #186a5b;
    box-shadow: 8px 8px 2px #186a5b;
  }
}
img{
  transform: scale(0.8);
  // animation: blur 1s linear infinite;
}
@keyframes blur{
  from{
    transform: scale(2);
  }
  to{
    transform: scale(1);
  }
}
</style>