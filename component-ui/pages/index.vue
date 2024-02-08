<template>
  <div>
    <div></div>
    <Pagination
      :paginationCount="paginationCount"
      :paginationList="paginationList"
    ></Pagination>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    // DATA
    // 게시글 리스트
    const postList: object[] = [
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" },
      { title: "Title", postContent: "This is Content" }
    ];
    // 총 게시글 수
    const totalCount: number = postList.length;
    // 보여질 게시글 개수 (10개씩 보기, 20개씩 보기)
    const perPage: number = 10;

    // 페이지네이션 개수에 맞는 배열을 담을 공간
    let paginationList = ref([]);

    let paginationCount: number = Math.ceil(totalCount / perPage);

    // Created: paginationList에 paginationCount 만큼 배열로 담는다.
    for (let i: number = 1; i <= paginationCount; i++) {
      paginationList.value.push(i as never);
    }

    return {
      postList,
      totalCount,
      perPage,
      paginationCount,
      paginationList
    };
  }
});
</script>
<style>
html {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

html,
body,
div,
span,
ol,
ul,
li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

h1 {
  display: flex;
  align-items: center;
  justify-content: center;
}

ol,
ul {
  list-style: none;
}
</style>
