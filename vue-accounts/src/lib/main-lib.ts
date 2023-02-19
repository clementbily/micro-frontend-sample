import { defineCustomElement } from "vue";
import TheBankAccounts from "../components/accounts/TheBankAccounts.vue";

const TheBankAccountsElement = defineCustomElement({
  // https://github.com/vuejs/router/issues/858
  components: { TheBankAccounts },
  template: "<TheBankAccounts />",
  styles: [
    `@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css")`,
  ],
});

export function register() {
  customElements.define("bank-accounts", TheBankAccountsElement);
}