<template>
  <div class="cards p-4 m-4"> 
    <div class="d-flex flex-column justify-content-end edit-icons">      
      <span class="d-flex justify-content-center edit-icon">
      <i class="fas fa-pen-nib"></i>
      </span>
      <span class="d-flex justify-content-center delete-icon" @click="deleteMember(member.id)"
        ><i class="fas fa-trash"></i>
      </span>
    </div>
    <div class="d-flex">    
      <img :src="member.profilePhoto" />
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
      <h6 class="text-break my-3" v-html="member.profileContent"></h6>
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

<style scoped lang="scss">

.cards {
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #fff;
  position: relative;
}
// .cards:last-child:nth-last-child(2n-1){
//   margin: auto !important;
// }


.contact p {
  margin-bottom: 1rem;
  white-space: nowrap;
}

.icon {
  color: #66bb6a;
  margin: 0 1rem 0 0;
}
img {
  width: 30%;
  height: 30%;
  border-radius: 50%;
}
.edit-icons {
  position: absolute;
  right: 3%;
  top: 3%;
}

.edit-icon {
  height: 35px;
  width: 35px;
  color: #fff;
  background-color: #66bb6a;
  border-radius: 50%;
  margin: .2rem 0;
  cursor: pointer;

  &:hover {
    background-color: #396e3c;
  }

  svg {
    height: 1rem;
    margin: 8px;
  }
}

.delete-icon {
  height: 35px;
  width: 35px;
  color: #fff;
  background-color: #66bb6a;
  border-radius: 50%;
  cursor: pointer;
  margin: .2rem 0;

  &:hover {
    background-color: #396e3c;
  }

  svg {
    height: 1rem;
    margin: 8px;
  }
}


p{
  margin-bottom: 0 !important;
}
</style>