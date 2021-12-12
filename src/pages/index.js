import * as React from "react";
import { Link } from "gatsby";

import { DefaultLayout } from "../components/DefaultLayout";
import { MyLink } from "../components/MyLink";
import { Container } from "../components/Container";

const IndexPage = () => {
  return (
    <Container>
      <title>Portfolio page</title>
      <DefaultLayout>
        <div className="grid lg:grid-cols-2 gap-x-32 my-56">
          <div className="mb-32 lg:mb-0">left content</div>
          <div>
            <p className="text-3xl mb-5">Hi! Nice to meet you!</p>
            <p className="text-violet-light mb-10">
              My name is <span className="text-white">Nadiia</span> and I'm a
              digital artist. Here I will have a short introductory text and
              perhaps a few other things. Exciting!
            </p>
            <MyLink>Browse my work</MyLink>
          </div>
        </div>
      </DefaultLayout>
    </Container>
  );
};

export default IndexPage;
