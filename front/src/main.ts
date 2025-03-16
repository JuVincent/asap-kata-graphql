
import './style.css'
import App from './App.vue'
import apolloClient from './apolloClient';
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createApp, h, provide } from 'vue'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
})


app.provide(DefaultApolloClient, apolloClient);
app.mount("#app");
