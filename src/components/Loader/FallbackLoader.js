import { Stack } from '@mui/material'
import Lottie from 'react-lottie-player'
import lottieJson from '../../assets/lottie/fallbackLoader.json'
import fallbackLoaderStyles from '../../css/loader/fallbackLoader'

const FallbackLoader = () => {
  const classes = fallbackLoaderStyles()

  return (
    <Stack className={classes.fallBackLoaderWrapper} justifyContent='center' alignItems='center'>
      <Stack direction='column' justifyContent='center' alignItems='center'>
        <Lottie loop animationData={lottieJson} play style={{ width: 60, height: 60 }} />
      </Stack>
    </Stack>
  )
}

export default FallbackLoader
