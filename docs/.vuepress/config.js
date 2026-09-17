import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'

export default defineUserConfig({
  bundler: viteBundler(),
  plugins: [
    markdownChartPlugin({
      mermaid: true,
    }),
  ],
  theme: defaultTheme({
    navbar: [
      { text: 'Knowledge Base (Documentation)', link: '/knowledge/' },
      { text: 'Knowledge Base (AI Agent RAG Version)', link: '/knowledge-rag/' },
      { text: 'AI Projects', link: '/ai-projects/' },
      { text: 'Copywriting', link: '/copywriting/' },
      { text: 'SEO Guides', link: '/seo-guides/' },
      { text: 'News Articles', link: '/news-articles/' }
    ],
    sidebar: {
      '/knowledge/': [
        {
          text: 'Knowledge Base',
          collapsible: false,
          children: [
            { text: 'Overview', link: '/knowledge/overview/overview'},
            { text: 'Access Control', link: '/knowledge/access-control/permissions' },
            { text: 'Campaigns', link: '/knowledge/campaigns/campaigns' },
            { text: 'Data Import', link: '/knowledge/data-import/data-import' },
          ],
        },
      ],
      '/knowledge-rag/': [
        {
          text: 'Knowledge Base (AI Agent RAG Version)',
          collapsible: false,
          children: [
            { text: 'Overview', link: '/knowledge-rag/overview/overview' },
            { text: 'Access Control', link: '/knowledge-rag/access-control/permissions' },
            { text: 'Campaigns', link: '/knowledge-rag/campaigns/campaigns' },
            { text: 'Data Import', link: '/knowledge-rag/data-import/data-import' },
          ],
        },
      ],
      '/ai-projects/': [
        {
          text: 'AI Projects',
          collapsible: false,
          children: [
            { text: 'AI Projects', link: '/ai-projects/' },
            { text: 'Knowledge Base Agent', link: '/ai-projects/knowledge-base-agent' },
            { text: 'Technical Writing Agent', link: '/ai-projects/techwriting-agent' },
            { text: 'Sports Fantasy Lineup Agent', link: '/ai-projects/fantasy-agent' },
          ],
        },
      ],
      '/copywriting/': [
        {
          text: 'Copywriting',
          collapsible: false,
          children: [
            { text: 'Facebook Ad', link: '/copywriting/facebook-ad' },
            { text: 'Email 1', link: '/copywriting/tornado' },
            { text: 'Email 2', link: '/copywriting/quake' },
          ],
        },
      ],
      '/seo-guides/': [
        {
          text: 'SEO Guides',
          collapsible: false,
          children: [
            { text: 'SEO Guides', link: '/seo-guides/' },
          ],
        },
      ],
      '/news-articles/': [
        {
          text: 'News Articles',
          collapsible: false,
          children: [
            { text: 'News Articles', link: '/news-articles/' },
          ],
        },
      ],
    },
  }),

  lang: 'en-US',
  title: 'Portfolio',
  description: 'Local documentation portfolio',
  base: '/',
})
