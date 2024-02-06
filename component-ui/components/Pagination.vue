<template>
	<div class="pagination">
		<button class="pagination-move-button" type="button">
			<<
		</button>
		<button class="pagination-move-button" type="button">
			<
		</button>
		<ul class="pagination-list">
			<li class="pagination-item">
				<button type="button" class="pagination-button">
					1
				</button>
			</li>
		</ul>
		<button class="pagination-move-button" type="button">
			>
		</button>
		<button class="pagination-move-button" type="button">
			>>
		</button>
	</div>
</template>

<script>
export default {}
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
	border-color: #333;
	font-size: 20px;
}
</style>