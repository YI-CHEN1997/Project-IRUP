<template>
<main>
  <div class="container">
    <div class="d-flex justify-content-center">
      <h1 class="title uppercase">PUBLICATION</h1>
    </div>
    <div class="row justify-content-center mt-5">
      <template v-for="info in infos" :key="info">
        <ListCard :info="info"><hr :style="info == infos[infos.length-1] ? 'display: none ;' : '' "></ListCard>
      </template>
    </div>
  </div>
</main>  
</template>
<script>
import ListCard from "@/components/ListCard.vue";


export default {
  setup() {},
  components: {
    ListCard,
   
  },
  data(){
    return{
      infos:[{"date":"2017"},{"date":"2018"},{"date":"2019"},{"date":"2020"}],
    };
  },
};
</script>

<style scoped>
.container {
  position: relative;
    z-index: 1;
}
    @media screen and (max-width:1199px) {
      .container{
        max-width: 90%;
      }
    }
    @media screen and (max-width:575px) {
      .container{
        max-width: 90%;
      }
    }
    .line{
      height: 1px;
      background-color: #000;
    }
</style>