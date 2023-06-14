<script setup>
import DataTable from "./components/DataTable.vue";
import DialogForm from "./components/Dialogform.vue";
import CardStats from "./components/CardStats.vue";

</script>

<template>
  <div class="text-center mb-2">
    <DialogForm />
  </div>
  <div class="text-center">
    <CardStats />
  </div>
  <DataTable />

  <Toast />
</template>

