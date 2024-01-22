import { TrackOpTypes } from "vue";

export default {
  title: 'TET',
  description: 'TET tutorial',
  themeConfig: {
    logo: './getting-started/EcoLogicPlatform.ico',
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/Evavic44/adocs' },
        { icon: 'twitter', link: 'https://twitter.com/victorekea' },
        { icon: 'discord', link: '', target: '_blank' }
      ]
    },
    nav: [
      { text: 'Home', link: '/index' },
      { text: 'Getting started', link: '/getting-started/introduction-to-tet.html' },
      { text: 'Documentation', link: '/Documentation/usingTET/before-you-start.html' },
      { text: 'Other', items: [{ text: 'Birt', link: '/getting-started/what-is-tet' }, { text: 'FOP', link: '/getting-started/what-is-tet' }] }
    ],
    sidebar: {
      '/getting-started/': [
        {
          text: 'Introduction to TET',
          collapsed: true,
          items: [
            { text: 'Introduction to TET', link: '/getting-started/introduction-to-tet' },
            { text: 'What is TET?', link: '/getting-started/what-is-tet' },
            { text: 'Create an UI', link: '/getting-started/Create an UI' }
          ]
        }
      ],
      '/Documentation/': [
        {
          text: 'Using the Eco Logic Platform',
          items: [
            { text: 'Before you start', link: '/Documentation/usingTET/before-you-start' },
            { text: 'Archiving', collapsed: true, items: [{ text: 'Archive-preparation', link: '/Documentation/usingTET/Archiving/Archive-preparation' }, { text: 'How to archive data', link: '/Documentation/usingTET/Archiving/Archive-preparation' }, { text: 'How to view archived data', link: '/Documentation/usingTET/Archiving/Archive-preparation' }] },
            {
              text: 'Modeling a System', collapsed: true, items: [{ text: 'Process Model', link: '/Documentation/usingTET/Archiving/Archive-preparation' }, { text: 'About Subjects', collapsed: true, items: [{ text: 'Life Cycle', link: '/Documentation/usingTET/Archiving/Archive-preparation' }, { text: 'Data Structure', link: '/Documentation/usingTET/Archiving/Archive-preparation' }, { text: 'Business Logic', link: '/Documentation/usingTET/Archiving/Archive-preparation' }] }, { text: 'Sections', link: '/Documentation/usingTET/Archiving/Archive-preparation' }]
            },
          ]
        }
      ]
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-present Ab Ovo",
    }
  }
}