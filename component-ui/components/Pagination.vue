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
      <li
        class="pagination-item"
        v-for="item in slicedPaginationData"
        :key="item"
      >
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
import { ref, defineComponent, computed } from "vue";

export default defineComponent({
  props: ["paginationData", "postData"],
  setup(props, { emit }) {
    //	** DATA
    // 총 게시글 수
    const totalCount: object[] = props.postData.length;
    // 보여질 숫자 버튼 개수 (10개씩 보기, 20개씩 보기)
    const perPage = ref(10);
    // 현재 페이지 (Default: 1)
    let currentPage = ref(1);
    // 페이지네이션에 몇 개의 페이지가 보이게 할 것인지
    const pageSize: number = 10;
    // disabled 체크
    let isPrevDisabled = ref(false);
    let isNextDisabled = ref(false);

    // ** COMPUTED
    // 처음 진입 시 보여질 페이지네이션 개수 출력
    const slicedPaginationData = computed(() => {
      return props.paginationData.slice(0, perPage.value);
    });

    //	** METHODS

    // TODO: [개발]
    // let totalPage = Math.ceil(totalCount.length / pageSize.value);

    // 숫자 버튼 클릭시 해당하는 데이터 목록을 출력한다.
    function movePage(item: number) {
      // 이전 / 다음으로 버튼 비활성화 체크
      checkPrevDisabled(item);
      checkNextDisabled(item);

      // 현재 페이지 상태 설정
      isSelectedClass(item);
    }

    // TODO: [개발] currentPage 변화 감지, emit 발생
    function isSelectedClass(item: number) {
      currentPage.value = item;

      // test
      // console.log("currentPage.value", currentPage.value);
    }

    // TODO: [개발] 1번째 순서에 도달했을 경우, 이전 버튼 비활성화
    function checkPrevDisabled(item: number): void {
      isPrevDisabled.value = item === props.paginationData[0] ? true : false;
    }

    // TODO: [개발] 마지막 순서에 도달했을 경우, 다음 버튼 비활성화
    function checkNextDisabled(item: number): void {
      isNextDisabled.value =
        item == props.paginationData[props.paginationData.length - 1]
          ? true
          : false;
    }

    function movePrevPage() {
      console.log("다음 페이지로 이동");
    }

    function moveNextPage() {
      console.log("이전 페이지로 이동");
    }

    return {
      slicedPaginationData,
      isPrevDisabled,
      isNextDisabled,
      movePage,
      movePrevPage,
      totalCount,
      perPage,
      currentPage,
      pageSize,
      isSelectedClass,
      checkPrevDisabled,
      checkNextDisabled
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
