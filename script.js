import { createApp, ref, onMounted } from "vue";
import App from "./App.vue";

const notes = ref([
  {
    note: "citrus",
    color: "#f9ff52",
  },
  {
    note: "chocolate",
    color: "#f9ff52",
  },
]);

const app = createApp({});
