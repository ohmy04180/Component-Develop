<template>
  <h1>Pagination</h1>

  <div class="pagination">
    <button
      class="pagination-move-button"
      type="button"
      @click="movePrevPage"
      :disabled="isPrevDisabled"
    >
      <
    </button>
    <ul class="pagination-list">
      <li class="pagination-item" v-for="item in paginationList" :key="item">
        <button
          type="button"
          class="pagination-button"
          @click="movePage(item)"
          :class="item === currentPage ? 'is-active' : ''"
        >
          {{ item }}
        </button>
      </li>
    </ul>
    <button
      class="pagination-move-button"
      type="button"
      @click="moveNextPage"
      :disabled="isNextDisabled"
    >
      >
    </button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

export default defineComponent({
  props: ["paginationList", "paginationCount"],
  setup(props, { emit }) {
    //	DATA
    // 현재 페이지 (Default 값 = 1)
    let currentPage = ref(1);
    // disabled 체크
    let isPrevDisabled = ref(false);
    let isNextDisabled = ref(false);

    //	** METHODS
    // 숫자 버튼 클릭시 해당하는 데이터 목록을 출력
    function movePage(item: number) {
      checkPrevDisabled(item);
      checkNextDisabled(item);

      isSelectedClass(item);
    }

    // 클릭한 선택 값을 currentPage에 부여
    function isSelectedClass(item: number) {
      currentPage.value = item;
    }

    // 첫번째 순서에 도달했을 경우, 이전 버튼 비활성화
    function checkPrevDisabled(item: number): void {
      isPrevDisabled.value = item === props.paginationList[0] ? true : false;
    }

    // 마지막 순서에 도달했을 경우, 다음 버튼 비활성화
    function checkNextDisabled(item: number): void {
      isNextDisabled.value =
        item == props.paginationList[props.paginationList.length - 1]
          ? true
          : false;
    }

    // 이전 버튼 클릭 시 currentPage 값 변경 + 비활성화 설정
    function movePrevPage() {
      if (currentPage.value > 0) {
        currentPage.value = currentPage.value - 1;

        isPrevDisabled.value = currentPage.value == 1 ? true : false;
      } else {
        return;
      }

      isNextDisabled.value =
        currentPage.value < props.paginationCount ? false : true;
    }

    // 다음 버튼 클릭 시 currentPage 값 변경 + 비활성화 설정
    function moveNextPage() {
      if (currentPage.value < props.paginationCount) {
        currentPage.value = currentPage.value + 1;

        isNextDisabled.value =
          currentPage.value === props.paginationCount ? true : false;
      } else {
        return;
      }

      isPrevDisabled.value = currentPage.value > 0 ? false : true;
    }

    return {
      isPrevDisabled,
      isNextDisabled,
      movePage,
      movePrevPage,
      moveNextPage,
      currentPage,
      isSelectedClass
    };
  }
});
</script>

<style scoped>
.pagination,
.pagination-move-button,
.pagination-list {
  display: flex;
}

.pagination,
.pagination-list {
  gap: 16px;
}

.pagination-move-button,
.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
}

.pagination-button.is-active {
  background-color: royalblue;
  color: #fff;
}

button:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
</style>
