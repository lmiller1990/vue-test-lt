<template>
  <PostDisplay :post="post" />
</template>

<script lang="ts">
import axios from 'axios'
import PostDisplay from "./Post.vue"
import Vue from 'vue';
import { Post } from "../interfaces/Post"

export default Vue.extend({
  components: { PostDisplay },

  data() {
    return { post: {} as Post }
  }, 

  created() { this.getPost() }, 

  methods: {
    async getPost() {
      const response = await axios.get("/api/posts/1")
      const { id, title, body } = response.data
      this.post = { id, title, body }
    }
  }
})
</script>


