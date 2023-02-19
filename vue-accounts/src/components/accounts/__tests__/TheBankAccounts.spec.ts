import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TheBankAccounts from "../TheBankAccounts.vue";

describe("TheBankAccounts", () => {
  it("renders properly", () => {
    const wrapper = mount(TheBankAccounts);
    expect(wrapper).not.toBeNull();
    const accountTitles = wrapper.findAll("h5.card-title");
    const accountTexts = wrapper.findAll("p.card-text");
    expect(accountTitles.length).toBe(3);
    expect(accountTitles[0].text()).toContain("Life insurance");
    expect(accountTitles[1].text()).toContain("Loan insurance");
    expect(accountTitles[2].text()).toContain("Retirement plan");
    expect(accountTexts.length).toBe(3);
    expect(accountTexts[0].text()).toContain("dynamic account 1");
    expect(accountTexts[1].text()).toContain("Chilql my credit");
    expect(accountTexts[2].text()).toContain("My happy future");
  });
});
