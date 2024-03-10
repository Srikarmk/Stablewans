import React from 'react'
import { Link } from 'react-router-dom'
import ConnectWallet from '../ConnectWallet'
import { useRef } from 'react'
const Stablewans = () => {
    const ref = useRef(null);
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
      };
  return (
    <div className='bg-[#44a6f1] h-screen'>
      <div className="w-full">
      <nav className="flex justify-between p-5 items-center">
        <div className="w-[60%] text-5xl text-black font-bold">SW</div>
        <div className="flex justify-around w-[40%]">
        <Link to="/"><a onClick="{handleClick}">Home</a></Link>
        <Link to="/"><a href=""><button onClick={handleClick}>About us</button></a></Link>
        <Link to="/stablewans"><a href=""><button href="">Enter Dapp</button></a></Link>
          <ConnectWallet></ConnectWallet>
        </div>
      </nav>
      </div>
      <hr className='border-1 border-black'/>
      {/* Dapp Part */}
      <div className='w-full mx-auto text-center mt-20'>
      <p className='mb-20 text-3xl font-bold'>You Pay</p>
      <div className='flex w-[50%] mx-auto justify-between mb-20'>
      <div>
        <input type="text" 
        id="wanBTC" 
        className='border-2 mr-2 py-2 px-5 border-black'
        placeholder='Enter a wanBTC value '/>
        <label htmlFor="wanBTC" className='bg-slate-500 text-white py-2 px-5'>WanBTC</label>
      </div>
      <div>
        <input type="text" 
        id="wanETH" 
        className='border-2 mr-2 py-2 px-5 border-black'
        placeholder='Enter a wanETH value '/>
        <label htmlFor="wanETH" className='bg-slate-500 text-white py-2 px-5'>WanETH</label>
      </div>
      </div>
          <button className='mb-10 px-20 py-3 bg-[#44a6f1] rounded-l font-semibold'>Calculate</button>
      <p className='mb-20 text-3xl font-bold'>You Receive</p>
      <div className='mb-20'>
        <input type="text" 
        id="SWC" 
        className='border-2 mr-2 py-2 px-5 border-black'
        placeholder='StableWan Display'/>
        <label htmlFor="SWC" className='bg-slate-500 text-white py-2 px-5'>xyz SWC</label>
      </div>
      </div>

    </div>
  )
}

export default Stablewans
