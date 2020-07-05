import React from "react"

import Layout from "../components/layout/Layout"

const Canceled = () => (
  <Layout>
    <section className="pt-5 md:pt-20">
      <div className="container mx-auto px-8">
        <h1 className="text-xl font-bold leading-none">
          Oops! Sorry to know you have cancelled the purchase.
        </h1>
        <a href="/" className="inline-block
            py-4 px-8 mt-8
            bg-primary hover:bg-primary-darker
            rounded text-white" 
          >
            Go back to Home page
          </a>
      </div>
    </section>
  </Layout>
)

export default Canceled
