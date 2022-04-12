import { Outlet } from 'react-router-dom'

import stores from '../stores'

import Nav from './nav'

export default function () {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  )
}
