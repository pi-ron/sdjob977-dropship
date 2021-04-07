<template>
  {{ humanReadableFileSize }}
</template>

<script>
  export default {
    name: 'FileSize',
    props: {
      size: String,
      url: String 
    },
    data () {
      return {
        type: "none",
        iconClass: "none",
        humanReadableFileSize: "nah"
      }
    },
    beforeMount() {
      //Extract Extension from filename
      var re = /(?:\.([^.]+))?$/
      var ext = re.exec(this.url)[1]
      this.iconClass = "icon-"+ext+"-file-format"
      this.type = ext

     /**
       * Format bytes as human-readable text.
       * 
       * @param bytes Number of bytes.
       * @param si True to use metric (SI) units, aka powers of 1000. False to use 
       *           binary (IEC), aka powers of 1024.
       * @param dp Number of decimal places to display.
       * 
       * @return Formatted string.
       */
      function humanFileSize(bytes, si=false, dp=1) {
        const thresh = si ? 1000 : 1024;

        if (Math.abs(bytes) < thresh) {
          return bytes + ' B';
        }

        const units = si 
          ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] 
          : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
        let u = -1;
        const r = 10**dp;

        do {
          bytes /= thresh;
          ++u;
        } while (Math.round(Math.abs(bytes) * r) / r >= thresh && u < units.length - 1);


        return bytes.toFixed(dp) + ' ' + units[u];
      }
        var humanSize = humanFileSize(this.size)

        this.humanReadableFileSize = humanSize;
    }
  }
</script>

<style lang="css" scoped>
</style>
