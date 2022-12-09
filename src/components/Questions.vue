<template>
  <div class="questions-ctr">
    <div class="progress">
      <div class="bar" :style="{ width: `${progressBarWidth}%` }"></div>
      <div class="status">
        {{ currentQuestion }} out of {{ questions.length }} questions answered
      </div>
    </div>
    <div
      class="single-question"
      v-for="(question, index) in questions"
      :key="question.id"
      v-show="questionsAnswered == index"
    >
      <div class="question">{{ question.question }}</div>
      <div class="answers">
        <div
          class="answer"
          v-for="answer in question.answers"
          :key="answer.text"
          @click.prevent="selectAnswered(answer.is_correct)"
        >
          {{ answer.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questions: Object,
    questionsAnswered: Number,
  },
  emits: ["question-answered"],
  methods: {
    selectAnswered(answerResult) {
      this.$emit("question-answered", answerResult);
    },
  },
  computed: {
    currentQuestion() {
      return this.questionsAnswered + 1;
    },
    progressBarWidth() {
      return (this.questionsAnswered / this.questions.length) * 100;
    },
  },
};
</script>

<style></style>
