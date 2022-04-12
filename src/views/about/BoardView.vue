<template>
  <div class="">
    <NewMemberModal />
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="title col-5 px-5 py-4 mx-4">
          <h2 class="">Executive Board</h2>
        </div>
        <span class="btn add-btn d-flex align-items-center"
          ><i class="fa-solid fa-circle-plus me-2"></i>ADD MEMBER</span
        >
      </div>
      <div class="main row justify-content-center">
        <BusinessCard
          :member="member"
          v-for="member in boardMembers"
          :key="member"
        ></BusinessCard>
      </div>
    </div>
    <div class="bg">
      <img src="山丘.svg" alt="" />
    </div>
  </div>
</template>
<script>
import BusinessCard from "@/components/BusinessCard .vue";
import NewMemberModal from "@/components/NewMemberModal.vue";

export default {
  setup() {},
  components: {
    BusinessCard,
    NewMemberModal,
  },
  data() {
    return {
    };
  },
  computed: {
    boardMembers() {
      return this.$store.state.boardMembers;
    },
  },
};
</script>

<style scoped>
.add-btn {
  color: #fff;
  background-color: #66bb6a;
  padding: 10px;
  border-radius: 50px;
}
.add-btn:hover {
  background-color: #396e3c;
}
.add-btn svg {
  height: 20px;
  width: 20px;
}
.bg {
  position: absolute;
  z-index: -98;
  bottom: 40vh;
}
</style>