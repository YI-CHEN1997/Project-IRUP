<template>
  <main>
    <LoadingComponent v-show="loading" />
    <div class="summary">
      <h1 class="title text-uppercase">
        {{currentNews.Title}}
      </h1>
      <h6 class="comment">{{currentNews.TimeStamp}}</h6>

      <div class="content" v-html="currentNews.Content">

      </div>
    </div>
  </main>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { db } from "@/firebase/firebaseinit";
import { doc, getDoc } from "firebase/firestore";

export default {
  created() {
    this.getCurrentNews()
  },
  data() {
    return {
      currentNews: {},
    };
  },
  methods: {
    getCurrentNews() {
      const docRef = doc(db, "News", this.$route.params.newsId);
      getDoc(docRef).then((doc) => {
        this.currentNews = doc.data();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/vue3-editor.scss";

.summary {
  padding: 0 10vw 5vh 10vw;
  text-align: center;

  .comment {
    color: #999;
    margin-bottom: 1rem;
  }

  .content {
    margin: 5rem 6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    h6 {
      text-align: justify;
      margin-right: 3rem;
    }

    img {
      width: 130%;
    }
  }

  @media (max-width: 850px) {
    padding: 0 0 1vh 0;

    .content {
      display: block;

      h3 {
        margin-bottom: 1rem;
      }

      h6 {
        margin-right: 0;
        text-align: left;

        li {
          text-align: left;
        }
      }

      img {
        margin-top: 2rem;
        width: 60%;
      }
    }
  }
}
</style>