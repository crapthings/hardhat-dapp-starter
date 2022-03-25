import { ethers } from "ethers"

import stores from '../stores'

export default function () {
  const account = stores((state) => state.account)
  const str = stores((state) => state.str)
  const getStr = stores((state) => state.getStr)
  const setStr = stores((state) => state.setStr)

  useEffect(() => {
    if (!account) return
    getStr()
  }, [account])

  const onClick = () => {
    const pmt = prompt('input text')
    if (!pmt) return
    setStr(pmt)
  }

  return (
    <div className='grid h-screen place-content-center'>
      <div>{str}</div>
      <Info />
      <div>
        <button className='btn btn-sm' onClick={onClick}>call setStr</button>
      </div>
    </div>
  )
}

function Info () {
  const account = stores((state) => state.account)
  const balance = stores((state) => state.balance)
  const getBalance = stores((state) => state.getBalance)

  useEffect(() => {
    if (!account) return
    getBalance(account)
  }, [account])

  return (
    <div>
      <div>balance: {balance}</div>
    </div>
  )
}
