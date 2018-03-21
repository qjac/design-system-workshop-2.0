<template>
  <input class="TextField"
  autocomplete="off"
  :placeholder="placeholder"
  :data-variant="variant"
  :value="value"
  @input="$emit(`input`, $event.target.value)"
  @keyup.enter="$emit(`enter`)" />
</template>

<script>
export default {
  components:{},
  props: []
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";
</style>
