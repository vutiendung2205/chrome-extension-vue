<template>
  <div id="newtab">
    <div style="display: flex; justify-content: center; padding-bottom: 20px">
      <a-image :width="300" src="logo.jpg" :preview="false" />
    </div>
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue';
export default {
  components: {
    Search,
  },
  data() {
    return {
      msg: 'Welcome!',
    };
  },
};
</script>

<style lang="css"></style>
