import React from 'react'
import Sc from "../assets/sc.png"
const Home = () => {
  return (
    <div className='flex mt-10 justify-around'>
      <div className='w-[50%] p-10 space-y-10'>
        <h1 className='text-3xl text-[#44a6f1] font-bold'>StableWans - A Wanchain based StableCoin</h1>
        <p className='text-l'>The system is designed to be as minimal as possible, and have the tokens     maintain a <br></br> 1 token == $1 peg at all times.<br></br><br></br>
        This is a stablecoin with the properties:<br></br><br></br>
        <li>Exogenously Collateralized</li>
        <li>Dollar Pegged</li>
        <li>Algorithmically Stable</li></p>
        <button className='py-2 px-20 bg-[#44a6f1] text-white rounded-xl'>Enter Dapp</button>
      </div>
      <div>
        <img src={Sc} alt="" />
      </div>
    </div>
  )
}

export default Home
