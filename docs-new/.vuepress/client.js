import { defineMermaidConfig } from '@vuepress/plugin-markdown-chart/client'
import { defineClientConfig } from 'vuepress/client'
import AskBubble from './components/AskBubble.vue'

defineMermaidConfig({
  theme: 'default',
  themeVariables: {
    // Keep defaults for light; dark mode auto-syncs via html.dark class in defaultTheme
  },
})

export default defineClientConfig({
  rootComponents: [AskBubble]
})