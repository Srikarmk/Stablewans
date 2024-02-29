import { useState } from "react";
import { ethers } from "ethers";
import { useEffect } from "react";

function ConnectWallet() {
  // State variables for wallet connection status and address
  // const [connected, setConnected] = useState(false);
  // const [walletAddress, setWalletAddress] = useState("");

  // // Function to connect/disconnect the wallet
  // async function connectWallet() {
  //   if (!connected) {
  //     // Connect the wallet using ethers.js
  //     const provider = new ethers.BrowserProvider(window.ethereum);
  //     const signer = await provider.getSigner();
  //     const _walletAddress = await signer.getAddress();
  //     setConnected(true);
  //     setWalletAddress(_walletAddress);
  //   } else {
  //     // Disconnect the wallet
  //     window.ethereum.selectedAddress = null;
  //     setConnected(false);
  //     setWalletAddress("");
  //   }
  // }

  // return (
  //   <div className="app">
  //     <div className="main">
  //       <div className="content">
  //         <button className="btn" onClick={connectWallet}>
  //           {connected ? "Disconnect Wallet" : "Connect Wallet"}
  //         </button>
  //         <h3>Address</h3>
  //         <h4 className="wal-add">{walletAddress}</h4>
  //       </div>
  //     </div>
  //   </div>
  // );
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  // state for keeping track of current connected account.
  const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setIsWalletInstalled(true);
    }
  }, []);

  async function connectWallet() {
    window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts) => {
        setAccount(accounts[0]);
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  if (account === null) {
    return (
      <div className="App">
        {isWalletInstalled ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <p>Install Metamask wallet</p>
        )}
      </div>
    );
  }
  return (
    <div className="App">
      <p>Connected as: {account}</p>
    </div>
  );
}

export default ConnectWallet;
