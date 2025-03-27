<template>
  <div>Please wait...</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AuthHandler",
  methods: mapActions(["finilazeLogin"]),
  created() {
    this.finilazeLogin(window.location.hash);
  },
};
</script>
