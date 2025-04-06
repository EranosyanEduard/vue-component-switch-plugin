import { type FunctionPlugin } from 'vue'

const plugin: FunctionPlugin<{ componentVersion: number }> = async (app, { componentVersion }) => {
  switch (componentVersion) {
    case 1:
      app.component('VLabel', (await import('../components-v1/VLabel.vue')).default)
      import('../styles/version_1.css')
      break
    case 2:
      app.component('VLabel', (await import('../components-v2/VLabel.vue')).default)
      import('../styles/version_2.css')
    default:
      break
  }
}

export default plugin
