<template>
  <main>
    <LoadingComponent v-show="loading" style="z-index:99;" />
    <div class="container">
      <div
        class="modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        id="photoPreview"
      >
        <div
          class="
            modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
          "
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ coverPhotoName }}</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-target="#NewCaseModal"
                data-bs-toggle="modal"
              ></button>
            </div>
            <div class="modal-body d-flex justify-content-center">
              <img :src="coverPhotoURL" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" tabindex="-1" id="NewCaseModal">
        <div
          class="
            modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
          "
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add New Case Study</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="inputs">
                  <div class="caseTitle">
                    <label for="caseTitle">Case Title</label>
                    <br />
                    <input type="text" v-model="caseTitle" />
                    <br />
                    <label for="subtitle">Subtitle</label>
                    <br />
                    <input type="text" v-model="subtitle" />
                  </div>
                  <div class="caseCoverPhoto">
                    <label for="caseCoverPhoto">Case Cover Photo</label>
                    <br />
                    <input
                      type="file"
                      ref="profilePhoto"
                      id="profile-photo"
                      @change="fileChange"
                      accept=".png, .jpg, ,.jpeg"
                    />
                    <br />
                    <button
                      v-if="coverPhotoURL"
                      data-bs-toggle="modal"
                      data-bs-target="#photoPreview"
                    >
                      Preview Cover Photo
                    </button>
                  </div>
                  <div class="caseContent">
                    <vue-editor
                      v-model="caseContent"
                      :editorOptions="editorSettings"
                      useCustomImageHandler
                      @image-added="imageHandler"
                    ></vue-editor>
                  </div>
                </div>
                <div class="errorMsg d-flex justify-content-center pt-3" v-if="error" >
                  {{errMsg}}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="uploadCaseStudy"
              >
                Upload Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 class="title uppercase">case studies</h1>
      <button data-bs-toggle="modal" data-bs-target="#NewCaseModal">
        ADD CASE
      </button>
      <div class="content">
        <div class="card h-100">
          <router-link :to="{ name: 'case1' }">
            <div class="img">
              <img
                src="@/assets/Case_Studies_1.png"
                class="card-img-top"
                alt="align-items-auto"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Biodiversity Conservation, Green Production, and Rural
                Development
              </h5>
              <h6 class="card-text">Farmers of Liyu community..</h6>
            </div>
          </router-link>
        </div>

        <div class="card h-100">
          <router-link :to="{ name: 'case2' }">
            <div class="img">
              <img
                src="@/assets/Case_Studies_2.png"
                class="card-img-top"
                alt="align-items-auto"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Sustainable Rural Development Practice</h5>
              <h6 class="card-text">The Gonglaoping community..</h6>
            </div>
          </router-link>
        </div>

        <div class="card h-100">
          <router-link :to="{ name: 'case3' }">
            <div class="img">
              <img
                src="@/assets/Case_Studies_3.png"
                class="card-img-top"
                alt="align-items-auto"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Gonglaoping Community</h5>
              <h6 class="card-text">located a flat terrace..</h6>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { VueEditor, Quill } from "vue3-editor";
import { ImageDrop } from "quill-image-drop-module";
import ImageResize from "quill-image-resize-module--fix-imports-error";
Quill.register("modules/imageDrop", ImageDrop);
Quill.register("modules/imageResize", ImageResize);
import { db, storage } from "../firebase/firebaseinit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      caseTitle: "",
      subtitle: "",
      caseContent: "",
      coverPhotoURL: "",
      coverPhotoName: "",
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {},
        },
      },
      loading: null,
      error: null,
      errMsg: "",
    };
  },
  methods: {
    fileChange(event) {
      this.file = event.target.files[0];
      const fileName = this.file.name;
      console.log(fileName);
      this.coverPhotoName = fileName;
      this.coverPhotoURL = URL.createObjectURL(this.file);
    },
    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const storageRef = ref(storage, `CaseStudiesPhotos/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, this.file);
      uploadTask.on("state_changed", (snapshot) => {
        console.log(snapshot),
          (err) => {
            console.log(err);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            Editor.insertEmbed(cursorLocation, "image", downloadURL);
            resetUploader();
          };
      });
    },
    uploadCaseStudy() {
      var date = new Date();
      var dateresult = date.toDateString();
      if (
        this.caseTitle.length !== 0 &&
        this.subtitle.length !== 0 &&
        this.caseContent.length !== 0
      ) {
        if (this.file) {
          console.log(this.caseContent, dateresult);
          this.loading = true;
          const storageRef = ref(
            storage,
            `/CaseStudiesPhotos/${this.coverPhotoName}`
          );
          const uploadTask = uploadBytesResumable(storageRef, this.file);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              console.log(snapshot);
            },
            (err) => {
              console.log(err);
              this.loading = false;
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              const colRef = collection(db, "CaseStudise");
              await addDoc(colRef, {
                Title: this.caseTitle,
                Subtitle: this.subtitle,
                CoverPhotoName: this.coverPhotoName,
                CoverPhotoURL: downloadURL,
                Content: this.caseContent,
                TimeStamp: dateresult,
              });
            }
          );
        } else {
          this.error = true;
          this.errMsg = "Please upload a cover photo for this case!";
          setTimeout(() => {
            this.error = false;
          }, 3000);
        }
      } else {
        this.error = true;
        this.errMsg =
          "Please ensure Title & Subtitle & Content has been filled!";
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
  },
};
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
  }

  .card {
    width: 350px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: relative;
    background-color: white;
    border: 0px solid #fff;
    transition: 0.3s ease-in-out;

    .img {
      height: 200px;
      overflow: hidden;
    }

    a {
      text-decoration: none;
      color: #333;

      &:hover {
        color: #eee;
      }
    }

    &:hover {
      background-color: #333;
    }

    .card-body {
      height: 150px;
    }
  }
}
</style>