import { createApp } from 'vue';
import Caja from './components/Caja.vue';

const app = createApp({});
// Registrar los componentes globalmente
app.component('caja', Caja);



// Montar la aplicación Vue
app.mount('#app');
