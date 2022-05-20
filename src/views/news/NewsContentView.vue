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
      <div class="case">
      <div class="edit-icons d-flex flex-column">
        <span
        class="d-flex justify-content-center align-items-center edit-icon"
        data-bs-toggle="modal"
        data-bs-target="#EditCaseModal">
          <i class="fas fa-pen-nib"></i>
        </span>
        
        <span
        class="d-flex justify-content-center align-items-center delete-icon"
        data-bs-toggle="modal"
        data-bs-target="#EditCaseModal">
          <i class="fas fa-trash"></i>
        </span>
      </div>
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

.case {
  padding: 0 10vw 5vh 10vw;
  text-align: center;

  .edit-icons {
    position: fixed;
    z-index: 2;
    right: 4vw;
    bottom: 4vh;
  }

  .edit-icon {
    height: 55px;
    width: 55px;
    color: #fff;
    background-color: #66bb6a;
    opacity: .8;
    border-radius: 50%;
    margin: 0.2rem 0;
    cursor: pointer;

    &:hover {
      background-color: #396e3c;
      scale: 1.2;
      transition: .2s;
    }

    svg {
      height: 20px;
    }

    @media (max-width: 850px) {
      height: 40px;
      width: 40px;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .delete-icon {
    height: 55px;
    width: 55px;
    color: #fff;
    background-color: #66bb6a;
    opacity: .9;
    border-radius: 50%;
    margin: 0.2rem 0;
    cursor: pointer;

    &:hover {
      background-color: #396e3c;
      scale: 1.2;
      transition: .2s;
    }

    svg {
      height: 25px;
    }

    @media (max-width: 850px) {
      height: 40px;
      width: 40px;

      svg {
        height: 20px;
        width: 20px;
      }
    }
  }

  .date {
    color: #999;
    margin-bottom: 1rem;
  }

  img {
    width: 40%;
  }

  .content {
    margin: 0 6rem;
    text-align: justify;

    h5 {
      margin: 5rem;
    }

    h6 {
      text-align: justify;
      margin-right: 3rem;
    }

    img {
      width: 70%;
      margin: 2rem 0 1rem 0;
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
      }

      li {
          text-align: left;
        }

      img {
        margin-top: 2rem;
        width: 60%;
      }
    }

    .edit-icon, .delete-icon {
      right: 1rem;
    }
  }
}
</style>