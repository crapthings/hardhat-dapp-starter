import { ethers } from "ethers"

import stores from '../stores'

export default function () {
  const str = stores((state) => state.str)
  const getStr = stores((state) => state.getStr)

  useEffect(() => {
    getStr()
  }, [])

  return (
    <div className='grid h-screen place-content-center'>{str}</div>
  )
}
