<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
  mounted: function() {
    if (this.isLoggedIn) {
      this.$router.push("/profile");
    }
  },
};
</script>

<style></style>
