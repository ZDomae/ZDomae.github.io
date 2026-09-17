import { defineMermaidConfig } from '@vuepress/plugin-markdown-chart/client'

defineMermaidConfig({
  theme: 'default',
  themeVariables: {
    // Keep defaults for light; dark mode auto-syncs via html.dark class in defaultTheme
  },
})
