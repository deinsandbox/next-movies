import React from 'react'

import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      Created by <a href="https://github.com/equiman">@equiman</a> &copy;{' '}
      {new Date().getFullYear()}
    </footer>
  )
}
