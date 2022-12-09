import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Result from "../Result.vue";

const RESULTS = [
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
];

const DEFAULT_SCORE = 0;

let perferctScore = 3;

describe("check that the component render properly with bad score", () => {
  it("renders properly", () => {
    const wrapper = mount(Result, {
      props: { results: RESULTS, score: DEFAULT_SCORE },
    });
    expect(wrapper.vm.getResultIndex).toBe(0);
    expect(wrapper.text()).toContain(RESULTS[0].title);
    expect(wrapper.text()).toContain(RESULTS[0].desc);
  });
});

describe("check that the component render properly with perfecte score", () => {
  it("renders properly", () => {
    const wrapper = mount(Result, {
      props: { results: RESULTS, score: perferctScore },
    });
    expect(wrapper.vm.getResultIndex).toBe(1);
    expect(wrapper.text()).toContain(RESULTS[1].title);
    expect(wrapper.text()).toContain(RESULTS[1].desc);
  });
});
