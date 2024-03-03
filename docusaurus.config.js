// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const math = require("remark-math")
const katex = require("rehype-katex")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "₿eyond",
  tagline: "The first-ever native bridge for digital assets *on* Bitcoin.",
  favicon: "img/favicon.ico",

  url: "https://docs.beyond.tech",
  baseUrl: "/",
  organizationName: "beyond-btc",
  projectName: "documentation",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          exclude: ["**.ignore.md"],
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/beyond-banner.png",

      algolia: {
        appId: "XXXXXXXXX", // The application ID provided by Algolia
        apiKey: "YYYYYYYYYYYYYYYYYYYYYY", // Public API key: it is safe to commit it
        indexName: "beyondDocs",
        placeholder: "What would you like to find?",
        contextualSearch: true, // Optional: see doc section below
        externalUrlRegex: "beyond\\.tech", // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        searchParameters: {}, // Optional: Algolia search parameters
        searchPagePath: "search", // Optional: path for search page that enabled by default (`false` to disable it)
      },

      metadata: [
        {
          name: "keywords",
          content:
            "Bitcoin, bridge, DeFi, blockchain, crypto, stablecoin, NFT, token, BRC20, Ordinal, inscription",
        },
        { name: "og:url", content: "https://docs.beyond.tech/" },
        {
          name: "og:image",
          content: "img/beyond-banner.png",
        },
        { name: "og:site_name", content: "Beyond" },
      ],

      colorMode: {
        defaultMode: "light",
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: "₿eyond",
        logo: {
          alt: "₿eyond Logo",
          src: "img/logo.svg",
        },
        hideOnScroll: true,
        // style: 'dark', // 'dark' or 'primary'
        items: [
          {
            label: "Home",
            to: "https://beyond.tech",
            position: "left",
          },
          {
            label: "App",
            to: "https://app.beyond.tech",
            position: "left",
          },
          {
            label: "Blog",
            to: "https://blog.beyond.tech",
            position: "left",
          },
          {
            href: "https://x.com/beyond__tech",
            position: "right",
            className: "navbar-twitter-link",
            "aria-label": "𝕏 (Twitter)",
          },
          {
            href: "https://connect.beyond.tech",
            position: "right",
            className: "navbar-discord-link",
            "aria-label": "Discord",
          },
          {
            href: "https://t.me/beyond_labs",
            position: "right",
            className: "navbar-telegram-link",
            "aria-label": "Telegram",
          },
          {
            href: "https://github.com/beyond-btc",
            position: "right",
            className: "navbar-github-link",
            "aria-label": "GitHub",
          },
        ],
      },

      footer: {
        links: [
          {
            title: "PROTOCOL",
            items: [
              { label: "Bridge", to: "https://app.beyond.tech" },
              { label: "Analytics", to: "https://app.beyond.tech/info" },
            ],
          },
          {
            title: "COMMUNITY",
            items: [
              { label: "Homepage", to: "https://beyond.tech" },
              { label: "Blog", to: "https://blog.beyond.tech" },
              { label: "Media", to: "https://beyond.tech/media" },
              { label: "Contact", to: "/community/contact" },
            ],
          },
          {
            title: "DEVS",
            items: [
              // { label: "Technical Docs", to: "/dev/overview" },
              { label: "Deployments", to: "/dev/deployments" },
              // { label: "Beyond SDK", to: "/dev/sdk" },
              { label: "GitHub", to: "https://github.com/beyond-btc" },
            ],
          },
        ],
        // copyright: `<i>© ${new Date().getFullYear()} Beyond Tech</i>`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
}

export default config;
