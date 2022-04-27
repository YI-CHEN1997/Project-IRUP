<template>
  <main>
    <div class="">
      <div class="container">
        <!-- Add New Member Modal -->
        <div class="modal" tabindex="-1" id="addNewMember">
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
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
                <img :src="profilePhotoURL" alt="" class="photo-preview" />
                <div class="inputs">
                  <label for="profile-photo">Upload Member Photo</label>
                  <br />
                  <input
                    type="file"
                    ref="profilePhoto"
                    id="profile-photo"
                    @change="fileChange"
                    accept=".png, .jpg, ,jpeg"
                  />
                  <div>
                    <label for="memberName">Member Name</label>
                    <br />
                    <input type="text" v-model="profileName" />
                  </div>
                  <div>
                    <label for="profilePhone">Phone</label>
                    <br />
                    <input type="text" v-model="profilePhone" />
                  </div>
                  <div>
                    <label for="profileEmail">Email</label>
                    <br />
                    <input type="text" v-model="profileEmail" />
                  </div>
                  <div>
                    <label for="profileContent">Description</label>
                    <br />
                    <vue-editor
                      class="ql-editor"
                      v-model:content="profileContent"
                      contentType="html"
                    />
                  </div>
                </div>
                <div class="err-message mt-3" v-if="error">
                  <p>{{ this.errorMsg }}</p>
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
                  @click="addNewMember"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="ceiling row justify-content-center align-items-center">
          <div class="title col-5 m-4">
            <h2 class="">Executive Board</h2>
          </div>
          <div class="col-5 m-4 d-flex justify-content-end">
            <span
              class="btn add-btn align-items-center"
              data-bs-toggle="modal"
              data-bs-target="#addNewMember"
            >
              <i class="fa-solid fa-circle-plus me-2"></i>ADD MEMBER
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
    </div>
  </main>
</template>
<script>
import BusinessCard from "@/components/BusinessCard .vue";
import { storage, db } from "@/firebase/firebaseinit";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { VueEditor} from "vue3-editor";

export default {
  setup() {},
  components: {
    BusinessCard,
    VueEditor
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

<style scoped>
.ceiling {
  margin-top: 2rem;
}
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

.photo-preview {
  max-width: 100%;
}

.err-message {
  color: red;
}
</style>