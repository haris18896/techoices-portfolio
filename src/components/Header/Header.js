import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, MenuItem, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

import { HeaderStyles, StyledMenu } from '../../css/Header/HeaderStyles';

function Header() {
  const classes = HeaderStyles();
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => setSmall(window.pageYOffset > 50));
    }
  }, []);

  let tabs = [
    {
      id: 'portfolio',
      name: 'Portfolio',
      path: '/',
      default: true
    },
    {
      id: 'Customer',
      name: 'Customer IT-Services',
      path: 'https://www.techoices.com/CustomITSolution'
    },
    {
      id: 'About',
      name: 'About us',
      path: 'https://www.techoices.com/e-commerce/#about'
    },
    {
      id: 'Pricing',
      name: 'Pricing',
      path: 'https://www.techoices.com/price/'
    },
    {
      id: 'Contact',
      name: 'Contact us',
      path: 'https://www.techoices.com/Contact/'
    }
  ];

  const [tabsState] = useState(tabs);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <nav
      className={
        small
          ? `${classes.nav_background} ${classes.Portfolio_Header_div}`
          : `${classes.Portfolio_Header_div} ${classes.nav_background_transparent}`
      }
    >
      <Container maxWidth='lg'>
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Grid item>
            <Box className={classes.headerMarginSmallScreen}>
              <img
                className={small ? `${classes.shrink}` : `${classes.normal}`}
                src={logo}
                alt='Logo'
                onClick={() => navigate('/')}
              />
            </Box>
          </Grid>
          <Grid item className={classes.Nav_elements}>
            <Stack direction='row' alignItems='center' justifyContent='space-between' className={classes.header_navigation_large}>
              {tabsState.map((doc, index) => (
                <a className={small ? `${classes.shrink}` : `${classes.normal}`} href={doc.path} key={index}>
                  <li className={window.location.pathname === `${doc.path}` ? `${classes.navActive}` : `${classes.navLink}`}>
                    {doc.name}
                  </li>
                </a>
              ))}
            </Stack>

            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
              className={`${classes.header_navigation_small} ${small ? classes.shrink : classes.normal}`}
            >
              <Button
                id='demo-customized-button'
                aria-controls='demo-customized-menu'
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant='contained'
                disableElevation
                className={classes.profileButton}
                onClick={handleClick}
              >
                <MenuIcon />
              </Button>
              <StyledMenu
                id='demo-customized-menu'
                MenuListProps={{
                  'aria-labelledby': 'demo-customized-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                {tabsState.map((doc, index) => (
                  <MenuItem onClick={handleClose} disableRipple style={{ paddingTop: '12px', paddingBottom: '12px' }} key={index}>
                    <Link className={classes.Link_items_small} to={doc.path}>
                      <li>{doc.name}</li>
                    </Link>
                  </MenuItem>
                ))}
              </StyledMenu>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
}

export default Header;
