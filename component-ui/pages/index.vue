<template>
	<div class="group">
		<h1>Pagination Component</h1>
		<Pagination
			:totalCount="totalCount"
			:perPage="perPage"
			:currentPage="currentPage"
			@change="checkCurrentPage"
		></Pagination>
	</div>
</template>

<script setup lang="ts">
// DATA
const postList: object[] = [
	{title: "Title1"},
	{title: "Title2"},
	{title: "Title3"},
	{title: "Title4"},
	{title: "Title5"},
	{title: "Title6"},
	{title: "Title7"},
	{title: "Title8"},
	{title: "Title9"},
	{title: "Title10"},
	{title: "Title11"},
	{title: "Title12"},
	{title: "Title13"},
	{title: "Title14"},
	{title: "Title15"},
	{title: "Title16"},
	{title: "Title17"},
	{title: "Title18"},
	{title: "Title"},
	{title: "Title20"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title25"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title30"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title35"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title40"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title1"},
	{title: "Title2"},
	{title: "Title3"},
	{title: "Title4"},
	{title: "Title5"},
	{title: "Title6"},
	{title: "Title7"},
	{title: "Title13"},
	{title: "Title14"},
	{title: "Title15"},
	{title: "Title16"},
	{title: "Title17"},
	{title: "Title18"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title1"},
	{title: "Title2"},
	{title: "Title3"},
	{title: "Title4"},
	{title: "Title5"},
	{title: "Title6"},
	{title: "Title7"},
	{title: "Title13"},
	{title: "Title14"},
	{title: "Title15"},
	{title: "Title16"},
	{title: "Title17"},
	{title: "Title18"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title"},
	{title: "Title1"},
	{title: "Title2"},
	{title: "Title3"},
	{title: "Title4"},
	{title: "Title5"},
	{title: "Title6"},
	{title: "Title7"},
	{title: "Title13"},
	{title: "Title14"},
	{title: "Title15"},
	{title: "Title16"},
	{title: "Title17"},
	{title: "Title18"},
	{title: "Title"}
];
const totalCount: number = postList.length;
const perPage: number = 10;
const currentPage = 1;

// METHODS
function checkCurrentPage(item): void {
	console.log('Emit currentPage: ', item)
}
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

.group {
	margin-top: 120px;
}
</style>
