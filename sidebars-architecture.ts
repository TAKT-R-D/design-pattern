import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  architectureSidebar: [
    //
    // Top-level guides
    //
    "index",
    "arch-principles",
    "decision-guide",
    "structure-decision-guide",

    //
    // Structural Styles
    //
    {
      type: "category",
      label: "Structural Styles",
      items: [
        "structural/index",

        // Early
        {
          type: "category",
          label: "Early / 初期構造",
          items: [
            "structural/early/index",
            "structural/early/big-ball-of-mud",
            "structural/early/transaction-script",
          ],
        },

        // Data-centric
        {
          type: "category",
          label: "Data-centric",
          items: [
            "structural/data-centric/index",
            "structural/data-centric/active-record",
            "structural/data-centric/table-module",
            "structural/data-centric/anemic-domain-model",
          ],
        },

        // Layered / Domain / Dependency Rule
        {
          type: "category",
          label: "Layered / Domain / Dependency Rule",
          items: [
            "structural/layered/index",
            "structural/layered/classic-layered",
            "structural/layered/domain-model-layered",
            {
              type: "category",
              label: "Dependency-rule-based",
              items: [
                "structural/layered/dependency-rule-layered/index",
                "structural/layered/dependency-rule-layered/hexagonal",
                "structural/layered/dependency-rule-layered/onion",
                "structural/layered/dependency-rule-layered/clean",
              ],
            },
          ],
        },

        // UI Patterns
        {
          type: "category",
          label: "UI Interaction / Presentation",
          items: [
            "structural/ui/index",
            "structural/ui/mvc",
            "structural/ui/mvp",
            "structural/ui/mvvm",
            "structural/ui/mvu",
          ],
        },

        // Flow / Pipeline
        {
          type: "category",
          label: "Flow / Pipeline",
          items: [
            "structural/flow/index",
            "structural/flow/pipe-and-filter",
            "structural/flow/batch-pipeline",
            "structural/flow/streaming-pipeline",
          ],
        },

        // Microkernel
        {
          type: "category",
          label: "Microkernel",
          items: [
            "structural/microkernel/index",
            "structural/microkernel/microkernel",
            "structural/microkernel/plugin-architecture",
          ],
        },

        // Reactive
        {
          type: "category",
          label: "Reactive / Actor",
          items: [
            "structural/reactive/index",
            "structural/reactive/actor-model",
            "structural/reactive/event-loop",
            "structural/reactive/reactive-streams",
          ],
        },

        // Supplemental
        "structural/framework-architecture-flavors",
        "structural/design-pattern-support",
      ],
    },

    //
    // System Topologies
    //
    {
      type: "category",
      label: "System Topologies",
      items: [
        "topologies/index",
        "topologies/monolith",
        "topologies/modular-monolith",
        "topologies/microservices",
        "topologies/soa",
        "topologies/serverless",
        "topologies/edge",
        "topologies/cell-based",
        "topologies/multi-region",
      ],
    },

    //
    // Integration Styles
    //
    {
      type: "category",
      label: "Integration Styles",
      items: [
        "integration/index",
        "integration/rest-grpc-graphql",
        "integration/event-driven",
        "integration/saga",
        "integration/api-gateway-bff",
        "integration/service-mesh",
        "integration/outbox-pattern",
        "integration/cdc",
      ],
    },

    //
    // Data Architecture
    //
    {
      type: "category",
      label: "Data Architecture",
      items: [
        "data/index",
        "data/data-warehouse",
        "data/data-lake-lakehouse",
        "data/cqrs",
        "data/event-sourcing",
        "data/data-mesh",
        "data/lambda-kappa",
      ],
    },

    //
    // Cross-cutting
    //
    {
      type: "category",
      label: "Cross-cutting & Socio-technical",
      items: [
        "cross-cutting/index",
        "cross-cutting/devops",
        "cross-cutting/team-topologies",
        "cross-cutting/slo-sre",
        "cross-cutting/zero-trust",
        "cross-cutting/observability",
        "cross-cutting/green-software",
      ],
    },

    //
    // References
    //
    "references",
  ],
};

export default sidebars;
