<template>
<main>
  <div class="container">
    <!-- Modal -->
    <div
      class="modal fade"
      id="forgot-password"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Send Password Reset Email
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="input-group mb-3" v-if="!isEmailSend">
              <span class="input-group-text">Email</span>
              <input
                type="text"
                class="form-control"
                placeholder="Please enter your Email"
                v-model="pswResetEmail"
              />
              <br />
            </div>
            <div class="text-center" v-if="isEmailSend">
              Password Reset Email is sent! Please check your mailbox!
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
            <button type="button" class="btn btn-primary" @click="forgetPassword">Send</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="loginBox">
        <h3>Sign in</h3>
        <form action="" method="post">
          <div class="inputBox">
            <div class="form-floating mb-3">
              <input
              class="type-in-box form-control" 
              id="uname"
              type="text"
              name="Username"
              placeholder="Username"
              v-model="email"
            />
            <label for="floatingInput">Username</label>
            </div>
            
            <div class="form-floating mb-3">
              <input
                id="pass"
                class="type-in-box form-control"
                type="password"
                name="Password"
                placeholder="Password"
                v-model="password"
              />
              <label for="floatingInput">Password</label>
            </div>
            
          </div>
          <input
            type="button"
            class="btn btn-success"
            value="Login"
            @click="login"
          />
        </form>
        <router-link
          to="#"
          class="send btn rounded-pill text-center"
          data-bs-toggle="modal"
          data-bs-target="#forgot-password"
          >Forget Password?</router-link
        >
      </div>
    </div>
  </div>
</main>
  
</template>

<script>
import { auth } from "../firebase/firebaseinit";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginView",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      pswResetEmail: "",
      isEmailSend: null,
    };
  },
  methods: {
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          console.log(res.user.uid);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    forgetPassword() {
      this.isEmailSend=!this.isEmailSend;   
    }
  },
};
</script>

<style scoped>
.container {
  height: 40vh;
}

.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  min-height: 200px;
  background: #e3f0e3;
  border-radius: 10px;
  padding: 40px;
  box-sizing: border-box;
}

@media (max-width: 850px) {
  .loginBox {
    top: 40%;
  }
}

h3 {
  margin: 0;
  padding: 0 0 20px;
  color: #66bb6a;
  text-align: center;
}

.loginBox input {
  width: 100%;
  margin-bottom: 20px;
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
  border: none;
  outline: none;
  height: 60px;
  color: #333;
  background: #f9f9fa;
  font-size: 1rem;
  box-sizing: border-box;
}

.inputBox {
  position: relative;
}

.inputBox span {
  position: absolute;
  top: 10px;
  color: #333;
}

.loginBox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  background: #66bb6a;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}

.loginBox a {
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  display: block;
}

a:hover {
  color: #3a7e58;
}
</style>
