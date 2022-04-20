import { createStore } from "vuex";
import { db } from "@/firebase/firebaseinit";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default createStore({
  state: {
    boardMembers: [],
    profilePhotoName: "",
    profilePhotoURL: "https://fakeimg.pl/200x200/?text=ProfilePicture",
    profileName: "",
    profilePhone: "",
    profileEmail: "",
    profileContent: "",
  },

  getters: {},
  mutations: {
    fileNameChange(state, payload) {
      state.profilePhotoName = payload;
    },
    updateprofilePhotoURL(state, payload) {
      state.profilePhotoURL = payload;
    },
    updateProfileName(state, payload) {
      state.profileName = payload;
    },
    updateprofilePhone(state, payload) {
      state.profilePhone = payload;
    },
    updateprofileEmail(state, payload) {
      state.profileEmail = payload;
    },
    updateprofileContent(state, payload) {
      state.profileContent = payload;
    },
  },
  actions: {
    async getBoardMembers({ state }) {
      const dataBase = await collection(db, "executiveBoard");
      const dbResults = await getDocs(query(dataBase, orderBy("profileName")));
      dbResults.docs.forEach((doc) => {
        state.boardMembers.push({ ...doc.data(), id: doc.id });
      });
      console.log(this.state.boardMembers);
    },
  },
  modules: {},
});
