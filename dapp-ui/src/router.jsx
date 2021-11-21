import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Layout from './components/layout'
import Home from './composites'
import About from './composites/about'

export default function () {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}
