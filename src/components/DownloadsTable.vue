<template>
  <h2>Downloads</h2>
  
  <hr />
  <div class="table">
    <div class="table-head">
      <div class="table-col">
        Name
      </div>
      <div class="table-col">
        Size
      </div>
      <div class="table-col">
        Type
      </div>
      <div class="table-col">
        Download
      </div>
    </div>
    <div class="table-body">
      <div class="table-row"  v-for="download in downloads">
        
        <div class="table-col">
          <span>{{ download.fields["display-name"] }}</span>
          
        </div>
        <div class="table-col">
          
          <!-- <FileSize v-if="download.fields.filesize" v-bind:size="download.fields.filesize" v-bind:url="download.fields.file"></Filesize> -->
          {{download.fields.filesize}}
        </div>
        <div class="table-col">
          <FileType v-bind:url="download.fields['computed-download-url']"></FileType>
        </div>
        <div class="table-col">
          <Button v-bind:href="download.fields['computed-download-url']" size="small"></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Button from './atoms/Button.vue'
import FileSize from './atoms/FileSize.vue'
import FileType from './atoms/FileType.vue'
import slug from './atoms/slug.vue'

export default {

  name: 'DownloadsTable',
  data() {
    return {
      columns: ["display-name", "type", "filesize", "file.url"],
      tableData:this.downloads,

      //Example Columns & Data
      // columns: ["erase", "id", "name", "age", "type"],
      // tableData: [
      //   { id: 1, name: "John", age: "20" },
      //   { id: 2, name: "Jane", age: "24" },
      //   { id: 3, name: "Susan", age: "16" },
      //   { id: 4, name: "Chris", age: "55" },
      //   { id: 5, name: "Dan", age: "40" }
      // ],
      options: {
        // see the options API
      }
    };
  },
  props: {
    downloads: Object
  },
  components: {
        Button,
        FileSize,
        FileType,
        slug
  }

};
</script>

<style lang="css">
.table-col, td.table-col {
  padding:5px;
  width:100%;
}

.table-row, .table-head {
  display:flex;
}
</style>
