import * as React from 'react'

export const Footer = () => {
  return (
    <footer className="py-10 text-sm text-center border-t border-gray-700 text-violet-light text-opacity-60">
      <p className="mb-3">
        © {new Date().getFullYear()} Nadiia Ridko. All rights reserved.
      </p>
      <p>Made with ❤️ by Nadiia and Artem.</p>
    </footer>
  )
}
