import { makeStyles } from '@mui/styles';
import background from '../../assets/images/background.jpg';

export const FirstSectionPortfolio = makeStyles(theme => ({
  scrollToTop: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: '10',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '3px 5px',
    cursor: 'pointer',
    transition: 'background-color .3s ease'
  },
  First__Section: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    position: 'relative',
    backgroundPosition: 'right top', // top sides always stays at the that position
    backgroundRepeat: 'no-repeat',

    [theme.breakpoints.down('900')]: {
      backgroundPosition: 'left' // top sides always stays at the that position
    }
  },

  First_Section_Grid: {
    paddingTop: '100px',
    paddingBottom: '30px',
    minHeight: '30vh',
    alignItems: 'center',

    [theme.breakpoints.down('900')]: {
      paddingTop: '90px',
      paddingBottom: '40px'
    },
    [theme.breakpoints.down('500')]: {
      paddingBottom: '20px'
    }
  },
  Left_Side: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'initial',
    '& p': {
      fontSize: '18px',
      fontWeight: '500',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      lineHeight: '21px',
      color: '#575757',

      [theme.breakpoints.down('500')]: {
        fontSize: '16px'
      }
    },

    [theme.breakpoints.down('900')]: {
      marginLeft: '0px'
    }
  },

  border_bottom: {
    height: '10px',
    width: '10%',
    borderTop: '3px solid #F95733',
    marginBottom: '10px',
    marginTop: '10px',
    transition: 'border-color 0.6s ease-in-out',

    '&:hover': {
      width: '90%',
      transition: 'width 0.6s ease-in-out'
    }
  },

  Right_Side: {
    alignItems: 'flex-start',
    justifyContent: 'center',

    '& img': {
      filter: 'grayscale(100%)',
      margin: '20px 30px',
      maxHeight: '80px',
      maxWidth: '110px',
      alignContent: 'center',
      alignSelf: 'center',

      '&:hover': {
        filter: 'grayscale(0%)'
      },

      [theme.breakpoints.down('1100')]: {
        margin: '15px !important'
      },
      [theme.breakpoints.down('900')]: {
        margin: '20px 30px !important'
      },
      [theme.breakpoints.down('520')]: {
        margin: '15px !important',
        maxHeight: '50px',
        maxWidth: '80px'
      },
      [theme.breakpoints.down('336')]: {
        maxHeight: '40px',
        maxWidth: '70px'
      }
    },
    [theme.breakpoints.down('900')]: {
      alignItems: 'center'
    }
  },

  Icons_logos: {
    [theme.breakpoints.down('583')]: {}
  },

  btn_container: {
    paddingBottom: '40px',
    animation: '$jumps 2s ease-in-out infinite',
    [theme.breakpoints.down('900')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  button1: {
    marginLeft: '170px',
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    textAlign: 'center',
    padding: '28px 15px 7px 15px',
    fontWeight: 900,
    minWidth: '45px',
    fontSize: '20px',
    border: '3px solid #F95733',
    borderRadius: '30px',
    cursor: 'pointer',

    [theme.breakpoints.down('900')]: {
      marginLeft: '0px'
    }
  },

  '@keyframes jumps': {
    '0%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(30px)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  }
}));

// *********************************************************************************************

export const SecondSectionPortfolio = makeStyles(theme => ({
  secondSection: {
    position: 'relative',
    height: '50vh',

    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundPosition: 'center'
    },

    '& span': {
      fontSize: '36px',
      fontWeight: '500',
      color: '#fff',
      position: 'absolute',
      top: '77%',

      [theme.breakpoints.down('900')]: {
        top: '10%',
        fontSize: '32px'
      },
      [theme.breakpoints.down('500')]: {
        top: '10%',
        fontSize: '24px'
      }
    }
  },

  Img_Skeleton: {
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    height: '500px !important',

    [theme.breakpoints.down('900')]: {
      height: '300px !important'
    },

    [theme.breakpoints.down('500')]: {
      height: '150px !important'
    }
  },

  second__section__grid: {
    position: 'absolute',
    bottom: '0%',
    left: '-15%',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('1500')]: {
      left: '-7%'
    },

    [theme.breakpoints.down('900')]: {
      left: '0',
      top: '80%'
    }
  },

  second_section_left_grid: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  },
  second_section_right_grid: {
    backgroundColor: '#fff',
    color: theme.palette.primary.main
  },

  second_section_stack: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '50px',
    paddingBottom: '30px',

    '& img': {
      marginRight: '10px'
    },

    '& p': {
      fontSize: '24px',
      fontWeight: '500',
      lineHeight: '28px',
      marginTop: '7px'
    },

    '& h2': {
      fontSize: '50px'
    },

    [theme.breakpoints.down('1400')]: {
      width: '80%'
    },

    [theme.breakpoints.down('1200')]: {
      width: '50%'
    },

    [theme.breakpoints.down('1100')]: {
      paddingTop: '50px',
      paddingBottom: '25px'
    },

    [theme.breakpoints.down('900')]: {
      '& h2': {
        fontSize: '28px'
      },

      '& p': {
        fontSize: '18px'
      }
    },

    [theme.breakpoints.down('600')]: {
      width: '90%',
      alignItems: 'center',
      paddingTop: '25px',
      paddingBottom: '12px',

      '& img': {
        width: '25px',
        height: '25px'
      }
    }
  }
}));

