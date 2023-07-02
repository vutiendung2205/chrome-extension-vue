<template>
  <div style="padding-top: 20px; text-align: center">
    <a-button type="primary" @click="handleClick">Count: {{ count }}</a-button>
  </div>
</template>
<script>
import { mapState } from 'vuex';

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
