import { Outlet } from 'react-router-dom'

import stores from '../stores'

import Nav from './nav'

export default function () {
  const init = stores((state) => state.init)

  if (!init) {
    return (
      <div>loading</div>
    )
  }

  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
