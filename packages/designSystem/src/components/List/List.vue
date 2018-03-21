<template>
  <div class="List">
  	<ul>	
  	<li
  		class="item"
  		v-for="todo in data"
  		:key="todo.id"
  	>
  		<slot name="item" :item="todo" />
  	</li>
  	</ul>
  </div>
</template>

<script>
export default {
  components:{},
  props: ["data"]
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";

.List {
	margin:0;
	padding:0;
	list-style-type: none;
	display: flex;
	flex-direction:column;

	item:not(:last-child) {
		margin-bottom: 2rem;
}
}
</style>
