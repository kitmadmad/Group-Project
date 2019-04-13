import React from "react";

import getAllData from "../models/getAllData";

import Head from "../components/Head";
import Main from "../components/Main";

const Page = (props) => (
  <div>
    <Head title="COMP 3121 Awesome social media search page" />
    <Main data={props.data} default_keyword={props.default_keyword} />
  </div>
);

Page.getInitialProps = async ({ req, query }) => {
  const keyword = query.keyword || "";
  return {
    data: await getAllData(keyword),
    default_keyword: keyword,
  };
};

export default Page;
