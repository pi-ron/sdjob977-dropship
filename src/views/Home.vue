<template>
  <div class="home">
    <img alt="Schweigen logo" src="https://uploads-ssl.webflow.com/6007b4af01b37638d431e8f4/600f38e565837a5fd9994f85_Primary.svg" />
    <HelloWorld msg="Schweigen Commercial Portal"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
