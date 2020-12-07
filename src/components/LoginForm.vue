<template>
  <div class="loginForm">
    <section>
      <b-field label="Username">
        <b-input required v-model="username" maxlength="30"></b-input>
      </b-field>

      <b-field label="Password">
        <b-input required type="password" v-model="password" password-reveal>
        </b-input>
      </b-field>
      <button class="button is-full" @click="loginClick()">Login</button>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LoginForm",
  watch: {
    user(val) {
      if (val.username) {
        this.$router.push("profile");
      }
    },
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      isLoggedIn: "isLoggedIn",
    }),
    username: {
      get() {
        return this.$store.state.login.username;
      },
      set(val) {
        this.$store.commit("updateUsername", val);
      },
    },
    password: {
      get() {
        return this.$store.state.login.password;
      },
      set(val) {
        this.$store.commit("updatePassword", val);
      },
    },
  },
  methods: {
    ...mapActions(["login"]),
    loginClick() {
      if (this.username.length > 0 && this.password.length > 0) {
        this.$store.dispatch("login", {
          username: this.username,
          password: this.password,
        });
      }
    },
  },
};
</script>

<style></style>
