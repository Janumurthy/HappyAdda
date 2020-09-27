import React from "react";
import termsAndConditions from '../data/termsandconditions-data.js';

import Layout from "../components/layout/Layout"

const PrivacyPolicy = () => (
  <Layout>
    <section className="pt-5 md:pt-20">
      <div className="container mx-auto px-8">
        <div dangerouslySetInnerHTML={{ __html: termsAndConditions.content }} />
      </div>
    </section>
  </Layout>
)

export default PrivacyPolicy;
