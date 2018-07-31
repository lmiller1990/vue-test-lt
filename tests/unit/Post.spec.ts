import { shallowMount } from "@vue/test-utils"
import flushPromises from "flush-promises"
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
  it("APIを叩いて、レスポンスのデータをアサインして、レンダーする", async () => {
    const wrapper = shallowMount(PostComponent)

    // 全ての同期なオペレーションを終わらせる関数
    await flushPromises()

    expect(getRequestUrl()).toMatch("https://jsonplaceholder.typicode.com/posts/1")

    expect(wrapper.find("[data-t-title]").text()).toBe(post.title)
    expect(wrapper.find("[data-t-body]").text()).toBe(post.body)
  })

  it("たたしいエンドポイントを叩く", async () => {
    const wrapper = shallowMount(PostComponent)

    await flushPromises()

    expect(getRequestUrl()).toMatch("https://jsonplaceholder.typicode.com/posts/1")
  })

  it("たたしいペイロードをアサインする", async () => {
    const wrapper = shallowMount(PostComponent)

    await flushPromises()

    expect(wrapper.vm.post).toEqual(post)
  })

  it("ポストのデータを正しくレンダー", () => {
    const wrapper = shallowMount(PostComponent, {
      methods: {
        getPost: jest.fn() // APIを叩かないようにする
      },
      data() {
        return { post: post }
      }
    })

    expect(wrapper.find("[data-t-title]").text()).toBe(post.title)
    expect(wrapper.find("[data-t-body]").text()).toBe(post.body)
    // スナップショットでも大丈夫です。
  })
})