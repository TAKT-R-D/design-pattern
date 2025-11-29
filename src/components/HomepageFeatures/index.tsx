import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tutorial",
    Svg: require("@site/static/img/undraw_alert_w756.svg").default,
    description: (
      <>
        Learn design patterns by refactoring common anti-patterns.
        Understand "why" code smells and how to improve it with proven solutions.
      </>
    ),
    link: "/docs/intro",
  },
  {
    title: "Advanced",
    Svg: require("@site/static/img/undraw_design-components_529l.svg").default,
    description: (
      <>
        Explore applied design by combining multiple patterns.
        Dive into complex scenarios and learn how to orchestrate patterns effectively.
      </>
    ),
    link: "/advanced/intro",
  },
  {
    title: "Architecture",
    Svg: require("@site/static/img/undraw_solution-mindset_pit7.svg").default,
    description: (
      <>
        Deep dive into software architecture and design principles.
        Discover the underlying patterns that support robust and scalable systems.
      </>
    ),
    link: "/architecture/intro",
  },
];

function Feature({ title, Svg, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--sm"
            to={link}
          >
            Learn More
          </Link>
        </div>
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
