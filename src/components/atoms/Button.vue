<template>
  <a v-bind:class="size" class="button secondary w-inline-block" v-bind:href="href">
      <div class="button-text">
          {{ text }}
      </div>
  </a>
</template>

<script>
export default {

  name: 'Button',

  data() {
    return {
      class: "button small secondary w-inline-block"
    };
  },
  props: {
    href: {
      type: String, // String, Number, Boolean, Function, Object, Array
      required: true,
      default: "#",
    },
    size: {
      type: String,
      default: "large"
    },
    text: {
      default: "Download"
    }
  },
};
</script>

<style lang="css" scoped>
</style>
