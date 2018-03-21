<template>
  <h1 class="Title"> <slot/> </h1>
</template>

<script>
export default {
  components:{},
  props: []
};
</script>

<style lang="scss" scoped>
@import "../../utilities/utilities";

.Title {
  color: get-color(primary, 0);
  font-size: get-size(4);
  text-align: center;
}
</style>
