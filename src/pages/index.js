import * as React from "react";
import { Link } from "gatsby";

import { DefaultLayout } from "../components/DefaultLayout";
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
            <Link
              to="#work"
              className="bg-gradient-to-b from-violet to-violet-dark font-bold py-3 px-8 rounded-full inline-block"
            >
              Browse my work
            </Link>
          </div>
        </div>
        <div className="my-56">
          <div className="grid mx-auto max-w-lg text-center mb-10">
            <p className="text-3xl mb-5">My work</p>
            <p className="text-violet-light">
              Here is a different subheading text explaining this section. Well,
              it can certainly take its time to make a point. It's okay.
            </p>
          </div>
          <div className="uppercase font-medium tracking-widest relative text-xs text-violet-light text-opacity-60 text-center mb-5">
            <p className="relative inline-block bg-gray-800 z-10 px-4">
              Choose category
            </p>
            <div className="absolute w-full h-px border-gray-700 border-b inset-y-0 my-auto" />
          </div>
          <div className="flex justify-center mb-10">
            <Link to="#">
              <button className="bg-gradient-to-b focus:from-violet focus:to-violet-dark px-6 rounded-full w-max">
                3D
              </button>
            </Link>
            <Link to="#">
              <button className="bg-gradient-to-b focus:from-violet focus:to-violet-dark px-6 rounded-full w-max">
                Drawing
              </button>
            </Link>
            <Link to="#">
              <button className="bg-gradient-to-b focus:from-violet focus:to-violet-dark px-6 rounded-full w-max">
                Painting
              </button>
            </Link>
          </div>
          <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-10 bg-gray-900 p-10 rounded-2xl bg-opacity-50">
            <div className="rounded-lg bg-white">1</div>
            <div className="rounded-lg bg-white">2</div>
            <div className="rounded-lg bg-white">3</div>
          </div>
        </div>
      </DefaultLayout>
    </Container>
  );
};

export default IndexPage;
