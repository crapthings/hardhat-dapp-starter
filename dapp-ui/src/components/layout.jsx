import { Outlet } from 'react-router-dom'

import Nav from './nav'

export default function () {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
