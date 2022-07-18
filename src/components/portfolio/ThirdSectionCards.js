import React from 'react';
import { Container, Stack } from '@mui/material';

import '../../css/portfolio/styling.css';
import vectorImg from '../../assets/images/Vector.svg';
import { ThirdSectionStyles } from '../../css/portfolio/PortfolioStyles';

function ThirdSectionCards() {
  const classes = ThirdSectionStyles();
  return (
    <div className={classes.Third_Section}>
      <img src={vectorImg} alt='vector' />
      <Container maxWidth='lg' className={classes.container_thirdGrid}>
        <Stack direction='column' justifyContent='center' alignItems='flex-start' className={classes.thirdGrid_Stack_one}>
          <p style={{ color: '#F95733' }}>Our Services</p>
          <div className='intro_our_services'>
            <span className='p_element'>We work successful results & good customer service.</span>
            <div className='border_btm'></div>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default ThirdSectionCards;
