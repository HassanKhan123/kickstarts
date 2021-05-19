import Web3 from 'web3';

let web3;

const ethEnabled = async () => {
  if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // await window.ethereum.request({ method: 'eth_requestAccounts' });
    web3 = new Web3(window.ethereum);
  } else {
    const provider = new Web3.providers.HttpProvider(
      'https://rinkeby.infura.io/v3/2107de90a19f4dd69c0eef59805a707e'
    );

    web3 = new Web3(provider);
  }
};

ethEnabled();

export default web3;
