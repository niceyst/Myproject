<template>
  <div class="text-center mb-2">
    <Calendar v-model="dates_m" view="month" dateFormat="MM yy" @date-select="filtersmonth" showIcon />
  </div>
  <div class="tableStyle">
    <DataTable :value="data">
      <Column header="วันที่" style="width: 30%">
        <template #body="item">
          {{ dateformat(item.data.dates[0]) }} -
          {{ dateformat(item.data.dates[1]) }}
        </template>
      </Column>
      <Column field="type" header="ประเภท" style="width: 30%"></Column>

      <Column field="detail" header="รายละเอีด" style="width: 35%"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import "dayjs/locale/th";
import { ref, onMounted } from "vue";
import { usedataStore } from "../stores/datastore";

const stores = usedataStore();
const data = ref([]);
const dates_m = ref()

onMounted(() => {
  data.value = stores.list_data
})
const filtersmonth = () => {
  if (dates_m.value !== null) {
    data.value = stores.list_data.filter((el) =>
      dayjs(el.dates[0]).format("MM/YYYY") === dayjs(dates_m.value).format("MM/YYYY"))
  }
}
const dateformat = (date) => {
  return dayjs(date).locale("th").format("DD MMM YY");
};

</script>
<style scoped>
.tableStyle {
  max-width: 650px;
  margin: 20px auto;
}
</style>
