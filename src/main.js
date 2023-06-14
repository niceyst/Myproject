import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";

import App from "./App.vue";
import router from "./router";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import RadioButton from "primevue/radiobutton";
import Calendar from "primevue/calendar";
import Textarea from "primevue/textarea";
import Divider from "primevue/divider";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.component("RadioButton", RadioButton);
app.component("Calendar", Calendar);
app.component("Textarea", Textarea);
app.component("Divider", Divider);
app.component("Toast", Toast)

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.mount("#app");
