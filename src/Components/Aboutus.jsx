import React from 'react'
import Direct from '../assets/direct.png'
import Decentralised from '../assets/decentralised.jpeg'
import Fair from '../assets/fair.png'
const Aboutus = () => {
  return (
    <div className='bg-[#44a6f1] p-5 text-center'>
      <h1 className='text-3xl mb-10 font-bold'>About Us</h1>
      <p className='text-l'>Stablecoins are not just for stable portfolios, they're the unsung heroes in this crypto circus, adding a dash of stability to the world.<br></br>Wanchain drives blockchain adoption through crosschain interoperability by building fully decentralised direct bridges that connect the world’s many siloed blockchain networks.</p>
      <div className='flex justify-around mt-20'>
        <div><img src={Direct} alt="" /><p className='font-bold text-xl'>Direct</p></div>
        <div><img src={Decentralised} alt="" /><p  className='font-bold text-xl'>Decentralised</p></div>
        <div><img src={Fair} alt="" /><p  className='font-bold text-xl'>Fair</p></div>
        
        
      </div>
    </div>
  )
}

export default Aboutus
