import { makeStyles } from '@mui/styles'
import Menu from '@mui/material/Menu'
import { styled, alpha } from '@mui/material/styles'

export const HeaderStyles = makeStyles(theme => ({
  Portfolio_Header_div: {
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 11,
    overflowX: 'hidden',
  },

  nav_background_transparent: {
    paddingTop: '10px',
    paddingBottom: '10px',
    backgroundColor: 'transparent',
    overflowX: 'hidden',
    transition: 'background-color .5s ease',
  },

  nav_background: {
    paddingTop: '5px',
    paddingBottom: '5px',
    overflowX: 'hidden',
    backgroundColor: '#fff',
    transition: 'background-color .5s ease',
  },

  normal: {
    transform: 'scale(1)',
    transition: 'transform .5s ease',
  },

  shrink: {
    transform: 'scale(0.8)',
    transition: 'transform .5s ease',
  },

  Nav_elements: {
    '& li': {
      textDecoration: 'none',
      listStyle: 'none',
      marginRight: '20px',
      fontSize: '16px',
      color: '#343A40',
    },
    '& a': {
      textDecoration: 'none',
    },
  },

  navActive: {
    paddingBottom: '3px',
    borderBottom: '2px solid #F95733',
  },

  navLink: {
    '&:after': {
      paddingBottom: '5px',
      display: 'block',
      content: '""',
      borderBottom: '2px solid #F95733',
      transform: 'scaleX(0)',
      transition: 'transform 0.15s ease-in-out',
    },

    '&:hover:after': {
      transform: 'scaleX(1)',
    },
  },
  header_navigation_large: {
    [theme.breakpoints.down('900')]: {
      display: 'none !important',
    },
  },
  header_navigation_small: {
    [theme.breakpoints.up('900')]: {
      display: 'none !important',
    },

    '& button': {
      backgroundColor: 'transparent !important',
      padding: '0px !important',

      '& svg': {
        fontSize: '50px !important',
        color: theme.palette.primary.main,
      },
    },
  },

  Link_items_small: {
    textDecoration: 'none !important',

    '& li': {
      textDecoration: 'none !important',
      listStyle: 'none !important',
      color: '#343A40',
    },
  },
}))

export const StyledMenu = styled(props => (
  <Menu
    elevation={1}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    // minWidth: 300,
    width: '100%',
    [theme.breakpoints.down('900')]: {
      minWidth: '200px',
    },
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0 !important',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        color: '#343A40 !important',
        paddingLeft: '12px !important',
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}))
