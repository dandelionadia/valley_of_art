import * as React from 'react'
import {
  SiInstagram as InstagramIcon,
  SiArtstation as ArtStationIcon,
  SiYoutube as YouTubeIcon,
  SiTwitter as TwitterIcon,
} from 'react-icons/si'

export const Footer = () => {
  return (
    <footer className="flex items-start justify-between gap-5 py-10 text-sm border-t border-gray-700 text-violet-light text-opacity-60">
      <section>
        <p className="mb-2 font-bold text-white">
          © {new Date().getFullYear()} Nadiia Ridko. All rights reserved.
        </p>
        <p>Made with ❤️ by Nadiia and Artem.</p>
      </section>
      <section>
        <ul className="flex items-center gap-2">
          <li>
            <a
              href="https://www.instagram.com/hope.paints"
              target="_blank"
              className="flex p-2 transition hover:text-white"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.artstation.com/dangora"
              target="_blank"
              className="flex p-2 transition hover:text-white"
            >
              <ArtStationIcon className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCNjaTqw_oRfTRxFMaI78yqQ"
              target="_blank"
              className="flex p-2 transition hover:text-white"
            >
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_dangora"
              target="_blank"
              className="flex p-2 transition hover:text-white"
            >
              <TwitterIcon className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
