import { createApp } from 'vue'
import App from './App.vue'
import plugin from './plugins/plugin'

const ComponentVersion = {
  A: 1,
  B: 2,
}

const main = async (componentVersion: number): Promise<void> => {
  const app = createApp(App)
  await plugin(app, { componentVersion })
  app.mount('#app')
}

main(ComponentVersion.B)
