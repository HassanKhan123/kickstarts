import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xDa3F31a511fba4F8686412D5816BB3a2dB945DDA'
);

export default instance;
