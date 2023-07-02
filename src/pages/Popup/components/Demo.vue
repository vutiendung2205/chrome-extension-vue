<template>
  <div>
    <div style="display: block">
      <a-image :width="200" src="logo.jpg" :preview="false" />
    </div>

    <div style="display: block; text-align: center; padding-top: 5px">
      <a-button type="primary" @click="handleClick"
        >Count: {{ count }}</a-button
      >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import image from '../../../assets/img/logo.jpg';
export default {
  computed: mapState({
    count: (state) => state.count,
  }),
  methods: {
    handleClick() {
      this.$store.dispatch('increment');
    },
  },
};
</script>
