<template>
  <aside class="sidebar">
    <button v-on:click="updateSort('alphabetically asc')">Sort Name Ascending</button>
    <button v-on:click="updateSort('alphabetically dsc')">Sort Name Descending</button>
    <input v-on:input="updateNameFilter($event.target.value)" type="text" />
  </aside>
</template>

<script>
export default {

  name: 'Sidebar',
  emits: ['sortBy','changeFilterByNameValue'],
  methods: {
    updateSort(event) {
      this.$emit('sortBy',event)
      // console.log(event)
    },
    updateNameFilter(value) {
      this.$emit('changeFilterByNameValue',value)
    }
  }
};
</script>

<style lang="css" scoped>
</style>
