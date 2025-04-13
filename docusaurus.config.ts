import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "Anti-Pattern Driven Design Pattern Tutorial",
  tagline: "Anti-Pattern Driven Design Pattern Tutorial",
  favicon: "img/favicon.ico",

  url: "https://takt.dev",
  baseUrl: "/design-pattern/",
  trailingSlash: false,

  organizationName: "TAKT-R-D",
  projectName: "design-pattern",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
  },

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/TAKT-R-D/design-pattern/edit/main/",
          editLocalizedFiles: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/opengraph-image.png",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Design Patterns",
      logo: {
        alt: "TAKT R&D Co., Ltd.",
        src: "img/takt_logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          to: "/advanced/intro",
          label: "Advanced",
          activeBaseRegex: "/advanced/",
          position: "left",
        },
        {
          type: "search", // ← 検索を先頭に
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
            {
              label: "Advanced",
              to: "/advanced/intro",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Terms of Use",
              to: "/terms",
            },
            {
              label: "Privacy Policy",
              to: "/privacy",
            },
            {
              label: "Cookie Policy",
              to: "/cookies",
            },
            {
              label: "About Us",
              to: "/about",
            },
          ],
        },
        {
          title: "Our Services",
          items: [
            {
              label: "Lang x Lang",
              href: "https://langxlang.com",
            },
            {
              label: "Ten*Thirty - 10*30",
              href: "https://1030.takt.dev",
            },
            {
              label: "JP Colors",
              href: "https://colors.takt.dev",
            },
            {
              label: "GitHub",
              href: "https://github.com/TAKT-R-D",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TAKT R&amp;D Co.,Ltd.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["php"],
    },
    algolia: {
      appId: "OWPJUFYR8R",
      apiKey: "07e806cc3f0ce3545fd51c65d9aa9324",
      indexName: "takt",
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: "search",
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "advanced",
        path: "advanced",
        routeBasePath: "advanced",
        sidebarPath: require.resolve("./sidebars-advanced.ts"),
        editUrl: "https://github.com/TAKT-R-D/design-pattern/edit/main/",
        editLocalizedFiles: true,
      },
    ],
    require.resolve("./src/plugins/cookie-consent"),
    function customRawLoaderPlugin() {
      return {
        name: "custom-raw-loader",
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.(ts|js|py|php|txt)$/,
                  include: path.resolve(__dirname, "src/codes"),
                  use: "raw-loader",
                },
              ],
            },
          };
        },
      };
    },
  ],
};

export default config;
