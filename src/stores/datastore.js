import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";

export const usedataStore = defineStore("data", () => {
  const data = ref([
    { id: 1, type: "ลาป่วย", dates: ["4/10/23", "4/15/25"], detail: "ปวดหัว" },
    { id: 2, type: "ลากิจ", dates: ["5/12/23", "5/12/23"], detail: "ไปงานบวด" },
    { id: 3, type: "ลาพักร้อน", dates: ["5/12/23", "5/12/23"], detail: "ไปงานบวด" },
    { id: 4, type: "ลากิจ", dates: ["5/12/23", "5/12/23"], detail: "ไปงานบวด" },
    { id: 5, type: "ลาพักร้อน", dates: ["5/12/23", "5/12/23"], detail: "ไปงานบวด" },
    { id: 6, type: "ลากิจ", dates: ["5/12/23", "5/12/23"], detail: "ไปงานบวด" },
  ]);

  const list_data = computed(() => data.value.reverse());
  const list_sick = computed(() =>
    data.value.filter((el) => el.type === "ลาป่วย")
  );
  const list_business = computed(() =>
    data.value.filter((el) => el.type === "ลากิจ")
  );
  const list_rest = computed(() =>
    data.value.filter((el) => el.type === "ลาพักร้อน")
  );

  const sick_amount = computed(() => list_sick.value.length);
  const business_amount = computed(() => list_business.value.length);
  const rest_amount = computed(() => list_rest.value.length);

  const adddata = (newData) => {
    data.value.push(newData);
  };


  return {
    data,
    list_data,
    sick_amount,
    business_amount,
    rest_amount,
    adddata,
  };
});
