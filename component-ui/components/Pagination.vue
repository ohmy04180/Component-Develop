<template>
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
			<li class="pagination-item" v-for="(item, index) in paginationList" :key="index">
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
import {ref, defineComponent} from "vue";

export default defineComponent({
	props: ["perPage", "totalCount"],
	setup(props, {emit}) {
		//	DATA
		// 총 게시글 수 / 보여질 게시글 수
		const paginationCount: number = Math.ceil(props.totalCount / props.perPage);
		// 현재 페이지 (Default = 1)
		let currentPage = ref(1);
		// 페이지네이션 목록화
		let paginationList = ref([]);
		// 이전/다음 버튼 비활성화 체크
		let isPrevDisabled = ref(true);
		let isNextDisabled = paginationCount !== 1 ? ref(false) : ref(true)

		// CREATED
		for (let i: number = 1; i <= paginationCount; i++) {
			paginationList.value.push(i as never);
		}

		//	METHODS
		// 클릭한 버튼 감지
		function movePage(item: number): void {
			checkPrevDisabled(item);
			checkNextDisabled(item);
			isSelectedClass(item);
			emit("checkCurrentPage", item);
		}

		// 클릭한 선택 값을 currentPage에 부여
		function isSelectedClass(item: number): void {
			currentPage.value = item;
		}

		// 첫번째 순서에 도달했을 경우 이전 버튼 비활성화
		function checkPrevDisabled(item: number): void {
			isPrevDisabled.value = item === paginationList.value[0] ? true : false;
		}

		// 마지막 순서에 도달했을 경우 다음 버튼 비활성화
		function checkNextDisabled(item: number): void {
			isNextDisabled.value =
				item == paginationList.value[paginationList.value.length - 1]
					? true
					: false;
		}

		// 이전 버튼 클릭 시 currentPage 값 변경 + 비활성화 체크
		function movePrevPage(): void {
			if (currentPage.value > 0) {
				currentPage.value = currentPage.value - 1;

				isPrevDisabled.value = currentPage.value == 1 ? true : false;
			} else {
				return;
			}

			isNextDisabled.value =
				currentPage.value < paginationCount ? false : true;

			emit("checkCurrentPage", currentPage.value);
		}

		// 다음 버튼 클릭 시 currentPage 값 변경 + 비활성화 체크
		function moveNextPage(): void {
			if (currentPage.value < paginationCount) {
				currentPage.value = currentPage.value + 1;

				isNextDisabled.value =
					currentPage.value === paginationCount ? true : false;
			} else {
				return;
			}

			isPrevDisabled.value = currentPage.value > 0 ? false : true;

			emit("checkCurrentPage", currentPage.value);
		}

		return {
			isPrevDisabled,
			isNextDisabled,
			movePage,
			movePrevPage,
			moveNextPage,
			currentPage,
			paginationList
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
