import * as React from "react";
import { DefaultLayout } from "../components/DefaultLayout";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

const IndexPage = () => {
  return (
    <Container>
      <title>Portfolio page</title>
      <DefaultLayout>
        <div className="grid lg:grid-cols-2 gap-x-32 my-56">
          <div>left content</div>
          <div className="grid">
            <p className="text-3xl mb-5">Hi! Nice to meet you!</p>
            <p className="text-violet-light mb-8">
              My name is <span className="text-white">Nadiia</span> and I'm a
              digital artist. Here I will have a short introductory text and
              perhaps a few other things. Exciting!
            </p>
            <Button>Browse my work</Button>
          </div>
        </div>
      </DefaultLayout>
    </Container>
  );
};

export default IndexPage;
