<template>
  <div class="modal" ref="modal">
    <div class="modal-content">
      <img :src="profilePhotoURL" alt="" />
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
          <label for="profileContent">Content</label>
          <br />
          <QuillEditor
            theme="snow"
            class="ql-editor"
            v-model="profileContent"
          />
        </div>
      </div>
      <div class="btn save-btn">
        <i class="fa-solid fa-floppy-disk"></i> SAVE
      </div>
    </div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
// import { storage, db } from "../firebase/firebaseinit";
// import { addDoc, collection } from "firebase/firestore";
// import { ref, getDownloadURL } from "firebase/storage";

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {};
  },
  computed: {
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
        this.$store.commit("updateprofileName", payload);
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
      const fileName = this.file.fileName;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit(
        "updateprofilePhotoURL",
        URL.createObjectURL(this.file)
      );
    },

  },
};
</script>

<style lang="scss" scoped>
.modal {
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .modal-content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 12px;
    background-color: #fff;
    width: 600px;
    padding: 50px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    img {
      background-color: #ccc;
      margin-top: 16px;
      border-radius: 50%;
      top: 10%;
      left: 55%;
      width: 200px;
      height: 200px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
    .inputs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      label {
        margin-top: 10px;
      }
      input {
        height: 35px;
        width: 100%;
      }
    }
    .save-btn {
      width: 25%;
      margin: auto;
      margin-top: 20px;
      color: #fff;
      background-color: #66bb6a;
      border-radius: 50px;

      &:hover {
        background-color: #396e3c;
      }
    }
  }
}
</style>
