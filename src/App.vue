<template>
  <header></header>
  <quizzs
    v-if="!selectedQuizz"
    :quizzs="quizzs"
    @select-a-quizz="selectAQuizz"
  />
  <div v-else class="ctr">
    <questions
      v-if="questionsAnswered < selectedQuizz.questions.length"
      :questions="selectedQuizz.questions"
      :questionsAnswered="questionsAnswered"
      @question-answered="updateScoreAndQuizz"
    />
    <result v-else :results="selectedQuizz.results" :score="score" />
    <div v-if="questionsAnswered >= selectedQuizz.questions.length">
      <button type="button" class="redo-btn" @click.prevent="redoQuizz">
        redo
      </button>
      <button
        type="button"
        class="change-quizz-btn"
        @click.prevent="changeQuizz"
      >
        change quizz
      </button>
    </div>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Result from "./components/Result.vue";
import Quizzs from "./components/Quizzs.vue";

export default {
  name: "App",
  components: {
    Questions,
    Result,
    Quizzs,
  },
  data() {
    return {
      selectedQuizz: null,
      questionsAnswered: 0,
      score: 0,
      quizzs: [
        {
          id: 1,
          title: "math",
          questions: [
            {
              id: 1,
              question: "What is 5 + 5 ?",
              answers: [
                {
                  text: "10",
                  is_correct: true,
                },
                {
                  text: "5",
                  is_correct: false,
                },
                {
                  text: "25",
                  is_correct: false,
                },
                {
                  text: "15",
                  is_correct: false,
                },
              ],
            },
            {
              id: 2,
              question: "What is 5 * 5 ?",
              answers: [
                {
                  text: "50",
                  is_correct: false,
                },
                {
                  text: "55",
                  is_correct: false,
                },
                {
                  text: "25",
                  is_correct: true,
                },
                {
                  text: "10",
                  is_correct: false,
                },
              ],
            },
            {
              id: 3,
              question: "What is 5 / 5 ?",
              answers: [
                {
                  text: "0",
                  is_correct: false,
                },
                {
                  text: "1",
                  is_correct: true,
                },
                {
                  text: "5",
                  is_correct: false,
                },
                {
                  text: "15",
                  is_correct: false,
                },
              ],
            },
          ],
          results: [
            {
              min: 0,
              max: 2,
              title: "Try again!",
              desc: "Do a little more studying and you may succeed!",
            },
            {
              min: 3,
              max: 3,
              title: "Wow, you're a genius!",
              desc: "Studying has definitely paid off for you!",
            },
          ],
        },
        {
          id: 2,
          title: "default",
          questions: [
            {
              id: 1,
              question: "What is 2 + 2?",
              answers: [
                {
                  text: "4",
                  is_correct: true,
                },
                {
                  text: "3",
                  is_correct: false,
                },
                {
                  text: "8",
                  is_correct: false,
                },
                {
                  text: "5",
                  is_correct: false,
                },
              ],
            },
            {
              id: 2,
              question: 'How many letters are in the word "Banana"?',
              answers: [
                {
                  text: "5",
                  is_correct: false,
                },
                {
                  text: "7",
                  is_correct: false,
                },
                {
                  text: "6",
                  is_correct: true,
                },
                {
                  text: "12",
                  is_correct: false,
                },
              ],
            },
            {
              id: 3,
              question: "Find the missing letter: C_ke",
              answers: [
                {
                  text: "e",
                  is_correct: false,
                },
                {
                  text: "a",
                  is_correct: true,
                },
                {
                  text: "i",
                  is_correct: false,
                },
              ],
            },
          ],
          results: [
            {
              min: 0,
              max: 2,
              title: "Try again!",
              desc: "Do a little more studying and you may succeed!",
            },
            {
              min: 3,
              max: 3,
              title: "Wow, you're a genius!",
              desc: "Studying has definitely paid off for you!",
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectAQuizz(quizzIndex) {
      this.selectedQuizz = this.quizzs.find((quizz) => quizz.id === quizzIndex);
    },
    updateScoreAndQuizz(answerResult) {
      answerResult ? this.score++ : null;
      this.questionsAnswered++;
    },
    redoQuizz() {
      this.questionsAnswered = 0;
      this.score = 0;
    },
    changeQuizz() {
      this.selectedQuizz = null;
      this.questionsAnswered = 0;
      this.score = 0;
    },
  },
};
</script>

<style></style>
