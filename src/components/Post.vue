<template>
  <div>
    <h2>
      {{ post.title }}
    </h2>

    <div>
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
     
     console.log(response)
      this.post = {
        id: response.data.id, 
        title: response.data.title,
        body: response.data.body
      }
    }
  }
});
</script>

<style>
</style>

