import React, { FunctionComponent } from "react";
import Head from "next/head";
import Todos from "../components/Todos";
import dynamic from "next/dynamic";

export const Index: FunctionComponent = () => {
  const getTodoComponent = () => {
    if (process.env.MODE === "spa") {
      const NoSSRTodos = dynamic(() => import("../components/Todos"), {
        ssr: false,
      });
      return <NoSSRTodos />;
    } else {
      return <Todos />;
    }
  };

  return (
    <>
      <Head>
        <title>Lighthouse Test | Next</title>
        <meta name="description" content="Lighthouse Test | Next" />
      </Head>
      <h2>Home</h2>
      {getTodoComponent()}
    </>
  );
};

export default Index;
