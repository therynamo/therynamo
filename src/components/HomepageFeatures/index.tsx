import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Dad",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>I love my family, and I love being a dad!</>,
  },
  {
    title: "Software Engineer",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Personally, and professionally, I enjoy creating instruments, tools, and
        software.
      </>
    ),
  },
  {
    title: "Wanna-be Horticulturist",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>My passion is simply growing things. Plants truly are facinating!</>
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
