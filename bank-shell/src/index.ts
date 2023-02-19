const lazyLoadBankAccount = () => import("bank_account/BankAccount");
const lazyLoadBankAccounts = () => import("bank_accounts/BankAccounts");

const lazyLoadedModules = Promise.all([
  lazyLoadBankAccount(),
  lazyLoadBankAccounts(),
]);
lazyLoadedModules.then(([bankAccountModule, bankAccountsModule]) => {
  bankAccountModule.default.register();
  bankAccountsModule.default.register();
  const bankAccount = {
    accountNumber: "250256",
    
    type: "saving",
    owner: "Clément BILY",
    operations: [
      {
        date: "12/12/2022",
        operation: "starbucks coffee, INC",
        amount: 10.25,
      },
      {
        date: "05/12/2022",
        operation: "Uber corp",
        amount: 200,
      },
    ],
  };
  const bankAccountElement = document.createElement("bank-account");
  Object.assign(bankAccountElement, { bankAccount });
  const rootDiv = document.getElementById("root");
  rootDiv.appendChild(bankAccountElement);
  rootDiv.appendChild(document.createElement("bank-accounts"));
});
