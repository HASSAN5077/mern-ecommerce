import React from "react";
import {Helmet} from "react-helmet";
function Metadata({ title }) {
  return import(
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
  );
}
export default Metadata;
