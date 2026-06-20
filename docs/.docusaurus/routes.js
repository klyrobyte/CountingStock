import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', 'ec3'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'b14'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4f6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '096'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '394'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '731'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '4fa'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'dfe'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '53a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '82d'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'cb5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'efd'),
            routes: [
              {
                path: '/docs/api',
                component: ComponentCreator('/docs/api', '213'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/auth',
                component: ComponentCreator('/docs/api/auth', 'b37'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/devices',
                component: ComponentCreator('/docs/api/devices', '641'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/health',
                component: ComponentCreator('/docs/api/health', '4ee'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/master-data',
                component: ComponentCreator('/docs/api/master-data', 'e00'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/privileges',
                component: ComponentCreator('/docs/api/privileges', '2b4'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/qr',
                component: ComponentCreator('/docs/api/qr', 'af3'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/scans',
                component: ComponentCreator('/docs/api/scans', '207'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/stock',
                component: ComponentCreator('/docs/api/stock', '3f9'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/stock-analytics',
                component: ComponentCreator('/docs/api/stock-analytics', 'c2f'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/tasks',
                component: ComponentCreator('/docs/api/tasks', '082'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/api/users',
                component: ComponentCreator('/docs/api/users', '6dc'),
                exact: true,
                sidebar: "apiSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '942'),
                exact: true
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '93d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', 'c2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/tutorial-basics/create-a-document', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/tutorial-basics/create-a-page', '539'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', 'feb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', '764'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '898'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
