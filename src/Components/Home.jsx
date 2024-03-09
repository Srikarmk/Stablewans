import React from 'react'
import Sc from "../assets/sc.png"
import { useRef } from "react";
import ConnectWallet from "./ConnectWallet";
import Aboutus from "./Aboutus";
import Usecases from "./Usecases";
import { Link } from 'react-router-dom';
const Home = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="w-full">
      <nav className="flex justify-between p-10 items-center">
        <div className="w-[60%] text-5xl text-[#44a6f1] font-bold">SW</div>
        <div className="flex justify-around w-[40%]">
        <Link to="/"><a onClick="{handleClick}">Home</a></Link>
        <Link to="/"><a href=""><button onClick={handleClick}>About us</button></a></Link>
        <Link to="/stablewans"><a href=""><button href="">Enter Dapp</button></a></Link>
          <ConnectWallet></ConnectWallet>
        </div>
      </nav>
      <div ref={ref}>
      <div className='flex mt-10 justify-around'>
      <div className='w-[50%] p-10 space-y-10'>
        <h1 className='text-3xl text-[#44a6f1] font-bold'>StableWans - A Wanchain based StableCoin</h1>
        <p className='text-l'>The system is designed to be as minimal as possible, and have the tokens     maintain a <br></br> 1 token == $1 peg at all times.<br></br><br></br>
        This is a stablecoin with the properties:<br></br><br></br>
        <li>Exogenously Collateralized</li>
        <li>Dollar Pegged</li>
        <li>Algorithmically Stable</li></p>
        <Link to="/stablewans">
        <button className='py-2 px-20 bg-[#44a6f1] text-white rounded-xl mt-5'>Enter Dapp</button></Link>
      </div>
      <div>
        <img src={Sc} alt="" />
      </div>
    </div>
      </div>
      <div ref={ref}>
      <Aboutus ></Aboutus>
      </div>
      <Usecases></Usecases>
      <div className="bg-[#44a6f1] mt-10 p-5 text-center">
        <h1 className="text-3xl font-bold mb-5">StablesWans</h1>
        <p>Stablecoins are not just for stable portfolios, they're the unsung heroes in this crypto circus, adding a dash of stability to the world.</p>
      </div>
    </div>
   
  )
}

export default Home
