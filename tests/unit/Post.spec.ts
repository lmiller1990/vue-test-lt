import { shallowMount } from "@vue/test-utils"
import { Post } from "@/interfaces/Post"
import { setResponse, getRequestUrl } from "../../__mocks__/axios"
import PostComponent from "@/components/Post.vue"

const post: Post = {
  id: 1,
  title: "title",
  body: "body"
}

setResponse({ data: post, status: 200 })


describe("Post", () => {
  it("renders a post", () => {
    const wrapper = shallowMount(PostComponent, {
      methods: {
        getPost: jest.fn()
      },
      data() {
        return { post: post }
      }
    })

    expect(wrapper.find("[data-t-title]").text()).toBe(post.title)
    expect(wrapper.find("[data-t-body]").text()).toBe(post.body)
  })

  it("makes an API call when created to get post", async () => {
    const wrapper = shallowMount(PostComponent)

    expect(getRequestUrl()).toMatch("https://jsonplaceholder.typicode.com/posts/1")
  })
})