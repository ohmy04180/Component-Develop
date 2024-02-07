<template>
	<h1>{{ title }}</h1>
	<div></div>
	<div class="pagination">
		<button class="pagination-move-button" type="button" @click="movePrevPage" :disabled="isPrevDisabled">
			<
		</button>
		<ul class="pagination-list">
			<li class="pagination-item" v-for="item in newData" :key="item.number">
				<button type="button" class="pagination-button" :class="item.number == currentPage ? 'is-active':''"
								@click="movePage(item)">
					{{ item.number }}
				</button>
			</li>
		</ul>
		<button class="pagination-move-button" type="button" @click="moveNextPage" :disabled="isNextDisabled">
			>
		</button>
	</div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default defineComponent({
	props: ['data'],
	setup(props, {emit}) {

		//	** DATA
		// 총 게시글 수
		const totalCount: object[] = props.data;
		// 보여질 숫자 버튼 개수 (10개씩 보기, 20개씩 보기)
		const perPage = ref(10);
		// 현재 페이지 (Default: 1)
		let currentPage = ref(1);
		// 페이지네이션에 몇 개의 페이지가 보이게 할 것인지
		const pageSize = ref(10);
		// disabled 체크
		let isPrevDisabled = false;
		let isNextDisabled = false;

		let newData: object[] = [];

		if(props.data){
			newData = props.data.slice(props.data[0], perPage.value);
			isPrevDisabled = true;
		}

		//	** COMPUTED
		// data에서 보여질 페이지 개수에 맞춰서 페이지에 출력한다.
		let slicedData = computed(() => {
			// let newData: object[] = [];
			// newData = props.data.slice(props.data[0], perPage.value);
			// return newData;
			return ''
		})

		//	** METHODS
		// 숫자 버튼 클릭시 해당하는 데이터 목록을 출력한다.
		const movePage = (item) => {
			currentPage = item.number;
			console.log('클릭한 숫자: ', item.number)
			console.log('현재 선택된 숫자: ', currentPage);
		}

		// 전체 개수 / 보여질 페이지 개수
		let totalPage = Math.ceil(totalCount.length / pageSize.value);
		console.log('totalPage', totalPage)

		function movePrevPage() {
			console.log('다음 페이지로 이동');
		}

		function moveNextPage() {
			console.log('이전 페이지로 이동');
		}

		// TODO: 버릴것 임의 코드
		const title = ref('Pagination Component');

		const reversedMessage = computed(() => {
			return title.value.split('').reverse().join('');
		})

		return {
			title,
			reversedMessage,
			//
			isPrevDisabled,
			isNextDisabled,
			movePage,
			movePrevPage,
			totalCount,
			perPage,
			currentPage,
			pageSize,
			slicedData,
			newData
		}
	},
});

</script>

<style scoped>
.pagination, .pagination-move-button, .pagination-list {
	display: flex;
}

.pagination, .pagination-list {
	gap: 16px;
}

.pagination-move-button, .pagination-button {
	dislay: flex;
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