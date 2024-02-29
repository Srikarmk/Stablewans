import React from "react";
import { useRef } from "react";
import ConnectWallet from "./Components/ConnectWallet";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Usecases from "./Components/Usecases";
const App = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <nav className="flex justify-between p-10">
        <div className="w-[60%] text-5xl text-[#44a6f1] font-bold">SW</div>
        <div className="flex justify-around w-[40%]">
          <a onClick="{handleClick}">Home</a>
          <a href=""><button onClick={handleClick}>About us</button></a>
          <a href=""><button href="">Enter Dapp</button></a>
          <ConnectWallet></ConnectWallet>
        </div>
      </nav>
      <div ref={ref}>
      <Home></Home>
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
  );
};

export default App;
