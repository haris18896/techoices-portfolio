import React, { Suspense } from 'react'

import AppRoutes from './routes'
import { theme } from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'
import FallbackLoader from './components/Loader/FallbackLoader'

function App() {
  return (
    <div id='app'>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<FallbackLoader />}>
          <AppRoutes />
        </Suspense>
      </ThemeProvider>
    </div>
  )
}

export default App
