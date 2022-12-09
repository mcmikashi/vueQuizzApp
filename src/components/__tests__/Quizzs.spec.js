import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Quizzs from "../Quizzs.vue";

const QUIZZS = [
  { id: 5, title: "default" },
  { id: 6, title: "math" },
  { id: 7, title: "programming" },
];

describe("check that the component render properly", () => {
  it("renders properly", () => {
    const wrapper = mount(Quizzs, { props: { quizzs: QUIZZS } });
    expect(wrapper.text()).toContain("What quizz did you want to try ?");
    QUIZZS.forEach((quizz) => {
      expect(wrapper.text()).toContain(quizz.title);
    });
  });
});

describe("check that the index of the quizz is sended by the emit fonction", () => {
  it("emit properly", () => {
    const wrapper = mount(Quizzs, { props: { quizzs: QUIZZS } });
    wrapper.find(`#quizz-id-${QUIZZS[0].id}`).trigger("click");
    const SELECT_QUIZZ_EVENT = wrapper.emitted("select-a-quizz");
    expect(SELECT_QUIZZ_EVENT[0]).toEqual([QUIZZS[0].id]);
  });
});
