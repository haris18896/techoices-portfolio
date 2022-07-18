import React from 'react'
import { Container, Grid } from '@mui/material'
import logo from '../../assets/images/logo.png'
import { FooterStyles } from '../../css/portfolio/PortfolioStyles'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const classes = FooterStyles()
  const navigate = useNavigate()

  return (
    <div className={classes.Footer_Main_container}>
      <Container mxwidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} className={classes.footer_stack}>
            <img src={logo} alt='logo' onClick={() => navigate('/')} />
            <p>BTW nr:BE0659.852.594</p>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h2>Product</h2>
            <ul>
              <li>
                <a href='https://www.techoices.com/e-commerce/'>E-Commerce</a>
              </li>
              <li>
                <a href='https://www.techoices.com/price/'>Pricing Options</a>
              </li>
              <li>
                <a href='https://www.techoices.com/CustomITSolution/'>Customer IT-Services</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h2>Company</h2>
            <ul>
              <li>
                <a href='https://www.techoices.com/'>Home</a>
              </li>
              <li>
                <a href='https://www.techoices.com/e-commerce/#about'>About</a>
              </li>
              <li>
                <a href='https://www.techoices.com/e-commerce/#work'>Work</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <h2>Contact</h2>
            <ul>
              <li>+31 65 2343165</li>
              <li>
                <a href='mailto:sales@techoices.com'>sales@techoices.com</a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.copy_right}>
          <Grid item xs={12} sm={6}>
            <p>2019 TeChoices Belgium. All rights reserved.</p>
          </Grid>
          {/* <Grid item xs={12} sm={6} alignItems='flex-end'>
            <button>
              <KeyboardArrowUpIcon fontSize='large' />
            </button>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
