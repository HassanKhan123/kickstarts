import React, { useEffect } from 'react';

import factory from '../ethereum/factory';

function NewCampaign() {
  useEffect(() => {
    (async () => {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      console.log('campaigns======', campaigns);
    })();
  }, []);
  return (
    <div>
      <h1>New Campaign</h1>
    </div>
  );
}

export default NewCampaign;
