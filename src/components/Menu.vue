<template> 
  <nav>
    <ul id="header">
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
        <img src="https://www.pngrepo.com/download/171582/vagina.png" width="80px">
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
  </nav>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String
  }
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Roboto:400,500,700|Ubuntu:400,500,700');
@font-face {
  font-family: circke-bold;
  src: url(Circe-ExtraBold.ttf); 
}
@font-face {
  font-family: header-font;
  src: url(header.woff); 
}

nav {
  min-height: 20vh;
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: auto;
    padding: 55px 10%;
    width: 100%;
    background: #fff;
    transition: all 0.4s ease;    
    li {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 17px;
      cursor: pointer;
      position: relative;
      color: #fff;
      span{
        position: absolute;
        color: #000;
        top: 0;
        z-index: 1;
      }
      div{
        position: absolute;
        width: 0%;
        height: 10px;
        left: -2px;
        bottom: 3px;
        background: #37e9ca;
      }
      &:hover div{
        transition: all .3s;
        width: 90%;
      }
    }
  }
}

.first {
  font-family: 'circke-bold';
} 

.second {
  font-family: 'header-font', sans-serif;
}

.third {
  font-family: 'Montserrat', sans-serif;
}

</style>
