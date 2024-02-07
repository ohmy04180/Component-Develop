<template>
  <div>
    <div></div>
    <Pagination
      :paginationData="paginationList"
      :postData="postList"
    ></Pagination>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const paginationList: Array<number> = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16
    ];

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
      { title: "Title", postContent: "This is Content" }
    ];
    return { paginationList, postList };
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
