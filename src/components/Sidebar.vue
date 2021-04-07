<template>
  <aside class="sidebar">
  <button v-on:click="doSomething">Filter</button>
</aside>
</template>

<script>
export default {

  name: 'Sidebar',

  methods: {
    doSomething() {
      console.log('something')
      this.$root.downloads = {
        count:1,
        records:[
            { "id": "rec5uFQAatXmkYDwI", "createdTime": "2021-03-23T04:24:50.000Z", "fields": { "name": "Manual (Hood) - CLUM12S", "slug": "manual-hood-clum12s", "_cid": "5e1d1b3d4015e22d3e6c3a69", "_id": "604acb523ffbdaada9dfff2e", "created-on": "2021-03-12T02:00:50.725Z", "updated-on": "2021-03-12T05:18:47.524Z", "published-on": "2021-03-12T05:19:27.684Z", "display-name": "CLUM12S Manual", "file": "https://uploads-ssl.webflow.com/5df2f28cd6a5f99588c5f44d/604acae7cb4d438099c7ef71_CLUM12S-Manual.pdf", "download-type": "USER MANUAL", "primary-download-category": "SCHWEIGEN IN RANGEHOOD", "secondary-download-category": "BBQ ALFRESCO", "last-synced": "2021-03-12T05:28:46.000Z", "filesize": "2.04 MB", "cad-file-type": "Not Cad", "is-cad-file": 0, "cad-model-number": "Manual (Hood) - CLUM12S", "computed-download-url": "https://uploads-ssl.webflow.com/5df2f28cd6a5f99588c5f44d/604acae7cb4d438099c7ef71_CLUM12S-Manual.pdf" } }
            ]
      }
    }
  }
};
</script>

<style lang="css" scoped>
</style>
