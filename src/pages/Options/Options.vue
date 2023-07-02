<template>
  <div id="options">
    <div style="display: block">
      <a-image :width="500" src="logo.jpg" :preview="false" />
    </div>
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
#options {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
