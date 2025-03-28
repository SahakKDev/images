<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img
        v-for="image in allImages"
        :key="image.id"
        :src="image.link"
        alt="Uploaded image"
      />
    </div>
    <h2 v-else>Log in to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ImageList",
  computed: mapGetters(["allImages", "isLoggedIn"]),
  methods: mapActions(["fetchImages"]),
  created() {
    this.isLoggedIn && this.fetchImages();
  },
};
</script>

<style scoped>
.image-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  align-items: center;
  justify-items: center;
}

img {
  max-width: 100%;
  padding: 5px;
}
</style>
