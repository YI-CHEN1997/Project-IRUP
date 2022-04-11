<template>
  <div class="cards col-md-5 col-sm-6 px-5 py-4 m-4">
    <div class="d-flex justify-content-end">
      <router-link to="" class="mx-4"><i class="fa-solid fa-pen fa-lg"></i></router-link>
      <router-link to=""><i class="fa-solid fa-trash-can fa-lg"></i></router-link>
    </div>
    <div class="d-flex">
      <div>
        <img :src="member.profilePhoto" />
      </div>
      <div class="d-flex flex-column justify-content-center m-4">
        <div class="mb-3">
          <h5>{{ member.profileName }}</h5>
        </div>
        <div class="contact">
          <p><span class="icon"><i class="fa-solid fa-phone fa-lg"></i></span>{{info.phone}}</p>
          <p><span class="icon"><i class="fa-solid fa-envelope fa-lg"></i></span>{{info.email}}</p>
        </div>
      </div>
    </div>
    <div class="">
      <p class="text-break my-3" v-html="member.profileContent">
        
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BusinessCard",
  props: ["member"],
};
</script>

<style scoped>
    a{
        color: #66BB6A;
    }
    .cards:last-child:nth-last-child(2n-1){
        margin-right: calc(41.66666667vw + 1.5rem)!important;
    }
    .cards{
        box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
        background-color: #fff;
    }
    .contact p{
        margin-bottom: 0px;
    }
    .icon{
        color: #66BB6A;
        margin-right: 10px;
    }
    img{
        border-radius: 99em;
        max-height: 12vw;
    }
</style>