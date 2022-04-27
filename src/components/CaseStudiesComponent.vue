<template>
  <main>
    <div class="container">
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
                    <button>Preview Cover Photo</button>
                  </div>
                  <div class="caseContent">
                    <QuillEditor
                      theme="snow"
                      toolbar="full"
                      style="height: 35vh"
                      contentType="html"
                      v-model:content="caseContent"
                      :options="options"
                      :modules="modules"
                    />
                  </div>
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
              <button type="button" class="btn btn-primary">
                Save changes
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
import Quill from 'quill'

import { ImageResize } from 'quill-image-resize-module';

Quill.register('modules/imageResize', ImageResize);

export default {
  data() {
    return {
      caseTitle: "",
      subtitle: "",
      caseContent: "",
      coverPhotoURL: "",
      coverPhotoName: "",
      options: {
        placeholder: "Please enter case study here...",
        modules: {
          imageResize: true,
        },
      },
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