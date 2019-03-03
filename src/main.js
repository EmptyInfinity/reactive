import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./assets/css/font.scss";
import "./assets/css/humburger.css";
import "./assets/css/desktop.scss";
import "./assets/css/mobile-media.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

let i = 0;
let txt = "Reactive web studio.";
let speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
