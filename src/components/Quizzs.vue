<template>
  <h2>What quizz did you want to try ?</h2>
  <div id="quizzs">
    <div v-for="quizz in quizzs" :key="quizz.id" class="quizz">
      <div @click="selectAQuizz(quizz.id)" :id="'quizz-id-' + quizz.id">
        {{ quizz.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    quizzs: Object,
  },
  emits: ["select-a-quizz"],
  methods: {
    selectAQuizz(quizzindex) {
      this.$emit("select-a-quizz", quizzindex);
    },
  },
};
</script>
<style></style>
