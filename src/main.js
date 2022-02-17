import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.use(PrimeVue);
app.use(VueAxios, axios);

app.mount("#app");
