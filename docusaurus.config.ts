import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Design Pattern Tutorial",
  tagline: "Anti-Pattern Driven Design Pattern Tutorial",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TAKT-R-D", // Usually your GitHub org/user name.
  projectName: "design-pattern", // Usually your repo name.

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
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
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
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "advanced",
        path: "advanced",
        routeBasePath: "advanced",
        sidebarPath: require.resolve("./sidebars-advanced.ts"),
        // editUrl: "https://github.com/your-org/your-repo/edit/main/",
      },
    ],
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
