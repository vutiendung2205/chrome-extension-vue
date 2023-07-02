<template>
  <p>
    <a-input-search
      v-model:value="value"
      placeholder="Seach"
      enter-button
      @search="onSearch"
      size="large"
      style="width: 500px"
    />
  </p>
</template>

<script>
import { mapState } from 'vuex';
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    return {
      value,
    };
  },
  methods: {
    onSearch(searchValue) {
      this.$store.dispatch({
        type: 'searchKeyWords',
        keys: searchValue,
      });
    },
  },
});
</script>
