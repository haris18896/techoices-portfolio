import React from 'react'
import { Container, Grid, Stack, Skeleton } from '@mui/material'

import flag from '../../assets/images/flag.svg'
import clock from '../../assets/images/clock.svg'
import people from '../../assets/images/people.png'

import { SecondSectionPortfolio } from '../../css/portfolio/PortfolioStyles'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function SecondSection() {
  const classes = SecondSectionPortfolio()

  return (
    <div className={classes.secondSection}>
      {/* <img src={people} alt='people' className={classes.people_Img} /> */}
      <LazyLoadImage
        alt='icon1'
        src={people}
        placeholder={<Skeleton className={classes.Img_Skeleton} animation='wave' variant='rectangular' />}
      />

      <Container maxWidth='lg'>
        <span>Our Services</span>
        <Grid container className={classes.second__section__grid}>
          <Grid item xs={12} sm={6} md={3} lg={2} className={classes.second_section_left_grid}>
            <Stack direction='column' justifyContent='center' alignItems='flex-start' className={classes.second_section_stack}>
              <Stack direction='row' alignItems='center' className={classes.img__icons_2nd_section}>
                <img src={flag} alt='flag' />
                <h2>136</h2>
              </Stack>
              <p>Successful Projects</p>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} className={classes.second_section_right_grid}>
            <Stack direction='column' justifyContent='center' alignItems='flex-start' className={classes.second_section_stack}>
              <Stack direction='row' alignItems='center' className={classes.img__icons_2nd_section}>
                <img src={clock} alt='clock' />
                <h2>12</h2>
              </Stack>
              <p>Years in Business</p>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default SecondSection
