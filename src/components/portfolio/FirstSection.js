import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Container, Grid, Stack, Skeleton } from '@mui/material'

import etisalat from '../../assets/images/E/etisalat.png'
import ikano from '../../assets/images/E/ikano.png'
import friendsVpn from '../../assets/images/E/FriendsVPN.png'
import Qiros from '../../assets/images/E/Qars.png'
import easyPaisa from '../../assets/images/E/Easypaisa.png'
import slimerp from '../../assets/images/E/slimerp.png'
import jazz from '../../assets/images/jazz_a.png'
import vlunch from '../../assets/images/E/vlunch.png'
import flat from '../../assets/images/flat.png'
import docscanner from '../../assets/images/docscanner.png'
import Kub from '../../assets/images/E/Kub.png'

import '../../css/portfolio/styling.css'
import { FirstSectionPortfolio } from '../../css/portfolio/PortfolioStyles'

export function SkeletonItem() {
  return <Skeleton sx={{ borderRadius: '50%', margin: '15px' }} animation='wave' variant='circular' width={100} height={100} />
}

function FirstSection() {
  const handleScroll = e => {
    window.scrollTo({
      top: 1200,
      left: 0,
      behavior: 'smooth',
    })
  }

  const classes = FirstSectionPortfolio()
  return (
    <div className={classes.First__Section}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} className={classes.First_Section_Grid}>
          <Grid item xs={12} sm={12} md={6}>
            <Stack className={classes.Left_Side}>
              <p style={{ color: '#F95733' }}>who we work with</p>
              <div className='intro'>
                <h1>
                  We are modern & Special for <span style={{ color: '#F95733' }}></span>
                </h1>

                <div className='border_btm'></div>
              </div>

              <p>We transform great ideas into successful Web & mobile apps that solve challenges and spark long-term impact.</p>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Stack className={classes.Right_Side}>
              <Stack direction='row' justifyContent='center' alignItems='center' className={classes.Icons_logos}>
                <LazyLoadImage alt='docscanner' src={docscanner} placeholder={<SkeletonItem />} />
                <LazyLoadImage alt='Kub' src={Kub} placeholder={<SkeletonItem />} />

                <LazyLoadImage alt='friendsVpn' src={friendsVpn} placeholder={<SkeletonItem />} />
              </Stack>
              <Stack direction='row' justifyContent='center' alignItems='center' className={classes.Icons_logos}>
                <LazyLoadImage alt='Qiros' src={Qiros} placeholder={<SkeletonItem />} />
                <LazyLoadImage alt='easyPaisa' src={easyPaisa} placeholder={<SkeletonItem />} />
                <LazyLoadImage alt='slimerp' src={slimerp} placeholder={<SkeletonItem />} />
              </Stack>
              <Stack direction='row' justifyContent='center' alignItems='center' className={classes.Icons_logos}>
                <LazyLoadImage
                  alt='jazz'
                  src={jazz}
                  placeholder={<SkeletonItem />}
                  // style={{ maxHeight: '80px', maxWidth: '110px' }}
                />
                <LazyLoadImage alt='vlunch' src={vlunch} placeholder={<SkeletonItem />} />
                <LazyLoadImage alt='flat' src={flat} placeholder={<SkeletonItem />} />
              </Stack>
              <Stack direction='row' justifyContent='center' alignItems='center' className={classes.Icons_logos}>
                <LazyLoadImage alt='ikano' src={ikano} placeholder={<SkeletonItem />} />
                <LazyLoadImage alt='etisalat' src={etisalat} placeholder={<SkeletonItem />} />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <div className={classes.btn_container}>
          <button className={classes.button1} onClick={() => handleScroll()}>
            |
          </button>
        </div>
      </Container>
    </div>
  )
}

export default FirstSection
