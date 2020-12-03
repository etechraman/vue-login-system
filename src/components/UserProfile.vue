<template>
  <div id="login">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Profile Page
          </h1>
          <h2 class="subtitle">Username:{{ user.username }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Header from "./../components/Header";
export default {
  name: "UserProfile",
  components: {
    // Header,
  },
  computed: {
    user: {
      get() {
        return this.$store.state.login.user;
      },
    },
  },
};
</script>
