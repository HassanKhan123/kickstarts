import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xF8aDf3127B6EC3cb757075c689F2C3Df4c207b0f'
);

export default instance
