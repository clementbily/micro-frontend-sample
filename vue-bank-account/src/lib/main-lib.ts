import { defineCustomElement } from "vue";
import MyBankAccount from "../components/bank-account/MyBankAccount.vue";

const MyBankAccountElement = defineCustomElement({
  // https://github.com/vuejs/router/issues/858
  components: { MyBankAccount },
  template: "<MyBankAccount />",
  styles: [
    `@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css")`,
  ],
});
export async function register() {
  customElements.define("bank-account", MyBankAccountElement);
}
export type { BankAccount, Operation } from "../models/bank-account";
