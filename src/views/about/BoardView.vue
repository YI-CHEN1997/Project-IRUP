<template>
  <main>
    <div class="">
      <!-- <NewMemberModal v-if="modalActive" v-on:toggle-modal="toggleModal"/> -->
      <div class="container">
        <!-- Add New Member Modal -->
        <div class="modal" tabindex="-1" id="addNewMember">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Add New Member</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <LoadingComponent v-show="loading" />

                <div class="upload-photo d-flex flex-column justify-content-center m-2">
                  <i class="fa-solid fa-user photo-preview"></i>
                  <label class="text-center p-2">
                    UPLOAD
                    
                    <input
                      type="file"
                      ref="profilePhoto"
                      id="profile-photo"
                      @change="fileChange"
                      accept=".png, .jpg, ,jpeg"
                    />
                  </label>
                  
                </div>
                
                <!-- <img :src="profilePhotoURL" alt="" class="photo-preview" /> -->
                <div class="inputs">
                  <!-- <label for="profile-photo" class="mx-2">Upload Member Photo</label> -->
                  
                  <div class="name form-floating my-3">
                <input
                  class="type-in-box form-control"
                  type="text"
                  name="memberName"
                  placeholder="memberName"
                  v-model="profileName"
                />
                <label for="floatingInput memberName">Member's Name</label>
              </div>
                  <!-- <div class="name">
                    <label for="memberName">Member Name</label>
                    <br />
                    <input type="text" v-model="profileName" />
                  </div> -->
                  
                  <div class="phone form-floating my-3">
                <input
                  class="type-in-box form-control"
                  type="text"
                  name="profilePhone"
                  placeholder="Phone"
                  v-model="profilePhone"
                />
                <label for="floatingInput profilePhone">Phone</label>
              </div>
                  
                  <!-- <div class="phone">
                    <label for="profilePhone">Phone</label>
                    <br />
                    <input type="text" v-model="profilePhone" />
                  </div> -->
              <div class="email form-floating mt-3">
                <input
                  class="type-in-box form-control"
                  type="text"
                  name="profileEmail"
                  placeholder="Email"
                  v-model="profileEmail"
                />
                <label for="floatingInput profileEmail">Email</label>
              </div>
                  
                  <!-- <div class="email">
                    <label for="profileEmail">Email</label>
                    <br />
                    <input type="text" v-model="profileEmail" />
                  </div>
                  <div> -->
                    <!-- <label for="profileContent">Description</label> -->
                    <br />
                    <QuillEditor
                      theme="snow"
                      toolbar="minimal"
                      class="ql-editor"
                      v-model:content="profileContent"
                      contentType="html"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div class="err-message mt-3" v-if="error">
                  <p>{{ this.errorMsg }}</p>
                </div>
              </div>
              <div class="modal-footer">
                <!-- <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button> -->
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addNewMember"
                >
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="ceiling row justify-content-center align-items-center">
          <div class="title">
            <h1 class="text-center">Executive Board</h1>
          </div>
          <div class="plus-btn d-flex justify-content-end">
            <span
              class="d-flex justify-content-center add-btn align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#addNewMember"
            >
            <i class="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
        <div class="main row justify-content-center">
          <BusinessCard
            :member="member"
            v-for="member in boardMembers"
            :key="member"
          >
          </BusinessCard>
        </div>
      </div>
  </main>
</template>

<script>
import BusinessCard from "@/components/BusinessCard .vue";
//import NewMemberModal from "@/components/NewMemberModal.vue";
import LoadingComponent from "@/components/LoadingComponent.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { storage, db } from "@/firebase/firebaseinit";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default {
  setup() {},
  components: {
    BusinessCard,
    QuillEditor,
    LoadingComponent,
    //NewMemberModal,
  },
  data() {
    return {
      loading: null,
      error: null,
      errorMsg: "",
      uploadProgress: 0,
      //modalActive:null
    };
  },
  computed: {
    boardMembers() {
      return this.$store.state.boardMembers;
    },
    profilePhotoURL: {
      get() {
        return this.$store.state.profilePhotoURL;
      },
      set(payload) {
        this.$store.commit("updateprofilePhotoURL", payload);
      },
    },
    profileName: {
      get() {
        return this.$store.state.profileName;
      },
      set(payload) {
        this.$store.commit("updateProfileName", payload);
      },
    },
    profilePhone: {
      get() {
        return this.$store.state.profilePhone;
      },
      set(payload) {
        this.$store.commit("updateprofilePhone", payload);
      },
    },
    profileEmail: {
      get() {
        return this.$store.state.profileEmail;
      },
      set(payload) {
        this.$store.commit("updateprofileEmail", payload);
      },
    },
    profileContent: {
      get() {
        return this.$store.state.profileContent;
      },
      set(payload) {
        this.$store.commit("updateprofileContent", payload);
      },
    },
  },
  methods: {
    fileChange(event) {
      this.file = event.target.files[0];
      const fileName = this.file.name;
      console.log(fileName);
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit(
        "updateprofilePhotoURL",
        URL.createObjectURL(this.file)
      );
    },
    addNewMember() {
      // console.log(this.profileName);
      // console.log(this.profileContent);
      console.log(this.$store.state.profilePhotoName);
      if (this.profileName !== "" && this.profileContent !== "") {
        if (this.file) {
          this.loading = true;
          const storageRef = ref(
            storage,
            `/BoardMemberProfile/${this.$store.state.profilePhotoName}`
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
              const colRef = collection(db, "executiveBoard");
              await addDoc(colRef, {
                profileName: this.profileName,
                contactEmail: this.profileEmail,
                contactPhone: this.profilePhone,
                profilePhoto: downloadURL,
                profileContent: this.profileContent,
              });
              await this.$store.dispatch("getBoardMembers");
              this.loading = false;
              this.$store.dispatch("getBoardMembers");
              this.$router.go();
            }
          );
        } else {
          this.error = true;
          this.errorMsg = "Please ensure Profile Photo has been uploaded!";
          setTimeout(() => {
            this.error = false;
          }, 3000);
          return;
        }
      } else {
        this.error = true;
        this.errorMsg =
          "Please ensure Member Name and Member Description has been filled!";
        setTimeout(() => {
          this.error = false;
        }, 3000);
        return;
      }
    },
    // toggleModal(){
    //   this.modalActive = !this.modalActive
    // }
  },
};
</script>

<style lang="scss" scoped>
.ceiling {
  margin-top: 2rem;
}

.modal-body {

  .upload-photo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #eee;
    overflow: hidden;
    position: relative;
    top: 50%;
    left: 25%;
    transition: translate(-50%, -50%);
    
    svg {
      color: #fff;
      height: 100px;
    }

    label {
      width: 100%;
      height: 40px;
      color: #fff;
      background: #333;
      position: absolute;
      bottom: 0;
      cursor: pointer;

      input {
        display: none;
      }
    }
  }
}

.modal-footer {
  .btn {
    width: 100%;
    background: #66bb6a;
    border: none;

    &:hover {
      background: #396e3c;
    }
  }
}


.plus-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

.add-btn {
  height: 60px;
  width: 60px;
  color: #fff;
  background-color: #66bb6a;
  border-radius: 50%;
  opacity: 0.6;
}
.add-btn:hover {
  background-color: #396e3c;
}
.add-btn svg {
  height: 30px;
  width: 30px;
}
.bg {
  position: absolute;
  z-index: -98;
  bottom: 40vh;
}

.photo-preview {
  max-width: 100%;
}

.err-message {
  color: red;
}
</style>