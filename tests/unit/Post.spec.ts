import { shallowMount } from "@vue/test-utils"
import Post from "@/components/Post.vue"

const post = {
  title: "title",
  body: "body"
}

describe("Post", () => {
  it("renders a post", () => {
    const wrapper = shallowMount(Post, {
      data() {
        return { post }
      }
    })

    expect(wrapper.find("[data-t-title]").text()).toBe(post.title)
    expect(wrapper.find("[data-t-body]").text()).toBe(post.body)
  })

  it("makes an API call when created to get post", () => {
    
  })
})