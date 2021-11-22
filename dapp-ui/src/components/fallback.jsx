export default function Fallback () {
  const onClick = () => window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en')

  return (
    <div className='grid h-screen place-content-center text-red-900' onClick={onClick}>
      <button className='btn btn-link text-red-900'>MetaMask required</button>
    </div>
  )
}
