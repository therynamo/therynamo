import React from "react";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout description="Information about me - therynamo!">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          padding: "12px",
        }}
      >
        <div className="container">
          <h1 className="hero__title">Theryn</h1>
          <p className="hero__subtitle">
            Dad · Software Engineer · Aspiring Horticulturist
          </p>
        </div>

        <div className="container">
          <p className={styles.intro}>Hey. I do things!</p>
        </div>
      </div>
    </Layout>
  );
}
