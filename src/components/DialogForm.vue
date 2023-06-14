<script setup>
import { ref } from "vue";
import { usedataStore } from "../stores/datastore";
import { useToast } from "primevue/usetoast";



const stores = usedataStore();
const toast = useToast();

const visible = ref(false);
const newdata = ref({
  id: Math.floor(Math.random() * 10000),
  type: "",
  dates: [],
  detail: "",
});


const submit = () => {
  if (newdata.value.type === undefined || newdata.value.dates === undefined || newdata.value.detail === undefined) {
    toast.add({ severity: 'warn', summary: 'ไม่สำเร็จ', detail: 'กรุณากรอกข้อมูลไม่ครบท้วน', life: 3000 });
    return false
  }
  stores.adddata({
    id: newdata.value.id,
    type: newdata.value.type,
    dates: newdata.value.dates,
    detail: newdata.value.detail,
  });
  toast.add({ severity: 'success', summary: 'สำเร็จ', detail: 'บันทึกการลาสำเร็จ', life: 3000 });
  visible.value = false


};
</script>

<template>
  <Button label="บันทึกการลา" @click="(visible = true), (newdata = [])" />

  <Dialog v-model:visible="visible" modal header="บันทึกข้อมูลการลา" :style="{ width: '50vw' }">
    <div class="field">
      <label class="mb-3">ประเภทการลา</label>
      <div class="formgrid grid">
        <div class="field-radiobutton col-4">
          <RadioButton id="type1" value="ลาป่วย" v-model="newdata.type" />
          <label for="type1">ลาป่วย</label>
        </div>
        <div class="field-radiobutton col-4">
          <RadioButton id="type2" name="category" value="ลากิจ" v-model="newdata.type" />
          <label for="type2">ลากิจ</label>
        </div>
        <div class="field-radiobutton col-4">
          <RadioButton id="type3" name="category" value="ลาพักร้อน" v-model="newdata.type" />
          <label for="type3">ลาพักร้อน</label>
        </div>
      </div>
    </div>
    <div class="field">
      <label class="mb-3">วันที่</label>
      <div>
        <Calendar v-model="newdata.dates" selectionMode="range" :manualInput="false" class="w-full" />
      </div>
    </div>

    <div class="field">
      <label class="mb-3">รายละเอีด</label>
      <div>
        <Textarea v-model="newdata.detail" class="w-full" rows="6" />
      </div>
    </div>

    <template #footer>
      <Button label="บันทึกเวลา" icon="pi pi-check" @click="submit()" />
    </template>
  </Dialog>
</template>
