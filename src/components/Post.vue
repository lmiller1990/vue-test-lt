<template>
  <div>
    <h2 data-t-title>{{ post.title }}</h2>
    <div data-t-body>{{ post.body }}</div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Post } from "../interfaces/Post"
import Vue from 'vue';

export default Vue.extend({
  props: { 
    post: {
      type: Object as () => Post
    }
  }
});
</script>

<style>
</style>

