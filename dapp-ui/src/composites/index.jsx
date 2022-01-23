import { ethers } from "ethers"

import stores from '../stores'

export default function () {
  const str = stores((state) => state.str)
  const getStr = stores((state) => state.getStr)
  const setStr = stores((state) => state.setStr)

  useEffect(() => {
    getStr()
  }, [])

  const onClick = () => {
    const pmt = prompt('input text')
    if (!pmt) return
    setStr(pmt)
  }

  return (
    <div className='grid h-screen place-content-center'>
      <div>{str}</div>
      <div>
        <button className='btn btn-sm' onClick={onClick}>call setStr</button>
      </div>
    </div>
  )
}
