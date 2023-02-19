<script setup lang="ts">
import type { BankAccount } from "../../models/bank-account";

defineProps<{ bankAccount?: BankAccount }>();
</script>

<template>
  <div class="container py-4 px-3 mx-auto">
    <header class="row">
      <div class="bg-light p-5 rounded col-12">
        <h1 class="h2">Customer account</h1>
        <dl>
          <dt>account number:</dt>
          <dd>{{ bankAccount?.accountNumber }}</dd>
          <dt>customer:</dt>
          <dd>{{ bankAccount?.owner }}</dd>
        </dl>
      </div>
    </header>
    <div class="row">
      <hr class="mt-5 mb-4" />
    </div>
  </div>
</template>

<style scoped></style>
