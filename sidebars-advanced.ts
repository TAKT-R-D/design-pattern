import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  advancedSidebar: [
    "intro",
    {
      type: "category",
      label: "Composite Pattern",
      items: [
        "composites/intro",
        "composites/strategy-template",
        "composites/observer-mediator",
        "composites/command-memento",
        "composites/facade-iterator",
        "composites/proxy-strategy",
        "composites/state-strategy",
        "composites/bridge-strategy",
        "composites/more",
      ],
    },
    {
      type: "category",
      label: "Pattern Comparison",
      items: [
        "comparisons/intro",
        "comparisons/strategy-template",
        "comparisons/adapter-bridge",
        "comparisons/factory-abstract",
        "comparisons/decorator-proxy",
        "comparisons/state-strategy",
        "comparisons/command-strategy",
        "comparisons/observer-mediator",
        "comparisons/proxy-facade",
        "comparisons/singleton-di",
        "comparisons/command-template",
      ],
    },
    {
      type: "category",
      label: "Practical Examples",
      items: [
        "practical/intro",
        "practical/di-strategy-testing",
        "practical/observer-state-ui",
        "practical/command-memento-undo",
        "practical/proxy-flyweight-api",
        "practical/composite-mediator-ui",
        "practical/proxy-command-authorization",
        "practical/factory-singleton-config",
        "practical/factory-proxy-authresource",
      ],
    },
  ],
};

export default sidebars;
