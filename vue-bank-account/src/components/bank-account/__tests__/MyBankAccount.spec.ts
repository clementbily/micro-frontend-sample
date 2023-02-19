import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import MyBankAccount from "../MyBankAccount.vue";
import type { BankAccount } from "@/models/bank-account";

describe("MyBankAccount", () => {
  it("renders properly", () => {
    const bankAccount: BankAccount = {
      accountNumber: "123456",
      owner: "Clément BILY",
      type: "checking",
      operations: [
        {
          operation: "boulangerie dupont",
          amount: 1.1,
          date: "2022-10-12",
        },
      ],
    };
    const wrapper = mount(MyBankAccount, {
      props: {
        bankAccount,
      },
    });
    expect(wrapper).not.toBeNull();
    const dts = wrapper.findAll("dt");
    const dds = wrapper.findAll("dd");
    expect(dts.length).toBe(2);
    expect(dts[0].text()).toContain("account number:");
    expect(dts[1].text()).toContain("customer:");
    expect(dds.length).toBe(2);
    expect(dds[0].text()).toContain("123456");
    expect(dds[1].text()).toContain("Clément BILY");
  });
});
