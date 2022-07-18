import React from 'react'
import Particles from 'react-tsparticles'
import { CardSectionStyles } from '../../css/portfolio/PortfolioStyles'

function ParticlesAnimation({ container }) {
  const classes = CardSectionStyles()

  return (
    <div>
      <Particles
        id='tsparticles'
        canvasClassName={classes.particles}
        // init={particlesInit}
        // loaded={particlesLoaded}
        container={container}
        options={{
          background: {
            // color: {
            //   // value: '#0d47a1',
            // },
          },
          fullScreen: false,
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: false,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 10,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#F95733',
            },
            links: {
              color: '#F95733',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1400,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      ></Particles>
    </div>
  )
}

export default ParticlesAnimation
