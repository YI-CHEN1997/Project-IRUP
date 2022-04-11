<template>
  <div class="start">
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
      infos: [
        {
          name: "Ambassador Eric M. Bost",
          phone: "979-458-3406",
          email: "eric.bost@ag.tamu.edu",
          img: "1_Ambassador Eric.M Bost.jpg",
          docs: "Deputy Director for Financial Operations & External Relations, Norman Borlaug Institute for International Agriculture Texas A&M University United States",
        },
        {
          name: "Tim D. Davis",
          phone: "979-847-5887",
          email: "t-davis5@tamu.edu",
          img: "2_Tim D. Davis.jpg",
          docs: "Regional Director, Asia Norman Borlaug Institute for International Agriculture Texas A&M University United States",
        },
        {
          name: "Le Quoc Tuan",
          phone: "+84-8-3372-0291",
          email: "quoctuan@hcmuaf.edu.vn",
          img: "3_Le Quoc Tuan.jpg",
          docs: "Dean, Faculty of Environment and Natural Resources Nong Lam University Vietnam",
        },
        { name: "", phone: "", email: "", img: "", docs: "" },
        { name: "", phone: "", email: "", img: "", docs: "" },
        { name: "", phone: "", email: "", img: "", docs: "" },
        { name: "", phone: "", email: "", img: "", docs: "" },
        { name: "", phone: "", email: "", img: "", docs: "" },
        { name: "", phone: "", email: "", img: "", docs: "" },
      ],
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
.main {
}
.bg {
  position: absolute;
  z-index: -999;
  top: 500px;
}
</style>