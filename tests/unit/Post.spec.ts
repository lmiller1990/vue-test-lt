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
  it("APIを叩いて、レスポンスのデータをアサインして、レンダーする", 
      async () => {
    const wrapper = shallowMount(PostComponent)

    // 全ての同期なオペレーションを終わらせる関数
    await flushPromises()

    expect(getRequestUrl()).toMatch("/api/posts/1")

    expect(wrapper.find("[data-t-title]").text())
      .toBe(post.title)
    expect(wrapper.find("[data-t-body]").text())
      .toBe(post.body)
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
    expect(wrapper.find("[data-t-title]").text())
      .toBe(post.title)
    expect(wrapper.find("[data-t-body]").text())
      .toBe(post.body)
    // スナップショットでも大丈夫です。
  })

  it("たたしいペイロードをアサインする", async () => {
    const getPost = jest.fn() // モック関数
    const wrapper = shallowMount(PostComponent, {
      methods: { getPost } // 本当の関数の代わりに使う。
    })
    await flushPromises()
    expect(getPost).toHaveBeenCalled()
  })

  it("たたしいエンドポイントを叩いてレスポンスをアサインする", 
  　　async () => {
    const wrapper = shallowMount(PostComponent)
    await flushPromises()
    expect(getRequestUrl()).toMatch("/api/posts/1")
    expect(wrapper.vm.post).toEqual(post)
  })
})