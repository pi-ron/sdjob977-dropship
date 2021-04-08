<template>
  <div class="section">
    <div class="container">
      <div class="wrapper-m">
        <div class="w-layout-grid grid-long-content-2 s-x-48">
          <Sidebar @sortBy="sortType" @changeFilterByNameValue="changeFilterByName"></Sidebar>
          <div class="page-content">
            <DownloadsTable v-bind:loading="loading" @sortBy="sortType" v-bind:downloads="filteredDownloads"></DownloadsTable>
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
    methods: {
      sortType(event) {
        this.sortMethod = event
      },
      changeFilterByName(event) {
        this.filterName = event
      }
    },
    data() {
      return {
        counter:0,
        downloads:null,
        offset:null,
        loading:true,
        sortMethod:null,
        filterName: null,
        sort: null
      }
    },
    computed: {
      filteredDownloads: function () {

        let sortedDownloads = this.downloads
        
        if (this.sortMethod == 'alphabetically asc') {
          
          sortedDownloads = sortedDownloads.sort((a,b) => {
          let fa = a.fields['display-name'].toLowerCase(), fb = b.fields['display-name'].toLowerCase();
          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
            return 0
          })
        } else if (this.sortMethod == 'alphabetically dsc') {

          sortedDownloads = sortedDownloads.sort((a,b) => {
          let fa = a.fields['display-name'].toLowerCase(), fb = b.fields['display-name'].toLowerCase();
          if (fa < fb) {
            return 1
          }
          if (fa > fb) {
            return -1
          }
            return 0
          })
        }

        if (this.filterName == null) {return sortedDownloads} //no filtering

        var items = sortedDownloads
        var result = {}
        Object.keys(items).forEach(key => {
          const item = items[key]
          const displayName = item.fields['display-name'].toLowerCase()
          if (displayName.includes(this.filterName.toLowerCase())) {
            result[key] = item
          }
        });



        // console.log(result);
        return result;
      }
    },
    mounted() {

      this.emitter.on("sort", sortMethod => {
        this.sortMethod = sortMethod;
      });

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
            
            // console.log(response.data)
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
