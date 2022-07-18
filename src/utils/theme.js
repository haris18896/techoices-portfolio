import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F95733',
    },
    secondary: {
      main: '#2B2D30',
    },
  },
  typography: {
    fontFamily: ['"Open Sans"'].join(','),
  },
})
export { theme }
