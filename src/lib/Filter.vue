<template lang="html">
  <div class="wp">
    组件内容{{color}}
  </div>
</template>

<script>
/**
 * The only true button.
 */
export default {
  name: 'filter-wp',
  props: {
    /**
    * The color for the button.
    */
    color: {
      type: String,
      default: '#333',
    },
  },
};
</script>

<style lang="css">
</style>
