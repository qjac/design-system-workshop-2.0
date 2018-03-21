<template>
  <div class="TodoItem">
  <my-textfield
  	variant="edit"
  	:value="todo.title"
  	@input="(value) => {todo.title = value}"
  	@blur="$emit(`doneEdit`, todo)"
  	@enter=$emit(`doneEdit`, todo)"
  ></my-textfield>
  <my-button
  	class="delete"
  	@click="$emit(`removeTodo`, todo)"
  >x</my-button>
  </div>
</template>

<script>
import myButton from "../Button/Button.vue";
import myTextfield from "../Textfield/Textfield.vue";

export default {
  components:{
  	myButton,
  	myTextfield
  },
  props: ["todo"]
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";
.TodoItem {
	display: flex;
	.delete {
		display: none;
	}
	&:hover .delete {
		display: block;
	}
}
</style>
