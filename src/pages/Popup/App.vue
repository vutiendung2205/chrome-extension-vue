<template>
  <div id="popup">
    <Demo />
  </div>
</template>

<script>
import Demo from './components/Demo.vue';

export default {
  components: {
    Demo,
  },
  data() {
    return {
      msg: 'Welcome!',
    };
  },
};
</script>

<style lang="css">
#popup {
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
