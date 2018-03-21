<template>
  <input class="TextField"
  autocomplete="off"
  :placeholder="placeholder"
  :data-variant="variant"
  :value="value"
  @input="$emit(`input`, $event.target.value)"
  @keyup.enter="$emit(`enter`)"
  @blur="$emit(`blur`)" 
  />
</template>

<script>
export default {
  components:{},
  props: ["placeholder", "variant", "value"]
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";

@include variant(edit) {
	border: 1px solid tranparent;
	font-size: get-type(1);
	padding: get-space(0);
	width: 100%;
	&:hover, &:focus {
		border-color:get-color(secondary, 10);
		color: get-color(secondary, 10);
	}
}

@include variant(new) {
	border: none;
	font-size: get-type(2);
	padding: get-space(1);
	width: 100%;
	&:hover, &:focus {
		// border-color:get-color(secondary, 10);
		// color: get-color(secondary, 10);
	}
}
</style>
