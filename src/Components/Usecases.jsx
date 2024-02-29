import React from 'react'
import Onramp from "../assets/onramp.jpeg"
import Remittances from "../assets/remittances.png"
import Liquidity from "../assets/liquidity.png"
const Usecases = () => {
  return (
    <div>
      <h1 className='mt-10 text-center text-3xl font-bold'>Use Cases</h1>
      <div className='flex justify-around mt-20 text-center'>
        <div className='w-[30%] h-[40%]'><img src={Onramp} alt=""/><p className='font-bold text-xl'>Onramp/Off-ramps</p></div>
        <div className='w-[30%] h-[40%]'><img src={Remittances} alt=""/><p className='font-bold text-xl'>Remittances</p></div>
        <div className='w-[30%] h-[40%]'><img src={Liquidity} alt=""/><p className='font-bold text-xl'>Liquidity</p></div>
        {/* <div><img src={} alt="" /><p  className='font-bold text-xl'>Decentralised</p></div>
        <div><img src={} alt="" /><p  className='font-bold text-xl'>Fair</p></div> */}
        
        
      </div>
    </div>
  )
}

export default Usecases
