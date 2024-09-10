import React from 'react'
import useSharedComponents from './shared/components'

const Home: React.FC = (): JSX.Element => {
  // Hooks
  const { Navbar } = useSharedComponents()
  return (
    <>
      <Navbar/>
    </>
  )
}

export default Home