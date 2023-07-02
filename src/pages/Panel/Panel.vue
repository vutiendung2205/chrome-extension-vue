<template>
  <div id="panel">
    <div style="display: block">
      <a-image :width="200" src="logo.jpg" :preview="false" />
    </div>
    <h3 style="text-align: center">Panel</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome!',
    };
  },
};
</script>

<style lang="css">
#panel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
