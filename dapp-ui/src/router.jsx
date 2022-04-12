import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Provider } from 'wagmi'

import Layout from './components/layout'
import Home from './composites'
import About from './composites/about'

export default function Router () {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
