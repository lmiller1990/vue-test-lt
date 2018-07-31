<template>
  <div>
    <h2 data-t-title>
      {{ post.title }}
    </h2>

    <div data-t-body>
      {{ post.body }}
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { Post } from "../interfaces/Post"
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },

  data() {
    return {
      post: {} as Post
    }
  },

  created() {
    this.getPost()
  },

  methods: {
    async getPost() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
      const { id, title, body } = response.data
      this.post = { id, title, body }
    }
  }
});
</script>

<style>
</style>

