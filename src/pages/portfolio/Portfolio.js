import React from 'react'

const ScrollToTop = React.lazy(() => import('../../components/ScrollTop'))
const Header = React.lazy(() => import('../../components/Header/Header'))
const Footer = React.lazy(() => import('../../components/Footer/Footer'))
const CardsSection = React.lazy(() => import('../../components/portfolio/CardsSection'))
const FirstSection = React.lazy(() => import('../../components/portfolio/FirstSection'))
const SecondSection = React.lazy(() => import('../../components/portfolio/SecondSection'))
const ThirdSectionCards = React.lazy(() => import('../../components/portfolio/ThirdSectionCards'))

function Portfolio() {
  return (
    <div>
      {/* components */}

      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSectionCards />
      <CardsSection />
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default Portfolio
