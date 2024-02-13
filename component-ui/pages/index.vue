<template>
	<div class="group">
		<h1>Pagination Component</h1>
		<Pagination
			:totalCount="totalCount"
			:perPage="perPage"
			@checkCurrentPage="checkCurrentPage"
		></Pagination>
	</div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({

	setup() {
		// DATA
		// 게시글 리스트
		const postList: object[] = [
			{title: "Title1", postContent: "This is Content"},
			{title: "Title2", postContent: "This is Content"},
			{title: "Title3", postContent: "This is Content"},
			{title: "Title4", postContent: "This is Content"},
			{title: "Title5", postContent: "This is Content"},
			{title: "Title6", postContent: "This is Content"},
			{title: "Title7", postContent: "This is Content"},
			{title: "Title8", postContent: "This is Content"},
			{title: "Title9", postContent: "This is Content"},
			{title: "Title10", postContent: "This is Content"},
			{title: "Title11", postContent: "This is Content"},
			{title: "Title12", postContent: "This is Content"},
			{title: "Title13", postContent: "This is Content"},
			{title: "Title14", postContent: "This is Content"},
			{title: "Title15", postContent: "This is Content"},
			{title: "Title16", postContent: "This is Content"},
			{title: "Title17", postContent: "This is Content"},
			{title: "Title18", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title20", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title25", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title30", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title35", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title40", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"},
			{title: "Title", postContent: "This is Content"}
		];
		// 총 게시글 수
		const totalCount: number = postList.length;
		// 보여질 게시글 개수 (10개씩 보기, 20개씩 보기)
		const perPage: number = 10;

		// METHODS
		function checkCurrentPage(item): void {
			console.log('emit item: ', item)
		}

		return {
			postList,
			totalCount,
			perPage,
			checkCurrentPage
		};
	}
});
</script>
<style>
html {
	width: 100%;
	height: 100vh;
	display: flex;
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

.group{
	margin-top: 120px;
}
</style>
