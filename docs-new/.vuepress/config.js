import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  bundler: viteBundler(),
  plugins: [
    markdownChartPlugin({
      mermaid: true,
    }),
    searchPlugin({}),
  ],
  head: [
    ['meta', { property: 'og:image', content: '/knowledge-rag/overview.png' }],
    ['link', { rel: 'icon', href: '/knowledge-rag/overview.png' }],
  ],
  theme: defaultTheme({
    lastUpdated: true,
    contributors: false,
    editLink: true,
    editLinkText: 'Suggest an edit on GitHub',
    navbar: [
      { text: 'Knowledge Base (Documentation)', link: '/knowledge/' },
      { text: 'Knowledge Base (AI Agent RAG Version)', link: '/knowledge-rag/' },
      { text: 'AI Projects', link: '/ai-projects/' },
      { text: 'Technical Content', link: '/technical-content/' },
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
            { text: 'Component', link: '/knowledge/component/component' },
            { text: 'Campaigns', link: '/knowledge-rag/campaigns/campaigns' },
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
      '/technical-content/': [
        {
          text: 'Technical Content',
          collapsible: false,
          children: [
            { text: 'How to create an AI Agent', link: '/technical-content/agent-creation' },
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
  // The Copywriting section is hidden from the portfolio: dropping its pages
  // here keeps them out of the build, the search index and the sitemap. The
  // markdown stays in the repo, so restoring it is just removing this line.
  pagePatterns: ['**/*.md', '!.vuepress', '!copywriting/**'],
})
