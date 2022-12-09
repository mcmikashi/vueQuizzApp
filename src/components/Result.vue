<template>
  <div class="result">
    <div class="title">
      {{ results[getResultIndex].title }}
    </div>
    <div class="desc">
      {{ results[getResultIndex].desc }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    results: Object,
    score: Number,
  },
  computed: {
    getResultIndex() {
      let resultIndex = 0;
      this.results.forEach((element, index) => {
        if (this.score >= element.min && this.score <= element.max) {
          resultIndex = index;
        }
      });
      return resultIndex;
    },
  },
};
</script>
<style></style>
