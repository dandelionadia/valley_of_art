import * as React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { AnimatePresence, motion } from "framer-motion";

import { DefaultLayout } from "../components/DefaultLayout";
import { Container } from "../components/Container";
import { ButtonLink } from "../components/ButtonLink";
import { Grid } from "../components/Grid";

const imageItem = {
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    y: -10,
  },
};

const IndexPage = ({ data }) => {
  const allImages = data.images.nodes;
  const [activeCategory, setCategory] = React.useState("All");
  const [images, setImages] = React.useState(allImages);
  const categories = new Set(["All"]);
  allImages.forEach((image) => {
    categories.add(image.frontmatter.category);
  });

  React.useEffect(() => {
    const nextImages = allImages.filter((image) => {
      if (activeCategory === "All") {
        return true;
      }
      return image.frontmatter.category === activeCategory;
    });

    setImages(nextImages);
  }, [activeCategory, allImages]);

  const selectCategory = (category) => {
    setCategory(category);
  };

  return (
    <Container>
      <title>Portfolio page</title>
      <DefaultLayout>
        <Grid className="my-56">
          <div className="self-center col-span-6 justify-self-center">
            left content
          </div>
          <div className="col-span-6">
            <p className="mb-5 text-6xl font-extrabold">
              Hi!
              <br />
              Nice to meet you!
            </p>
            <p className="mb-10 text-lg text-violet-light">
              My name is <span className="text-white">Nadiia</span> and I'm a
              digital artist. Here I will have a short introductory text and
              perhaps a few other things. Exciting!
            </p>
            <ButtonLink to="#work">Browse my work</ButtonLink>
          </div>
        </Grid>
        <div className="my-24 lg:my-56">
          <div className="grid max-w-lg mx-auto mb-10 text-center">
            <h2 id="work" className="mb-5 text-4xl font-extrabold">
              My work
            </h2>
            <p className="text-lg text-violet-light">
              Here is a different subheading text explaining this section. Well,
              it can certainly take its time to make a point. It's okay.
            </p>
          </div>
          <div className="relative mb-5 text-xs font-medium tracking-widest text-center uppercase text-violet-light text-opacity-60">
            <p className="relative z-10 inline-block px-4 bg-gray-800">
              Choose category
            </p>
            <div className="absolute inset-y-0 w-full h-px my-auto border-b border-gray-700" />
          </div>
          <div className="flex justify-center gap-4 mb-10">
            {Array.from(categories).map((category) => {
              const isSelected = category === activeCategory;

              return (
                <button
                  key={category}
                  className={`px-4 py-0.5 rounded-full bg-gradient-to-b w-max ${
                    isSelected ? "from-violet to-violet-dark shadow-md" : ""
                  }`}
                  onClick={() => selectCategory(category)}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <motion.div className="container grid gap-10 p-10 bg-gray-900 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-2xl bg-opacity-40">
            <AnimatePresence>
              {images.map((image) => (
                <motion.article
                  key={image.id}
                  layout
                  variants={imageItem}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  whileHover="hover"
                  className="overflow-hidden rounded-md shadow-lg"
                >
                  <Link to={image.slug}>
                    <Image
                      fluid={image.frontmatter.thumbnail.childImageSharp.fluid}
                      alt={image.frontmatter.title}
                    />
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </DefaultLayout>
    </Container>
  );
};

export const query = graphql`
  query GetAllImages {
    images: allMdx(
      filter: { slug: { glob: "images/*" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          category
          thumbnail {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
