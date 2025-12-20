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
    title: "アンチパターン駆動",
    Svg: require("@site/static/img/undraw_alert_w756.svg").default,
    description: (
      <>
        よくある「ダメな実装」から出発し、なぜそれが問題なのか、どう改善できるのかを設計パターンで示す。
        現場のリアルなコードを題材に、実践的な設計感覚を養う。
      </>
    ),
    link: "/docs/intro",
  },
  {
    title: "構造で学ぶ",
    Svg: require("@site/static/img/undraw_design-components_529l.svg").default,
    description: (
      <>
        パターン名や用語の暗記ではなく、「なぜその構造が有効か」を自分の言葉で説明できることを目指す。
        設計の本質にフォーカスし、構造に対する感覚を育てる。
      </>
    ),
    link: "/advanced/intro",
  },
  {
    title: "選べるリファクタリング",
    Svg: require("@site/static/img/undraw_solution-mindset_pit7.svg").default,
    description: (
      <>
        1つのアンチパターンに対して複数のパターンで改善例を提示。
        設計の選択肢とその違いを比較しながら、状況に応じた使い分けを学べる。
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
          <Link className="button button--secondary button--sm" to={link}>
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
