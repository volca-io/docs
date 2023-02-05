// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Volca",
  tagline: "Explore the docs and get your SaaS up and running in no time! 🚀",
  url: "https://volca.io",
  baseUrl: "/docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "volca-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Volca",
        logo: {
          alt: "Volca logo",
          src: "img/logo.svg",
          href: "https://volca.io",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "welcome",
            position: "left",
            label: "Docs",
          },
          // {
          //   type: "doc",
          //   docId: "api",
          //   position: "left",
          //   label: "API",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Purchasing Volca",
                to: "/docs/purchase",
              },
              {
                label: "Getting started",
                to: "/docs/category/getting-started",
              },
              {
                label: "Deploying to AWS",
                to: "/docs/category/deploying-to-aws",
              },
              {
                label: "Examples",
                to: "/docs/category/examples",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://join.slack.com/t/volcahq/shared_invite/zt-1kj1tnuf5-kjWH9a4XCjiiuUPi3HN2Mw",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://volca.io/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/orgs/volca-io/repositories",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Volca.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
