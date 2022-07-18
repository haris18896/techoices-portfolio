import React, { useState, useEffect } from 'react'
import { FirstSectionPortfolio } from '../css/portfolio/PortfolioStyles'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function ScrollTop() {
  const classes = FirstSectionPortfolio()

  const [scroll, setScroll] = useState(false)

  const handleScrollTop = e => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setScroll(window.pageYOffset > 250))
    }
  }, [])

  return (
    <div>
      <button className={!scroll ? `${classes.hidden}` : `${classes.scrollToTop}`} onClick={() => handleScrollTop()}>
        <KeyboardArrowUpIcon fontSize='large' />
      </button>
    </div>
  )
}

export default ScrollTop
