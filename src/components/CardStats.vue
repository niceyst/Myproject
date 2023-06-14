<template>
  <div class="stats surface-card p-4 shadow-2 border-round mb-2">
    <div class="grid">
      <div class="col">
        <div>ลาป่วย</div>
        <div>{{ stores.sick_amount }}</div>
      </div>
      <Divider layout="vertical" />
      <div class="col">
        <div>ลากิจ</div>
        <div>{{ stores.business_amount }}</div>
      </div>
      <Divider layout="vertical" />
      <div class="col">
        <div>ลาพักร้อน</div>
        <div>{{ stores.rest_amount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usedataStore } from "../stores/datastore";
const stores = usedataStore();
</script>
<style>
.stats {
  max-width: 640px;
  margin: 20px auto;
}
</style>
