import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");

let i = 0;
let txt = 'Reactive web studio.';
let speed = 70; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
let header = document.querySelector('#header');
document.addEventListener('scroll', function(){
  header.style.position = "fixed";
  header.style.padding = "15px 10%";
  header.style.boxShadow = "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)";
  if(window.pageYOffset <= 0){
    header.style.position = "static";
    header.style.boxShadow = "none";
    header.style.padding = "55px 10%";
  }
})

