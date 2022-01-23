import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Layout from './components/layout'
import Home from './composites'
import About from './composites/about'

export default function Router () {
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