// *********************************************************************************************

export const ThirdSectionStyles = makeStyles(theme => ({
  Third_Section: {
    position: 'relative',
    marginTop: '200px',

    '& img': {
      position: 'absolute',
      right: '0',
      top: '-4px',

      [theme.breakpoints.down('900')]: {
        top: '-53px'
      },
      [theme.breakpoints.down('750')]: {
        top: '-46px'
      },
      [theme.breakpoints.down('667')]: {
        display: 'none'
      }
    },

    [theme.breakpoints.up('600')]: {
      marginTop: '160px'
    },
    [theme.breakpoints.up('900')]: {
      marginTop: '0px'
    }
  },
  container_thirdGrid: {
    paddingTop: '120px',

    [theme.breakpoints.down('667')]: {
      paddingTop: '0px'
    }
  },

  thirdGrid_Stack_one: {
    '& p': {
      fontSize: '18px',
      fontWeight: '500',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      lineHeight: '21px',
      marginBottom: '15px',

      [theme.breakpoints.down('500')]: {
        fontSize: '16px'
      }
    }
  }
}));

// *********************************************************************************************

export const CardSectionStyles = makeStyles(theme => ({
  Card_Section_Container: {
    marginTop: '40px',
    position: 'relative',

    '& hr': {}
  },

  Main_Card: {
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '10px !important',

    '& img': {
      transition: 'all .5s ease',
      '&:hover': {
        opacity: '.9',
        transform: 'scale(1.05)',
        transition: 'all 0.5s ease'
      }
    }
  },

  full_screen_btn: {
    position: 'absolute',
    right: '12px',
    // top: '420px',
    top: '12px',
    fontSize: '35px !important',
    color: '#fff !important',
    zIndex: '11',
    transform: 'scale(1)',
    transition: 'transform 0.2s',

    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'transform 0.2s'
    }
  },

  modal_Img_styling: {
    maxHeight: '85vh',
    width: '100%',
    overflow: 'hidden'
  },

  container__header: {
    [theme.breakpoints.down('1650')]: {
      padding: '0px 70px !important'
    }
  },

  header_navigation: {
    margin: '30px 0px 0px',
    cursor: 'pointer',

    '& :hover': {
      color: '#F95733'
    }
  },
  nav_divs: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },

  pagination_Button: {
    position: 'absolute',
    background: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '0px',
    fontSize: '50px',
    border: 'none',
    padding: '13px 0px 6px 0px',
    cursor: 'pointer',

    [theme.breakpoints.down('500')]: {
      padding: '9px 0px 2px 0px'
    }
  },

  right_button: {
    top: '0',
    right: '0',
    [theme.breakpoints.down('334')]: {
      top: '15px'
    }
  },

  left_button: {
    top: '0',
    left: '0',
    [theme.breakpoints.down('334')]: {
      top: '15px'
    }
  },

  hidden: {
    display: 'none'
  },

  UnSelected__item: {
    margin: '0px 5px',
    fontSize: '20px',
    fontWeight: '500',

    '&:after': {
      paddingBottom: '23px',

      display: 'block',
      content: '""',
      borderBottom: '3px solid #F95733',
      transform: 'scaleX(0)',
      transition: 'transform 0.2s ease-in-out'
    },

    '&:hover:after': {
      transform: 'scaleX(1)'
    },

    [theme.breakpoints.down('500')]: {
      fontSize: '14px'
    }
  },

  Selected__item: {
    paddingBottom: '23px',
    margin: '0px 5px',
    fontSize: '20px',
    fontWeight: '700',
    color: theme.palette.primary.main,

    borderBottom: '3px solid #F95733',

    [theme.breakpoints.down('500')]: {
      fontSize: '14px'
    }
  },

  Particles_main_container: {
    position: 'relative'
  },

  particles: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '-1'
  },

  container__cards: {
    paddingTop: '128px',
    minHeight: '70vh',
    overflow: 'hidden'
  },

  Card_components: {
    marginBottom: '40px'
  },

  Card_component_Styling: {
    marginBottom: '40px !important'
  },
  card_background: {
    backgroundColor: '#FAFBFC !important',
    paddingBottom: '0px !important'
  },

  card_background_actions: {
    backgroundColor: '#FAFBFC !important',
    padding: '0px !important'
  },

  listItem: {
    paddingLeft: '16px !important'
  },

  icons__Styles: {
    height: '50px',
    marginBottom: '15px !important',
    marginTop: '15px !important',
    display: 'flex',
    alignItems: 'center !important',
    justifyContent: 'flex-start',

    '& img': {
      objectFit: 'cover',
      cursor: 'pointer',
      minHeight: '30px',
      maxHeight: '50px',

      '&:hover': {
        transform: 'scale(1) !important',
        transition: 'all 0.5s ease'
      }
    }
  },

  Headings: {
    fontSize: '1.6rem !important',
    color: '#f95733 !important',
    fontWeight: '600 !important'
  },

  description_styling: {
    fontSize: '16px !important',
    fontWeight: '400 !important',
    color: '#575757',
    textAlign: 'left',
    fontFamily: 'poppins !important'
  },

  list_Item_text: {
    position: 'relative',
    listStyle: 'none'
  },

  Vector_down: {
    position: 'relative',
    // height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '100px',

    '& img': {
      position: 'absolute',
      right: '0',
      top: '0',
      zIndex: '-1',

      [theme.breakpoints.up('800')]: {
        left: '0'
      },
      [theme.breakpoints.down('667')]: {
        display: 'none'
      }
    },
    '& div': {
      paddingTop: '300px',

      '& p': {
        color: theme.palette.primary.main,

        fontSize: '18px',
        fontWeight: 'semi-bold',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        lineHeight: '24px',

        [theme.breakpoints.down('500')]: {
          fontSize: '16px'
        }
      },

      '& h1': {
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '30px',
        fontSize: '46px',
        fontWeight: '700',
        lineHeight: '55px',

        [theme.breakpoints.down('900')]: {
          width: '100%',
          fontSize: '40px'
        },
        [theme.breakpoints.down('600')]: {
          fontSize: '30px'
        }
      },

      '& button': {
        background: theme.palette.primary.main,
        color: '#fff',
        fontWeight: '500',
        fontSize: '18px',
        marginBottom: '10px',
        borderRadius: '100px',
        padding: '18px 40px',
        border: 'none',
        cursor: 'pointer',
        zIndex: '2',
        textDecoration: 'none',

        '&:hover': {
          transform: 'scale(1.05)',
          transition: 'all 1s ease'
        }
      },

      [theme.breakpoints.down('1350')]: {
        paddingTop: '150px'
      }
    }
  },

  anchor_div: {
    paddingTop: '30px !important'
  },

  Btn_touch: {
    background: theme.palette.primary.main,
    color: '#fff',
    marginTop: '10px',
    fontWeight: '500',
    fontSize: '18px',
    marginBottom: '10px',
    borderRadius: '100px',
    padding: '18px 40px',
    border: 'none',
    zIndex: '2',
    cursor: 'pointer',
    textDecoration: 'none',

    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all 1s ease'
    }
  },

  show_more_btn_container: {
    '& button': {
      color: theme.palette.primary.main,
      fontWeight: '500',
      fontSize: '18px',
      marginBottom: '10px',
      borderRadius: '100px',
      padding: '18px 40px',
      border: 'none',
      cursor: 'pointer',
      zIndex: '2',

      '&:hover': {
        transform: 'scale(1.05)',
        transition: 'all 1s ease'
      }
    }
  },

  display_none: {
    display: 'none'
  },

  '@keyframes ButtonJumps': {
    '0%': {
      transform: 'translateY(0)'
    },
    '50%': {
      transform: 'translateY(15px)'
    },
    '100%': {
      transform: 'translateY(0)'
    }
  }
}));

// *********************************************************************************************

export const FooterStyles = makeStyles(theme => ({
  Footer_Main_container: {
    marginTop: '150px',

    '& p': {
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '22px',
      color: '#68696b'
    },

    '& ul': {
      paddingLeft: '0px',
      marginTop: '30px'
    },

    '& li': {
      listStyle: 'none',
      marginBottom: '15px',
      color: '#68696b'
    },

    '& a': {
      textDecoration: 'none',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '22px',
      color: '#68696b'
    }
  },
  copy_right: {
    marginTop: '60px !important',
    marginBottom: '30px',

    '& button': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      border: 'none',
      borderRadius: '5px'
    }
  },

  footer_stack: {
    alignItems: 'center !important',
    justifyContent: 'center !important',

    '& img': {
      width: '200px',
      height: 'auto'
    },

    '& p': {
      marginTop: '20px'
    }
  }
}));

// *********************************************************************************************
