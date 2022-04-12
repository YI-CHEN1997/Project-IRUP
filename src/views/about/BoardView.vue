<template>
  <div class="">
    <div class="container">
      <div class="d-flex justify-content-between">
        <div class="title col-5 px-5 py-4 mx-4">
          <h2 class="">Executive Board</h2>
        </div>
        <div class="">
          <button>add</button>
        </div>
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

export default {
  setup() {},
  components: {
    BusinessCard,
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
.bg {
  position: absolute;
  z-index: -98;
  bottom: 40vh;
}
</style>