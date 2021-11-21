import stores from '../stores'

export default function () {
  const text = stores((state) => state.text)

  return (
    <div className='grid h-screen place-content-center'>{text}</div>
  )
}
