<template>
	<div class="pagination">
		<button
			class="pagination-move-button"
			type="button"
			@click="movePrevPage"
			:disabled="currentPage === 1"
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
const paginationTotalCount = ref<Number>(Math.ceil(props.totalCount / props.perPage));
const currentPage = ref<Number>(props.currentPage);
const paginationList = ref(Array.from({length: paginationTotalCount.value}, (_, i) => i + 1));

//	METHODS
function movePage(page: number): void {
	currentPage.value = page;
	emit("change", page);
}

function movePrevPage(): void {
	let page = currentPage.value;
	movePage(--page);
}

function moveNextPage(): void {
	let page = currentPage.value;
	movePage(++page);
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

.pagination-button.is-active {
	background-color: royalblue;
	color: #fff;
}

button:disabled {
	background-color: lightgray;
	cursor: not-allowed;
}
</style>
