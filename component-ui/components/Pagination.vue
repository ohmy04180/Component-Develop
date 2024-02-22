<template>
	<div class="pagination">
		<button
			class="pagination-move-button"
			type="button"
			@click="movePage(--currentPage)"
			:disabled="currentPage === 1"
		>
			<
		</button>
		<ul v-if="paginationTotalCount <= 7" class="pagination-list">
			<li
				class="pagination-item"
				v-for="(item, index) in paginationList"
				:key="index"
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
		<ul v-else class="pagination-list">
			<li class="pagination-item">
				<button
					type="button"
					class="pagination-button"
					@click="movePage(paginationList[0])"
					:class="paginationList[0] === currentPage ? 'is-active' : ''"
					key="0"
				>
					{{ paginationList[0] }}
				</button>
			</li>
			<li class="pagination-item">
				<span class="ellipsis" v-if="currentPage > 4">...</span>
				<button
					v-else
					type="button"
					class="pagination-button"
					@click="movePage(paginationList[1])"
					:class="paginationList[1] === currentPage ? 'is-active' : ''"
					key="0"
				>
					{{ paginationList[1] }}
				</button>
			</li>
			<li
				class="pagination-item"
				v-for="(item, index) in calculatedPaginationList"
				:key="index"
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
			<li class="pagination-item">
        <span class="ellipsis" v-if="paginationTotalCount - currentPage > 3"
				>...</span
				>
				<button
					v-else
					type="button"
					class="pagination-button"
					@click="movePage(paginationList[paginationTotalCount - 2])"
					:class="
            paginationList[paginationTotalCount - 2] === currentPage
              ? 'is-active'
              : ''
          "
					:key="paginationTotalCount - 1"
				>
					{{ paginationList[paginationTotalCount - 2] }}
				</button>
			</li>
			<li class="pagination-item">
				<button
					type="button"
					class="pagination-button"
					@click="movePage(paginationList[paginationTotalCount - 1])"
					:class="
            paginationList[paginationTotalCount - 1] === currentPage
              ? 'is-active'
              : ''
          "
					:key="paginationTotalCount - 1"
				>
					{{ paginationList[paginationTotalCount - 1] }}
				</button>
			</li>
		</ul>
		<button
			class="pagination-move-button"
			type="button"
			@click="movePage(++currentPage)"
			:disabled="currentPage === paginationTotalCount"
		>
			>
		</button>
	</div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
	totalCount: {
		type: Number,
		default: 0
	},
	perPage: {
		type: Number,
		default: 20
	},
	currentPage: {
		type: Number,
		default: 1
	}
});
const emit = defineEmits(["change"]);

//	DATA
const paginationTotalCount: Ref<number> = ref<number>(Math.ceil(props.totalCount / props.perPage));
const currentPage = ref<number>(props.currentPage);
const paginationList: Ref<Array<number>> = ref(Array.from({length: paginationTotalCount.value}, (_, i) => i + 1));

// COMPUTED
const calculatedPaginationList = computed(() => {
	const currentCnt = currentPage.value;
	const totalCnt = paginationTotalCount.value;

	if (currentCnt < 5) {
		return paginationList.value.slice(2, 5);
	} else if (currentCnt >= 5 && currentCnt < totalCnt - 3) {
		return paginationList.value.slice(currentCnt - 2, currentCnt + 1);
	} else {
		return paginationList.value.slice(totalCnt - 5, totalCnt - 2);
	}
});

//	METHODS
function movePage(page: number): void {
	currentPage.value = page;
	emit("change", page);
}

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

.ellipsis {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	background-color: #fafafa;
	border: none;
	border-radius: 4px;
	font-size: 20px;
	cursor: default;
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
