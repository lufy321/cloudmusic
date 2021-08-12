import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import {TinyEmitter} from "tiny-emitter";
import { Form, Field, CellGroup } from 'vant';
import { Button } from 'vant';
import { Image as VanImage } from 'vant';
import { Tab, Tabs } from 'vant';

createApp(App)
    .use(store)
    .use(Swipe)
    .use(Form)
    .use(Field)
    .use(Tab)
    .use(Tabs)
    .use(VanImage)
    .use(CellGroup)
    .use(SwipeItem)
    .use(Button)
    .use(TinyEmitter)
    .use(router)
    .mount('#app')
