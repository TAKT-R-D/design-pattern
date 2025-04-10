import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Anti-Pattern Driven",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Start from common anti-patterns to understand why they fail, and how
        design patterns can improve them. Learn practical design through
        real-world code examples.
      </>
    ),
  },
  {
    title: "Focus on the Structure",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Instead of memorizing pattern names and jargon, aim to explain "why the
        structure works" in your own words. Focus on the essence of design and
        develop structural intuition.
      </>
    ),
  },
  {
    title: "Refactoring by Choice",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        For each anti-pattern, multiple design pattern-based solutions are
        introduced. Learn to compare and choose patterns depending on the
        situation.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
