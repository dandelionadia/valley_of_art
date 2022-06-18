import * as React from 'react'
import { Link } from 'gatsby'

export function ButtonLink(props) {
  return (
    <Link
      {...props}
      className="inline-block px-8 py-3 font-bold transition transform rounded-full shadow-md select-none bg-gradient-to-b from-violet to-violet-dark hover:-translate-y-1 hover:shadow-lg"
    >
      {props.children}
    </Link>
  )
}
