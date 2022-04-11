<template>
<NavbarComponent/>

  <router-view/>

 <FooterComponent/> 
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: { NavbarComponent, FooterComponent },
  created(){
    this.$store.dispatch("getBoardMembers")
  }
}
</script>

<style>
  #app {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    position: relative;
  }

  .text-uppercase {
    text-transform: uppercase;
  }

  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.7rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.2rem;
    font-weight: 700;
  }
  h6 {
    font-size: 1rem;
    font-weight: 400;
  }


</style>
