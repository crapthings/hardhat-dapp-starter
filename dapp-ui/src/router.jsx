import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Layout from './components/layout'
import Home from './composites'
import About from './composites/about'

export default window.ethereum?.isMetaMask
  ? Router
  : Fallback

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Fallback () {
  const onClick = () => window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en')

  return (
    <div className='grid h-screen place-content-center text-red-900' onClick={onClick}>
      <button className='btn btn-link text-red-900'>MetaMask required</button>
    </div>
  )
}
