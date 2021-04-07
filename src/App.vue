<template>
<!--   <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    {{ counter }}
  </div>
  <router-view/> -->
 
  <div class="section">
    <div class="container">
      <div class="wrapper-m">
        <div class="w-layout-grid grid-long-content-2 s-x-48">
          <Sidebar></Sidebar>
          <div class="page-content">
            <DownloadsTable v-if="!loading" v-bind:downloads="downloads"></DownloadsTable>
            <div v-if="loading">
              <div class="s-p-48">Loading...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Sidebar from './components/Sidebar.vue'
  import DownloadsTable from './components/DownloadsTable.vue'

  export default {
    name: 'App',
    components: {
      Sidebar,
      DownloadsTable
    },
    methods: {},
    data() {
      return { 
        counter:0,
        downloads:null,
        offset:null,
        loading:false
      }
    },
    mounted() {

      var axiosCreate = this.axios
        .create({
            baseURL: 'https://timdaff.api.stdlib.com/sd977-frontend-api@0.1.2/airtable/',
            headers: {
                'Content-Type': 'application/json'
            }
        })

      axiosCreate.get('/getAllRecords?table=Downloads')
          .then(response => {
            this.downloads = response.data.records
            this.counter = response.data.count
            this.loading = false
            console.log(response.data)
            if(response.offset) {
              this.offset = response.offset; 
            } else { this.offset = null }
          })
          .catch(error => {
              console.log(error)
              this.error = error
              this.errored = true
          })
          .finally(() => this.loading = false)
    },
  }

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
