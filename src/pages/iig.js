import CasesPage from "@/components/CaseSection/CasesPage";
import Header from "@/components/Header/Header";
import Layout from "@/components/Layout/Layout";
import NewsNetwork from "@/components/NewsSection/NewsNetwork";
import NewsOne from "@/components/NewsSection/NewsOne";
import PageHeader from "@/components/Reuseable/PageHeader";
import React from "react";

const Cases = () => {
  return (
    <Layout pageTitle="Cases" footerClassName="site-footer-three">
      <Header />
      <PageHeader page="Cases" title="Our Networks" />
      {/* <CasesPage /> */}
      <NewsNetwork />
      {/* <NewsOne showShape /> */}
    </Layout>
  );
};

export default Cases;
