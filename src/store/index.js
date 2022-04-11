import { createStore } from "vuex";
import { db } from "@/firebase/firebaseinit";
import { collection, getDocs } from "firebase/firestore";

export default createStore({
  state: {
    boardMembers:[]
  },
  getters: {},
  mutations: {},
  actions: {
    async getBoardMembers({state}) {
      const dataBase = await collection(db, 'executiveBoard')
      const dbResults = await getDocs(dataBase);
      dbResults.docs.forEach((doc)=>{
        state.boardMembers.push({...doc.data(),id: doc.id})
      })
      console.log(this.state.boardMembers)
    },
  },
  modules: {},
});
