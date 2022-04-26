import * as React from 'react'
import { Link } from 'gatsby'

import { DefaultLayout } from '../components/DefaultLayout'
import { Container } from '../components/Container'
import Sofa from '../images/sofa_01.png'

const IndexPage = () => {
  return (
    <Container>
      <title>Portfolio page</title>
      <DefaultLayout>
        <div className="grid my-56 lg:grid-cols-2 gap-x-32">
          <div className="mb-32 lg:mb-0">left content</div>
          <div>
            <p className="mb-5 text-3xl font-extrabold">
              Hi! Nice to meet you!
            </p>
            <p className="mb-10 text-violet-light">
              My name is <span className="text-white">Nadiia</span> and I'm a
              digital artist. Here I will have a short introductory text and
              perhaps a few other things. Exciting!
            </p>
            <Link
              to="#work"
              className="inline-block px-8 py-3 font-bold rounded-full shadow-lg bg-gradient-to-b from-violet to-violet-dark"
            >
              Browse my work
            </Link>
          </div>
        </div>
        <div className="my-24 lg:my-56">
          <div className="grid max-w-lg mx-auto mb-10 text-center">
            <p className="mb-5 text-3xl font-extrabold">My work</p>
            <p className="text-violet-light">
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
            <button className="px-3 rounded-full bg-gradient-to-b focus:from-violet focus:to-violet-dark w-max">
              3D
            </button>
            <button className="px-3 rounded-full bg-gradient-to-b focus:from-violet focus:to-violet-dark w-max">
              Drawing
            </button>
            <button className="px-3 rounded-full bg-gradient-to-b focus:from-violet focus:to-violet-dark w-max">
              Painting
            </button>
          </div>
          <div className="container grid gap-10 p-10 bg-gray-900 md:grid-cols-2 lg:grid-cols-3 rounded-2xl bg-opacity-40">
            <div className="overflow-hidden rounded-lg shadow-xl aspect-w-1 aspect-h-1">
              <img src={Sofa} alt="sofa 3D" className="object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl aspect-w-1 aspect-h-1">
              <img src={Sofa} alt="sofa 3D" className="object-cover" />
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl aspect-w-1 aspect-h-1">
              <img src={Sofa} alt="sofa 3D" className="object-cover" />
            </div>
          </div>
        </div>
      </DefaultLayout>
    </Container>
  )
}

export default IndexPage
