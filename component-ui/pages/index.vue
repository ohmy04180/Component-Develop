<template>
	<div>
		<Pagination></Pagination>
	</div>
</template>

<script>
import Pagination from "../components/Pagination";

export default {
	components: {Pagination}
}
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

ol, ul {
	list-style: none;
}
</style>