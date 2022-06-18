import * as React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { motion } from "framer-motion";
import {
  SiInstagram as InstagramIcon,
  SiArtstation as ArtStationIcon,
} from "react-icons/si";
import { DefaultLayout } from "../components/DefaultLayout";
import { Container } from "../components/Container";
import { technologies } from "../components/Technologies";
import { ButtonLink } from "../components/ButtonLink";
import { Grid } from "../components/Grid";

export default function WorkDetail({ data }) {
  const { work } = data;
  const { title, links } = work.frontmatter;

  return (
    <Container>
      <title>{title}</title>
      <DefaultLayout>
        <Grid className="my-32">
          <div className="col-span-8">
            <motion.article
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              <Image
                fixed={work.frontmatter.thumbnail.childImageSharp.fixed}
                alt={title}
                className="shadow-xl rounded-xl "
              />
            </motion.article>
            <MDXProvider>
              <MDXRenderer>{work.body}</MDXRenderer>
            </MDXProvider>
          </div>
          <motion.aside
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.15,
              },
            }}
            className="col-span-4"
          >
            <header className="mb-10">
              <h1 className="mb-8 text-5xl font-extrabold">{title}</h1>
              <p>
                <Link
                  to="/#work"
                  className="font-semibold transition hover:text-white text-violet-light"
                >
                  {work.frontmatter.category}
                </Link>{" "}
                •{" "}
                <span className="text-violet-light text-opacity-60">
                  {work.frontmatter.date}
                </span>
              </p>
            </header>
            <hr className="my-10 border-gray-700" />
            {work.frontmatter.description ? (
              <p className="my-10 italic text-violet-light">
                {work.frontmatter.description}
              </p>
            ) : null}
            {work.frontmatter.using ? (
              <section>
                <h3 className="mb-3 text-lg font-bold">Technologies</h3>
                <ul className="p-5 space-y-3 text-sm bg-black rounded-md bg-opacity-20">
                  {work.frontmatter.using?.map((tech, index) => {
                    const { icon: Icon, fill, title } = technologies[tech];
                    const isLast = index === work.frontmatter.using.length - 1;

                    return (
                      <li
                        className={`flex items-center gap-3 ${
                          isLast
                            ? ""
                            : "border-b border-violet-light border-opacity-5 pb-3"
                        }`}
                      >
                        <Icon className="w-6 h-6 rounded-sm" style={{ fill }} />
                        <span>{title}</span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            ) : null}

            {work.frontmatter.links ? (
              <section className="my-10">
                <h3 className="mb-3 text-lg font-bold">Links</h3>
                <ul className="grid grid-cols-2 gap-5 font-medium">
                  {links.instagram ? (
                    <li>
                      <a
                        href={links.instagram}
                        target="_blank"
                        className="inline-flex items-center gap-2 transition text-violet-light hover:text-white"
                      >
                        <InstagramIcon className="w-4 h-4 text-violet" />
                        Instagram
                      </a>
                    </li>
                  ) : null}
                  {links.artstation ? (
                    <li>
                      <a
                        href={links.artstation}
                        target="_blank"
                        className="inline-flex items-center gap-2 transition text-violet-light hover:text-white"
                      >
                        <ArtStationIcon className="w-4 h-4 text-violet" />
                        ArtStation
                      </a>
                    </li>
                  ) : null}
                </ul>
              </section>
            ) : null}

            <hr className="my-10 border-gray-700" />

            <section>
              <h3 className="mb-3 text-lg font-bold">Collaborate with me</h3>
              <p className="text-violet-light">
                Like this work? Drop me a message and let's bring great ideas to
                life together.
              </p>
              <footer className="my-8">
                <ButtonLink to="/#contacts">Contact me</ButtonLink>
              </footer>
            </section>
          </motion.aside>
        </Grid>
      </DefaultLayout>
    </Container>
  );
}

export const pageQuery = graphql`
  query WorkDetail($id: String) {
    work: mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        category
        date(formatString: "DD MMMM, YYYY")
        thumbnail {
          childImageSharp {
            fixed(quality: 100, width: 700) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        description
        using
        links {
          instagram
          artstation
        }
      }
    }
  }
`;
