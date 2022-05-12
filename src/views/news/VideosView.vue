<template>

<main>
  <LoadingComponent v-show="loading" />
  <div class="container">
    <div class="modal fade" tabindex="-1" id="NewCaseModal">
        <div
          class="
            modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
          "
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Video</h5>
              <button
                type="button"
                class="btn-close"
                id="close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="inputs">
                  <!-- case title -->
                  <div class="caseTitle form-floating mx-3 mt-3">
                    <input
                      class="type-in-box form-control"
                      type="text"
                      placeholder="Case Title"
                      v-model="caseTitle"
                    />
                    <label for="floatingInput">Title</label>
                  </div>
                  <!-- subtitle -->
                  <div class="subtitle form-floating mx-3 mt-3">
                    <input
                      class="type-in-box form-control"
                      type="text"
                      placeholder="Subtitle"
                      v-model="subtitle"
                    />
                    <label for="floatingInput subtitle">Subtitle</label>
                  </div>
                  <div
                    class="
                      videoUpLoad
                      mx-3
                      mt-3
                      p-3
                      d-flex
                      align-items-center
                    "
                  >
                    <label for="caseCoverPhoto" class="p-5 px-0"
                      ><span v-if="!coverPhotoURL">
                        <i class="fa-solid fa-video"></i>Upload Video
                      </span>
                      <img :src="coverPhotoURL" alt="" v-if="coverPhotoURL" />
                      <input
                        type="file"
                        ref="caseCoverPhoto"
                        id="caseCoverPhoto"
                        @change="fileChange"
                        accept=".png, .jpg, ,.jpeg"
                      />
                    </label>
                  </div>

                  <div class="caseContent mx-3 mt-3">
                    <vue-editor
                      v-model="caseContent"
                      :editorOptions="editorSettings"
                      useCustomImageHandler
                      @image-added="imageHandler"
                    ></vue-editor>
                  </div>
                </div>
                <div
                  class="errorMsg d-flex justify-content-center mt-3 mx-3"
                  v-if="error"
                >
                  {{ errMsg }}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" @click="uploadCaseStudy">
                SAVE
                <span
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                  v-if="loading"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="title position-relative">
        <h1 class="uppercase text-center d-flex justify-content-center">
          videos
        </h1>

        <!-- add content plus-icon-button -->
          <div 
          class="plus-btn">
            <span
              class="d-flex justify-content-center add-btn align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#NewCaseModal"
            >
              <i class="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
    <!-- <h1 class="title uppercase">videos</h1> -->
    

    <div class="content">
      
      <div class="card box-shadow">
        <!-- <a target="_blank" href="https://www.youtube.com/watch?v=3F2DDJgNxpk"> -->
        <YouTube 
        src="https://www.youtube.com/watch?v=3F2DDJgNxpk" 
        width="100%"
        height="260px"
        @ready="onReady"
        ref="youtube" 
        class="youtube"/>
        <!-- <iframe  class="card-img-top" src="https://www.youtube-nocookie.com/embed/3F2DDJgNxpk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          <div class="card-body">
            <h5 class="card-title ">2019 Rural UP Program at Liyu community</h5>
            <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：國際洄游駐村共學計畫</h6>
          </div>
        <!-- </a>         -->
      </div>

      <div class="card box-shadow">
        <YouTube 
        src="https://www.youtube.com/watch?v=GZDHQSjEcAo" 
        width="100%"
        height="260px"
        @ready="onReady"
        ref="youtube" 
        class="youtube"/>
        <!-- <a target="_blank" href="https://www.youtube.com/watch?v=GZDHQSjEcAo">
          <iframe class="card-img-top" src="https://www.youtube-nocookie.com/embed/GZDHQSjEcAo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            <div class="card-body">
              <h5 class="card-title">「鱉」不住就慘了</h5>
              <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：苗栗縣三義鄉鯉魚社區</h6>
            </div>
        <!-- </a>        -->
      </div>

      <div class="card box-shadow">
        <YouTube 
        src="https://www.youtube.com/watch?v=NMI7qeVAK68" 
        width="100%"
        height="260px"
        @ready="onReady"
        ref="youtube" 
        class="youtube"/>
        <!-- <a target="_blank" href="https://www.youtube.com/watch?v=NMI7qeVAK68">
          <iframe class="card-img-top" src="https://www.youtube.com/embed/NMI7qeVAK68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          <div class="card-body">
            <h5 class="card-title">Satoyama landscape at Liyu community</h5>
            <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：苗栗縣三義鄉鯉魚社區</h6>
          </div>
        <!-- </a>         -->
      </div>

      <div class="card box-shadow">
        <YouTube 
        src="https://www.youtube.com/watch?v=ySTtauAddoI" 
        width="100%"
        height="260px"
        @ready="onReady"
        ref="youtube" />
        <!-- <a target="_blank" href="https://www.youtube.com/watch?v=ySTtauAddoI">
          <iframe class="card-img-top" src="https://www.youtube-nocookie.com/embed/ySTtauAddoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
          <div class="card-body">
            <h5 class="card-title">Satoyama landscape at Gonglaoping community</h5>
            <h6 class="card-text">Duration: 14.03 -- 31/07/2019<br>關於：台中市豐原區公老坪社區</h6>
          </div>
        <!-- </a>         -->
      </div>
      
    </div>

  </div>

</main>
   
</template>

<script>
import YouTube from "vue3-youtube";

export default {
  components: {
    YouTube,
  },
}
</script>

<style lang="scss" scoped>

main {

  h1 {
    text-align: center;
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    position: relative;
    z-index: 1;
  }

  .card {
    width: 450px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    background-color: white;    
    border: 0px solid #fff;
    transition: .3s ease-in-out;
    text-decoration: none;
    color: #333;

      &:hover {
        color: #eee;
      }
    

    &:hover {
      background-color: #333; 
    }

    .card-body {
      height: 150px;
    }
  }

// plus icon
  .title {
  .plus-btn {
    position: fixed;
    right: 4vw;
    bottom: 40px;
    z-index: 2;
    opacity: .8;

    .add-btn {
      height: 55px;
      width: 55px;
      color: #fff;
      background-color: #66bb6a;
      border-radius: 50%;

      &:hover {
        background-color: #396e3c;
        scale: 1.2;
        transition: .2s;
      }

      svg {
        height: 30px;
        width: 30px;
      }
    }
  }
}

// modal setting
.modal-footer {
  .btn {
    width: 100%;
    background: #66bb6a;
    border: none;
    color: #fff;

    &:hover {
      background: #396e3c;
    }
  }
}

.videoUpLoad {
  border: 1px solid rgb(195, 202, 210);
  border-radius: 3px;
  overflow: hidden;

  svg {
    width: 20px;
    margin-right: 1rem;
    color: #66bb6a;
  }

  label {
    width: 100%;
    height: 100%;
    color: #333;
    cursor: pointer;

    input {
      display: none;
    }
  }
}
}

  </style>