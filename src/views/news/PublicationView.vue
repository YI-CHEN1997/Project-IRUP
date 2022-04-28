<template>
  <div class="container">
    <div class="title d-flex justify-content-center">
      <h1 class="text-uppercase">PUBLICATION</h1>
    </div>
    <div class="row justify-content-center mt-5">
      <template v-for="info in infos" :key="info">
        <ListCard :info="info"><hr :style="info == infos[infos.length-1] ? 'display: none ;' : '' "></ListCard>
      </template>
    </div>
  </div>
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
    .title{
      margin-top: 20vh;
    }
    .line{
      height: 1px;
      background-color: #000;
    }
</style>