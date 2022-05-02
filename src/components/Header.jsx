import * as React from 'react'
import { Link } from 'gatsby'
import { ReactComponent as Logo } from '../images/logo.svg'
import { Grid } from './Grid'

export const Header = () => {
  return (
    <header className="relative py-6 mx-auto text-sm">
      <Grid className="items-center">
        <div className="z-10 col-span-2 col-start-6 justify-self-center">
          <Link to="/" className="inline-flex px-4 bg-gray-800 group">
            <Logo className="w-12 h-12 text-white transition bg-gray-800 fill-current group-hover:text-violet-light" />
          </Link>
        </div>
        <nav className="z-10 col-span-4 col-start-9">
          <ul className="flex -ml-4 font-medium tracking-widest uppercase gap-x-5">
            <li>
              <Link
                to="/#work"
                className="block px-4 text-white transition bg-gray-800 hover:text-violet-light"
              >
                <span>My work</span>
              </Link>
            </li>
            <li>
              <Link
                to="/#contacts"
                className="block px-4 text-white transition bg-gray-800 hover:text-violet-light"
              >
                <span>Contacts</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Grid>
      <div className="absolute inset-y-0 w-full h-px my-auto border-b border-gray-700" />
    </header>
  )
}
