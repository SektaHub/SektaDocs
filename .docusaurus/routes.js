import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f8a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '67b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '5b5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '0b8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'd5e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '931'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'fe9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '758'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '745'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '4f0'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ced'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '3ab'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e97'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '0e3'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a55'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '78d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'c5a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '7ec'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a76'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '84a'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e16'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---extras',
                component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/Docosaurus/tutorial-basics/congratulations', '100'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/Docosaurus/tutorial-basics/create-a-blog-post', '02a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/Docosaurus/tutorial-basics/create-a-document', 'b9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/Docosaurus/tutorial-basics/create-a-page', 'a14'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/Docosaurus/tutorial-basics/deploy-your-site', '2ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/Docosaurus/tutorial-basics/markdown-features', '1fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/Docosaurus/tutorial-extras/manage-docs-versions', '6e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docosaurus/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/Docosaurus/tutorial-extras/translate-your-site', 'f20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/SektaReels/',
                component: ComponentCreator('/docs/SektaReels/', '7e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '701'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
