<template>
  <div class="cards col-md-5 col-sm-8 px-5 py-4 m-4"> 
    <div class="d-flex justify-content-end edit-icons">
      <!-- <span class="edit-icon me-3"><i class="fa-solid fa-pen fa-lg"></i></span> -->
      <span class="edit-icon" @click="deleteMember(member.id)"
        ><i class="fa-solid fa-trash-can fa-lg"></i
      ></span>
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
          <p>
            <span class="icon"><i class="fa-solid fa-phone fa-lg"></i></span
            >{{ member.contactPhone }}
          </p>
          <p>
            <span class="icon"><i class="fa-solid fa-envelope fa-lg"></i></span
            >{{ member.contactEmail }}
          </p>
        </div>
      </div>
    </div>
    <div class="">
      <p class="text-break my-3" v-html="member.profileContent"></p>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase/firebaseinit";
import { deleteDoc, doc } from "firebase/firestore";
export default {
  name: "BusinessCard",
  props: ["member"],
  methods: {
    deleteMember(id) {
      console.log(id);
      const docRef = doc(db, "executiveBoard", id);
      deleteDoc(docRef)
        .then(()=>{
          this.$router.go()
        })
    },
  },
};
</script>

<style scoped>
.cards {
  box-shadow: 0 0 30px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
}
.cards:last-child:nth-last-child(2n-1){
  margin-right: calc(41.66666667% + 4.5rem) !important;
}
.contact p {
  margin-bottom: 0px;
  white-space: nowrap;
}
.icon {
  color: #66bb6a;
  margin-right: 10px;
}
img {
  border-radius: 99em;
  max-width: 12vw;
}
.edit-icons {
  position: absolute;
  right: 5%;
}

.edit-icon {
  height: 35px;
  width: 35px;
  color: #fff;
  background-color: #66bb6a;
  border-radius: 50%;
  cursor: pointer;
}

.edit-icon:hover {
  background-color: #396e3c;
}

.edit-icon svg {
  height: 20px;
  width: 20px;
  margin: 8px;
}
</style>