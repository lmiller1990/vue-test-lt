<template>
  <div id="app">
    <Post />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Post from "./components/Post.vue"

export default Vue.extend({
  name: 'app',
  components: {
    Post
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
