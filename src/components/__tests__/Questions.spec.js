import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Questions from "../Questions.vue";

const QUESTIONS = [
  {
    id: 1,
    question: "What is 2 + 2?",
    answers: [
      { text: "4", is_correct: true },
      { text: "3", is_correct: false },
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
];
const DEFAULT_QUESTIONS_ANSWERED = 0;
const DEFAULT_PROGRESS = 0;

let updatatedQuestionsAnswered = 1;
let updatedProgress = (updatatedQuestionsAnswered / QUESTIONS.length) * 100;

describe("check that the component render properly", () => {
  it("renders properly", () => {
    const wrapper = mount(Questions, {
      props: {
        questions: QUESTIONS,
        questionsAnswered: DEFAULT_QUESTIONS_ANSWERED,
      },
    });
    expect(wrapper.text()).toContain(
      `${DEFAULT_QUESTIONS_ANSWERED + 1} out of ${
        QUESTIONS.length
      } questions answered`
    );
    expect(wrapper.find(".bar").attributes("style")).toStrictEqual(
      `width: ${DEFAULT_PROGRESS}%;`
    );
    expect(wrapper.text()).toContain(QUESTIONS[0].question);
    QUESTIONS[0].answers.forEach((answer) => {
      expect(wrapper.text()).toContain(answer.text);
    });
  });
});
describe("check that the component render properly when question answered change", () => {
  it("renders properly", () => {
    const wrapper = mount(Questions, {
      props: {
        questions: QUESTIONS,
        questionsAnswered: updatatedQuestionsAnswered,
      },
    });
    expect(wrapper.text()).toContain(
      `${updatatedQuestionsAnswered + 1} out of ${
        QUESTIONS.length
      } questions answered`
    );
    console.log(wrapper.text());
    expect(wrapper.find(".bar").attributes("style")).toStrictEqual(
      `width: ${updatedProgress}%;`
    );
    expect(wrapper.text()).toContain(QUESTIONS[1].question);
    QUESTIONS[1].answers.forEach((answer) => {
      expect(wrapper.text()).toContain(answer.text);
    });
  });
});
describe("check that the anwser result is sended by the emit fonction", () => {
  it("emit properly", () => {
    const wrapper = mount(Questions, {
      props: {
        questions: QUESTIONS,
        questionsAnswered: DEFAULT_QUESTIONS_ANSWERED,
      },
    });
    let anwser = wrapper.find(".answer");
    expect(anwser.text()).toBe(QUESTIONS[0].answers[0].text);
    anwser.trigger("click");
    const SELECT_ANSWER_EVENT = wrapper.emitted("question-answered");
    expect(SELECT_ANSWER_EVENT[0]).toEqual([
      QUESTIONS[0].answers[0].is_correct,
    ]);
  });
});
