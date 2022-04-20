<template>
  <div class="loginBox">
    <h3>Sign in</h3>
    <form action="" method="post">
      <div class="inputBox">
        <input
          id="uname"
          type="text"
          name="Username"
          placeholder="Username"
          v-model="email"
        />
        <input
          id="pass"
          type="password"
          name="Password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <input type="button" name="" value="Login" @click="login" />
    </form>
    <router-link to="#" class="send btn rounded-pill text-center"
      >Forget Password?</router-link
    >
  </div>
</template>

<script>
import { auth } from "../firebase/firebaseinit";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((res) => {
          console.log(res.user.uid);
          this.$router.push("/")
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style scoped>
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

h3 {
  margin: 0;
  padding: 0 0 20px;
  color: #0f7a0c;
  text-align: center;
}

.loginBox input {
  width: 100%;
  margin-bottom: 20px;
}

.loginBox input[type="text"],
.loginBox input[type="password"] {
  border: none;
  border-bottom: 2px solid #262626;
  outline: none;
  height: 40px;
  color: #080808;
  background: transparent;
  font-size: 16px;
  padding-left: 20px;
  box-sizing: border-box;
}

.loginBox input[type="text"]:hover,
.loginBox input[type="password"]:hover {
  color: #282b28;
  border: 2px solid #140a0a;
  box-shadow: 0 0 5px rgba(234, 238, 234, 0.3),
    0 0 10px rgba(232, 238, 232, 0.2), 0 0 15px rgba(229, 235, 229, 0.1),
    0 2px 0 rgb(102, 98, 98);
}

.loginBox input[type="text"]:focus,
.loginBox input[type="password"]:focus {
  border-bottom: 2px solid #f7fafa;
}

.inputBox {
  position: relative;
}

.inputBox span {
  position: absolute;
  top: 10px;
  color: #262626;
}

.loginBox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  background: #047918;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
}

.loginBox a {
  color: #262626;
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
