<template>
<div id="app">

  <NavbarComponent/>
  
  <body>
    <router-view/>
  </body>
    
  <FooterComponent/>
</div>

</template>

<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { auth } from "@/firebase/firebaseinit";
import { onAuthStateChanged } from "firebase/auth";

export default {
  components: { NavbarComponent, FooterComponent },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getBoardMembers");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.commit("userStateChange", user);
      }
    });
  },
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  #app {
    font-family: 'Montserrat', sans-serif;
    letter-spacing: .5px;

    main {
    padding-top: 200px;
    background: #f9f9fa;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: .5px;
  }

  .box-shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  }

  .title {
    margin-bottom: 5vh;

    @media (max-width: 850px) {
        margin-bottom: 2vh;
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
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
    font-weight: 500;
  }
  h6 {
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    font-size: .8rem;
  }
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
.view {
  min-height: 100vh;
}
</style>
