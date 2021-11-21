import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className='absolute space-x-2'>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
    </div>
  )
}
