<script setup lang="ts">
import { reactive } from "vue";

interface AccountOverview {
  type: string;
  name: string;
}

const accounts: AccountOverview[] = reactive([
  {
    name: "dynamic account 1",
    type: "Life insurance",
  },
  {
    name: "Chill my credit",
    type: "Loan insurance",
  },
  {
    name: "My happy future",
    type: "Retirement plan",
  },
]);
</script>
<template>
  <div class="container py-4 px-3 mx-auto">
    <div class="row">
      <div class="col">
        <h2 class="display-6">Other accounts</h2>
        <div class="row">
          <div class="col" v-for="(account, index) in accounts" :key="index">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">{{ account.type }}</h5>
                <p class="card-text">{{ account.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
