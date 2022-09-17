import { ConnectButton } from '@rainbow-me/rainbowkit';

const Header = () => {
  return (
    <div className="block p-6 m-3 border-4 border-white border-dashed flex justify-between">
      <div className="flex">
        <img src='/logo.png' alt="Hedwig" style={{width:'3em'}}/>
        <p className="ml-2 text-3xl font-bold	">HEDWIG</p>
      </div>
      <ConnectButton />
    </div>
  )
}

export default Header