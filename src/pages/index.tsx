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
        <div>
          <h1 className={styles.name}>Theryn</h1>
          <p className={styles.labels}>Dad</p>
          <p className={styles.labels}>Software Engineer</p>
          <p className={styles.labels}>Aspiring Horticulturist</p>
        </div>
        <div>
          <p className={styles.intro}>Hey. I do things!</p>
        </div>
      </div>
    </Layout>
  );
}
