import AOS from 'aos'
import vectorDown from '../../assets/images/Vector_2.svg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'

import React, { useState, useEffect } from 'react'
import { Container, Grid, Stack } from '@mui/material'

import '../../css/portfolio/styling.css'
import { CardSectionStyles } from '../../css/portfolio/PortfolioStyles'

const ParticlesAnimation = React.lazy(() => import('../Particles/ParticlesAnimation'))
const CardComponent = React.lazy(() => import('../Cards/CardComponent'))
function CardsSection() {
  const classes = CardSectionStyles()

  useEffect(() => {
    AOS.init({ duration: 1000 })
    AOS.refresh()
  }, [])

  let tabs = [
    {
      id: 'all',
      name: 'All',
      path: '1',
      default: true,
    },
    {
      id: 'Server',
      name: 'Server',
      default: false,
    },
    {
      id: 'Web',
      name: 'Web Development',
      default: false,
    },
    {
      id: 'Android',
      name: 'Android',
      default: false,
    },
    {
      id: 'IOS',
      name: 'IOS',
      default: false,
    },
    // {
    //   id: 'ReactNative',
    //   name: 'React Native',
    //   default: false,
    // },

    {
      id: 'Graphics',
      name: 'Graphics & UI/UX',
      default: false,
    },
  ]

  const [selectedTab, setSelectedTab] = useState({
    id: 'all',
    name: 'All',
    default: true,
  })

  const handleChangeTab = tab => {
    setSelectedTab(tab)
  }

  const [hidden, setHidden] = useState(true)
  const [hiddenAtMaxLimit, setHiddenAtMaxLimit] = useState(false)
  const limit = window.innerWidth < 900 ? 3 : 6
  const [page, setPage] = useState(2)
  const [pageItems, setPageItems] = useState((page - 1) * limit)
  const [offset, setOffset] = useState((page - 2) * limit)
  const tabsLimit = tabs.slice(offset, pageItems)

  const handleIncrementPage = () => {
    setPage(page + 1)
    setPageItems(page * limit)
  }

  const handleDecrementPage = () => {
    setPage(page - 1)
    setPageItems((page - 2) * limit)
  }

  useEffect(() => {
    setOffset((page - 2) * limit)
    if (page <= 2) {
      setHidden(true)
    } else if (page >= 3) setHidden(false)
  }, [page, limit])

  useEffect(() => {
    if (pageItems >= tabs.length) {
      setHiddenAtMaxLimit(true)
    } else if (pageItems < tabs.length) {
      setHiddenAtMaxLimit(false)
    }
  }, [pageItems, tabs.length])

  return (
    <div className={classes.Card_Section_Container}>
      <Container maxWidth='lg' className={classes.container__header}>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={12}>
            <Stack direction='row' justifyContent='flex-start' alignItems='center' className={classes.header_navigation}>
              {tabsLimit.map((doc, index) => (
                <div key={doc.id} className={classes.nav_divs}>
                  <p
                    onClick={() => handleChangeTab(doc)}
                    className={doc.id === selectedTab.id ? `${classes.Selected__item}` : `${classes.UnSelected__item}`}
                  >
                    {doc.name}
                  </p>
                </div>
              ))}
            </Stack>
          </Grid>

          <button
            className={hiddenAtMaxLimit ? `${classes.hidden}` : `${classes.right_button} ${classes.pagination_Button}`}
            onClick={() => handleIncrementPage()}
          >
            <ChevronRightIcon fontSize='xl' />
          </button>

          <button
            className={hidden ? `${classes.hidden}` : `${classes.left_button} ${classes.pagination_Button}`}
            onClick={() => handleDecrementPage()}
          >
            <KeyboardArrowLeftIcon fontSize='xl' />
          </button>
        </Grid>
      </Container>
      <hr />

      <div className={classes.Particles_main_container}>
        <div className={classes.Particles_Container}>
          <ParticlesAnimation />
        </div>
        <Container maxWidth='lg' className={classes.container__cards}>
          {selectedTab.id === 'all' && <CardComponent id={selectedTab.id} />}
          {selectedTab.id === 'Server' && <CardComponent id={selectedTab.id} />}
          {selectedTab.id === 'Web' && <CardComponent id={selectedTab.id} />}
          {selectedTab.id === 'Android' && <CardComponent id={selectedTab.id} />}
          {selectedTab.id === 'IOS' && <CardComponent id={selectedTab.id} />}
          {selectedTab.id === 'ReactNative' && <CardComponent id={selectedTab.id} />}
          {selectedTab.id === 'WordPress' && <CardComponent id={selectedTab.id} />}
          {selectedTab.id === 'Graphics' && <CardComponent id={selectedTab.id} />}
        </Container>
        <div className={classes.Vector_down}>
          <img src={vectorDown} alt='vectorDown' />
          <Container mxwidth='sm' data-aos='fade-right'>
            <p>Sounds Interesting?</p>
            <h1>Then contact us and tell us about your project! </h1>
            <div className={classes.anchor_div}>
              <a className={classes.Btn_touch} href='https://www.techoices.com/CustomITSolution/#cont'>
                Get in Touch
              </a>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default CardsSection
