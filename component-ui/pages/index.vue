<template>
	<div>
		<div></div>
		<Pagination :data="sampleData"></Pagination>
	</div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default defineComponent({
	setup() {
		const sampleData = [
			{number: 1, value: 'title1'},
			{number: 2, value: 'title2'},
			{number: 3, value: 'title3'},
			{number: 4, value: 'title4'},
			{number: 5, value: 'title5'},
			{number: 6, value: 'title6'},
			{number: 7, value: 'title7'},
			{number: 8, value: 'title8'},
			{number: 9, value: 'title9'},
			{number: 10, value: 'title10'},
			{number: 11, value: 'title11'},
			{number: 12, value: 'title12'},
			{number: 13, value: 'title13'},
			{number: 114, value: 'title14'},
		]
		return {sampleData}
	}
})

</script>
<style>
html {
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

html, body, div, span, ol, ul, li {
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

ol, ul {
	list-style: none;
}
</style>